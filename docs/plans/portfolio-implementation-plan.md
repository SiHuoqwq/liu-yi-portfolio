# 刘燚个人作品集 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一个中文为主、证据导向、响应式且可访问的 AI 应用开发求职作品集，包含首页、两个 Case Study 和自定义 404。

**Architecture:** 使用 Vite 托管 React + TypeScript 单页应用，React Router 提供三个懒加载路由和 404；内容常量与页面组件分离，复用基础视觉与 Trace 组件，同时为两个项目保留不同的证据呈现。Tailwind CSS 与少量全局 CSS 变量实现固定深色主题，Framer Motion 仅负责语义化动效，并由 ReducedMotionProvider 统一降级。

**Tech Stack:** React、TypeScript、Vite、React Router、Tailwind CSS、Framer Motion、Lucide React、Vitest、React Testing Library、Playwright、npm。

## Global Constraints

- 正式设计基线：`docs/specs/portfolio-design-spec.md`，不得重新选择视觉方向或虚构内容。
- 固定参数：`DESIGN_VARIANCE: 7`、`MOTION_INTENSITY: 6`、`VISUAL_DENSITY: 5`。
- 仅实现 `/`、`/projects/xishu`、`/projects/knowledgeflow` 与自定义 404。
- 不调用 imagegen，不生成项目截图，不使用随机图、第三方图床或 GitHub Raw 生产图片。
- 第一版不引入 Next.js、GSAP、Three.js、CMS、MDX、Zustand、TanStack Query、大型 UI 组件库或图表库。
- 所有可见项目事实必须来自已确认规格；计划功能标记 `NEXT / PLANNED`，结构示例标记“示意”。
- 简历或截图不存在时显示可访问的不可用状态或 `AssetPlaceholder`，不得创建假文件或失效链接。
- 每项实现先写失败测试，再写最小实现，再运行相关测试；提交前运行该阶段完整门禁。
- 不自动 push，不创建远程仓库、Release 或 Tag，不重写历史。

## Planned File Map

```text
.
├── index.html                         # lang、基础 meta 与应用挂载点
├── package.json                       # scripts 与依赖
├── package-lock.json                  # npm 锁文件
├── vite.config.ts                     # Vite 与 Vitest 配置
├── tsconfig*.json                     # TypeScript 配置
├── eslint.config.js                   # ESLint 配置
├── playwright.config.ts               # E2E 浏览器与 webServer
├── public/
│   ├── favicon.svg                    # 简洁的 LIU YI 本地标记
│   ├── robots.txt
│   ├── resume/                        # 用户提供的真实简历
│   └── images/                        # 用户提供的真实截图与分享图
├── src/
│   ├── main.tsx                       # React 入口
│   ├── app/App.tsx                    # RouterProvider 与全局 providers
│   ├── app/router.tsx                 # 懒加载路由定义
│   ├── app/seo.ts                     # route meta 与可配置 Site URL
│   ├── styles/tokens.css              # 设计、动效、层级令牌
│   ├── styles/global.css              # reset、字体回退、focus、reduced motion
│   ├── content/profile.ts             # 个人信息与链接
│   ├── content/projects.ts            # 两项目真值、状态和资产清单
│   ├── components/layout/*            # Container、Header、Menu、Footer、SkipLink
│   ├── components/ui/*                # Button、Link、Status、Image、Placeholder、Reveal
│   ├── components/trace/*             # Trace 及节点、连接、状态、进度
│   ├── components/projects/*          # 首页项目档案与 Sticky Stack
│   ├── components/case-study/*        # Case Study 共享阅读组件
│   ├── pages/HomePage.tsx              # 首页静态组合
│   ├── pages/XishuPage.tsx             # 析数 Case Study
│   ├── pages/KnowledgeFlowPage.tsx     # KnowledgeFlow Case Study
│   ├── pages/NotFoundPage.tsx          # 404
│   └── test/*                          # 测试环境、render helper 与资产 mock
├── tests/e2e/portfolio.spec.ts        # 核心浏览器流
└── docs/verification/portfolio.md     # 最终真实门禁、资产与 Lighthouse 记录
```

---

### Task 1: 初始化可构建、可测试的应用骨架

**Files:**
- Create: `package.json`, `package-lock.json`, `index.html`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `eslint.config.js`, `playwright.config.ts`
- Create: `src/main.tsx`, `src/app/App.tsx`, `src/app/router.tsx`, `src/test/setup.ts`, `src/test/render.tsx`
- Test: `src/app/App.test.tsx`

**Interfaces:**
- Produces: `App(): JSX.Element`, `router: Router`, `renderApp(initialEntries?: string[])`。
- Consumes: 无。

- [ ] **Step 1: 检查环境与工作区**

  运行 `node --version`、`npm --version`、`git status --short --branch` 和目录列表。若缺少 Node/npm 或出现规格以外应用文件，停止并报告。

- [ ] **Step 2: 初始化 Vite React TypeScript 并安装规格依赖**

  采用非破坏式初始化：保留并不得覆盖 `AGENTS.md`、`PROJECT_MEMORY.md` 和 `docs/`。仅当 create-vite 能在当前非空目录中保证不删除、不覆盖现有文件时才可使用；否则手动创建 Vite + React + TypeScript 所需配置和源文件。随后安装 React Router、Tailwind CSS、Framer Motion、Lucide React、Vitest、Testing Library、jsdom 与 Playwright。安装前后都核对 `package.json`，不加入全局约束禁止的依赖。

- [ ] **Step 3: 写失败的路由壳测试**

  在 `App.test.tsx` 中以 Memory Router 渲染 `/`，断言存在 `main` 与唯一 h1；此时页面未实现，应失败。

- [ ] **Step 4: 配置最小路由与测试环境**

  建立四个懒加载 route module 的临时语义壳，只包含 route 名称，不包含视觉页面；`renderApp` 接受初始路径，测试环境加载 jest-dom。

- [ ] **Step 5: 运行骨架门禁**

  运行 `npm run typecheck`、`npm run lint`、`npm run test -- --run`、`npm run build`。预期全部通过且 ESLint 0 warning。

- [ ] **Step 6: 提交阶段成果**

  仅在工作区清晰且门禁通过时提交：`chore: initialize portfolio application`。

### Task 2: 建立设计令牌、基础交互和 Reduced Motion

**Files:**
- Create: `src/styles/tokens.css`, `src/styles/global.css`
- Create: `src/components/ui/PrimaryButton.tsx`, `SecondaryButton.tsx`, `TextLink.tsx`, `StatusLabel.tsx`, `ProjectEvidenceTag.tsx`, `MotionReveal.tsx`, `ReducedMotionProvider.tsx`
- Create: `src/components/layout/Container.tsx`, `SkipLink.tsx`
- Test: `src/components/ui/ui.test.tsx`, `src/components/ui/ReducedMotionProvider.test.tsx`

**Interfaces:**
- Produces: `useReducedMotionPreference(): boolean`; buttons accept native anchor props plus `disabledReason?: string`; `MotionReveal` renders all children statically when reduce is true。
- Consumes: design tokens from approved spec。

- [ ] **Step 1: 写令牌与基础组件失败测试**

  断言禁用简历操作不渲染 `href`、外链含 `target="_blank"` 与 `rel="noreferrer"`、状态标签同时输出文本、Reduced Motion 下内容完整可见。

- [ ] **Step 2: 运行测试确认失败**

  运行 `npm run test -- --run src/components/ui`，预期因组件不存在而失败。

- [ ] **Step 3: 实现固定深色令牌与全局可访问性基线**

  写入已批准颜色、字号、容器、圆角、时长、easing 与 z-index；设置系统中文无衬线和 IBM Plex Mono 回退、`font-display: swap`、可见 `:focus-visible`、skip-link、`color-scheme: dark` 和 Reduced Motion CSS 分支。

- [ ] **Step 4: 实现最小组件接口**

  按语义区分链接和不可用状态，不使用按钮伪装导航；Lucide 仅在需要外链或菜单图标处使用并统一 `strokeWidth`。

- [ ] **Step 5: 复跑相关与全量测试**

  先运行 `npm run test -- --run src/components/ui`，再运行 typecheck、lint、unit、build。

- [ ] **Step 6: 提交阶段成果**

  提交：`feat: build portfolio design system`。

### Task 3: 实现 Header、Mobile Menu、Footer 与 404

**Files:**
- Create: `src/content/profile.ts`
- Create: `src/components/layout/SiteHeader.tsx`, `MobileMenu.tsx`, `SiteFooter.tsx`
- Modify: `src/app/App.tsx`, `src/app/router.tsx`
- Create: `src/pages/NotFoundPage.tsx`
- Test: `src/components/layout/SiteHeader.test.tsx`, `MobileMenu.test.tsx`, `src/pages/NotFoundPage.test.tsx`

**Interfaces:**
- Produces: `siteLinks`, `resumeAssetPath`, `SiteHeader`, `MobileMenu`, `SiteFooter`, `NotFoundPage`。
- Consumes: UI primitives and `useReducedMotionPreference`。

- [ ] **Step 1: 写 Header 与 Menu 失败测试**

  覆盖桌面导航文案、anchor href、菜单打开/关闭、Escape、点击链接关闭、关闭后焦点返回、隐藏菜单不可 Tab、简历缺失时无失效链接。

- [ ] **Step 2: 写 404 失败测试**

  访问未知路径，断言唯一 h1 与返回首页链接。

- [ ] **Step 3: 运行测试确认失败**

  运行 `npm run test -- --run src/components/layout src/pages/NotFoundPage.test.tsx`。

- [ ] **Step 4: 实现导航、焦点管理和滚动锁定**

  Mobile Menu 使用 dialog 语义、首尾 focus trap、Escape 和清理函数；仅菜单打开期间锁定 body，并在卸载或关闭时恢复。Header 滚动状态使用 IntersectionObserver 或 Motion，不用 window scroll listener。

- [ ] **Step 5: 实现 Footer 与 404**

  Footer 不重复完整导航、不显示手机号；404 提供清楚返回路径。

- [ ] **Step 6: 验证并提交**

  运行 typecheck、lint、unit、build；通过后并入后续首页提交或单独提交 `feat: add portfolio shell navigation`。

### Task 4: 实现首页静态内容与响应式结构

**Files:**
- Create: `src/content/projects.ts`
- Create: `src/pages/HomePage.tsx`
- Create: `src/components/home/HeroSection.tsx`, `SelectedWorkIntro.tsx`, `EngineeringPrinciples.tsx`, `Capabilities.tsx`, `AboutContact.tsx`
- Create: `src/components/trace/Trace.tsx`, `TraceStep.tsx`, `TraceConnector.tsx`, `TraceStatus.tsx`, `TraceProgress.tsx`
- Create: `src/components/projects/FeaturedProjectStack.tsx`, `FeaturedProjectPanel.tsx`, `ProjectMetrics.tsx`, `ProjectLinks.tsx`, `ProjectIndex.tsx`
- Test: `src/pages/HomePage.test.tsx`, `src/components/trace/Trace.test.tsx`, `src/components/projects/FeaturedProjectPanel.test.tsx`

**Interfaces:**
- Produces: typed `ProjectRecord`, `TraceStepRecord`, two immutable project records, anchor IDs `projects`, `principles`, `capabilities`, `about`。
- Consumes: layout shell and UI primitives。

- [ ] **Step 1: 写首页内容真值测试**

  断言唯一 h1、固定章节顺序、Hero 原文、两个项目链接与 GitHub、准确版本状态、真实测试数字、KnowledgeFlow Candidate 和 Fake/Real 边界文本。

- [ ] **Step 2: 写无动画 Trace 完整性测试**

  Reduced Motion 为 true 时，断言五个 Hero Trace 节点与最终状态均在 DOM 中可见。

- [ ] **Step 3: 运行测试确认失败**

  运行 `npm run test -- --run src/pages/HomePage.test.tsx src/components/trace src/components/projects`。

- [ ] **Step 4: 实现 typed content 与静态首页**

  先完成语义结构和 12 栏布局，不实现复杂动画。析数和 KnowledgeFlow 使用不同布局族；Principles 为连续轨迹，Capabilities 为证据索引，不使用等宽卡片墙。

- [ ] **Step 5: 完成响应式静态规则**

  明确 `<768`、`768-1023`、`>=1024`、`>=1280` 每个多栏组件的降级；不使用固定 `h-screen`，保证 390px 首屏 CTA 和无横向溢出。

- [ ] **Step 6: 视觉静态检查**

  在 1440x900、1024x768、768x1024、390x844 截图检查内容顺序、栅格、对比度与横向溢出。尚无截图时必须显示明确 AssetPlaceholder，不伪造产品界面。

- [ ] **Step 7: 验证并提交**

  运行 typecheck、lint、unit、build；提交 `feat: implement portfolio homepage`。

### Task 5: 实现析数 Case Study 静态结构

**Files:**
- Create: `src/pages/XishuPage.tsx`
- Create: `src/components/case-study/CaseStudyHero.tsx`, `ProjectContext.tsx`, `ResponsibilityList.tsx`, `ProcessTrace.tsx`, `DecisionComparison.tsx`, `TechnicalRecord.tsx`, `VerificationRecord.tsx`, `LimitationList.tsx`, `CaseStudyNavigation.tsx`
- Create: `src/components/xishu/XishuArchitectureComparison.tsx`, `ArtifactShowcase.tsx`, `RunRecoveryDiagram.tsx`
- Test: `src/pages/XishuPage.test.tsx`, `src/components/xishu/XishuArchitectureComparison.test.tsx`

**Interfaces:**
- Produces: reusable case-study reading components plus Xishu-specific diagrams; any diagram example exposes visible `示意` label。
- Consumes: Xishu project record and global layout/UI primitives。

- [ ] **Step 1: 写析数真实性失败测试**

  断言章节顺序、V1/V2 真实差异、183/183 与 59/59、v2.0.0、合作式取消和无分布式执行限制。真实性测试检查语义状态而非关键词是否出现：OpenAI Provider、任意行业、云部署、Redis、P95、Live Demo 等尚未完成项可以出现在 `CURRENT LIMITATIONS`、`NEXT / PLANNED` 或明确否定说明中，但不得被归入 `IMPLEMENTED`、`SUPPORTED`、`VERIFIED`、`CORE CAPABILITY` 或 `RELEASED FEATURE`。

- [ ] **Step 2: 写示意与标题层级测试**

  断言单 h1、连续标题层级、结构图带“示意”、技术状态有文字而非只靠颜色。

- [ ] **Step 3: 运行测试确认失败**

  运行 `npm run test -- --run src/pages/XishuPage.test.tsx src/components/xishu`。

- [ ] **Step 4: 实现完整静态阅读顺序**

  依正式规格实现 12 章，先保证内容、技术记录与限制完整，不添加复杂 motion。桌面可有局部 sticky，移动端自然文档流。

- [ ] **Step 5: 验证路由、响应式和内容真值**

  运行相关 unit、typecheck、lint、build，并对 1440、1024、768、390 宽度做截图检查。

- [ ] **Step 6: 提交**

  提交 `feat: add xishu case study`。

### Task 6: 实现 KnowledgeFlow Case Study 静态结构

**Files:**
- Create: `src/pages/KnowledgeFlowPage.tsx`
- Create: `src/components/knowledgeflow/RagContextBudget.tsx`, `SafeDocumentUpdate.tsx`, `SourceValidation.tsx`, `BrowserAcceptanceFlow.tsx`
- Test: `src/pages/KnowledgeFlowPage.test.tsx`, `src/components/knowledgeflow/SourceValidation.test.tsx`

**Interfaces:**
- Produces: KnowledgeFlow-specific ingestion、retrieval、source and acceptance diagrams。
- Consumes: shared Case Study components and KnowledgeFlow project record。

- [ ] **Step 1: 写 KnowledgeFlow 真实性失败测试**

  断言 13 章、PDF/TXT/Markdown、BGE、Chroma、Similarity/MMR、Context Budget、固定拒答、17/17、51/51、Fake Provider PASS 与 Real DeepSeek NOT VERIFIED。

- [ ] **Step 2: 写禁止声明测试**

  以章节和状态语义断言页面没有把 Agent、LangGraph、Tool Calling、DOCX、OCR、HyDE、BM25、Hybrid Search、Reranker、长期服务端记忆、正式 Release、公网部署或 Real DeepSeek Full-stack 写成已完成。上述词可以出现在 `CURRENT LIMITATIONS`、`NEXT / PLANNED` 或明确否定说明中，但不得被归入 `IMPLEMENTED`、`SUPPORTED`、`VERIFIED`、`CORE CAPABILITY` 或 `RELEASED FEATURE`；其中 Real DeepSeek Full-stack 必须保持 `NOT VERIFIED`。

- [ ] **Step 3: 运行测试确认失败**

  运行 `npm run test -- --run src/pages/KnowledgeFlowPage.test.tsx src/components/knowledgeflow`。

- [ ] **Step 4: 实现完整静态阅读顺序**

  保持与析数不同的版式：流程在上、截图为中段视觉主体、技术和验收记录在下。所有结构示例标记“示意”。

- [ ] **Step 5: 验证并提交**

  运行 unit、typecheck、lint、build 和响应式截图检查；提交 `feat: add knowledgeflow case study`。

### Task 7: 接入真实资产与可访问 Screenshot Gallery

**Files:**
- Create: `src/components/ui/ResponsiveImage.tsx`, `AssetPlaceholder.tsx`
- Create: `src/components/projects/ProjectScreenshot.tsx`
- Create: `src/components/case-study/ScreenshotGallery.tsx`
- Create: `src/app/assets.ts`
- Test: `src/components/ui/AssetPlaceholder.test.tsx`, `src/components/case-study/ScreenshotGallery.test.tsx`, `src/app/assets.test.ts`

**Interfaces:**
- Produces: `assetManifest`, `getAssetAvailability(path): boolean`, Gallery button/tabpanel model; image props require width、height、alt、srcSet。
- Consumes: exact approved asset paths。

- [ ] **Step 1: 只检查项目目录内资产**

  不扫描仓库外。记录简历、头像、两组截图、favicon 和本地分享图的实际存在状态。

- [ ] **Step 2: 写缺失资产与 Gallery 失败测试**

  断言缺图显示准确文件名和开发占位说明；缺简历不渲染失效链接；Gallery 支持方向键、Home、End、Enter/Space，移动端所有截图按阅读顺序直接可见。

- [ ] **Step 3: 运行测试确认失败**

  运行 `npm run test -- --run src/components/ui/AssetPlaceholder.test.tsx src/components/case-study src/app/assets.test.ts`。

- [ ] **Step 4: 接入用户提供的真实资产**

  图片使用准确 alt、显式尺寸、WebP、srcset；Hero 图可设高优先级，其余 lazy。不得编辑、生成或伪造缺失项目截图。

- [ ] **Step 5: 更新发布门禁记录**

  将仍缺失的具体路径写入 `docs/verification/portfolio.md`，标记其是否阻止正式发布。

- [ ] **Step 6: 验证**

  运行相关 unit、全量 unit、typecheck、lint、build，并用键盘操作 Gallery。

### Task 8: 添加语义化动效与组件级降级

**Files:**
- Modify: `src/components/home/HeroSection.tsx`
- Modify: `src/components/trace/*`
- Modify: `src/components/projects/FeaturedProjectStack.tsx`, `FeaturedProjectPanel.tsx`
- Modify: `src/components/home/EngineeringPrinciples.tsx`
- Modify: `src/components/case-study/ProcessTrace.tsx`, `ScreenshotGallery.tsx`
- Test: `src/components/motion/motion-behavior.test.tsx`

**Interfaces:**
- Produces: Motion variants derived from approved tokens; all animated components accept or read reduced-motion state。
- Consumes: static pages already verified in Tasks 4-7。

- [ ] **Step 1: 写 Reduced Motion 与无高频 state 测试**

  Mock `matchMedia`，断言 reduced 下不渲染 pin/magnet transform、所有 Trace 节点立即可见、Gallery 仍可操作。代码审查禁止 window scroll listener 和基于 scrollY 的 React state。

- [ ] **Step 2: 实现 Hero Trace 序列**

  总时长约 1.8 秒，节点 180ms 递进；只动 transform/opacity，不阻断交互，不循环。Reduced Motion 直接完成。

- [ ] **Step 3: 实现 Featured Project Sticky**

  仅 `>=1024px` 且 no-preference；CSS sticky + Framer Motion `useScroll/useTransform`，scale 下限约 0.965、上移 18-24px、轻微降亮，不旋转不模糊。其他条件普通纵向。

- [ ] **Step 4: 实现其余低强度动效**

  Engineering Trace 只表示阅读进度；Case Study ProcessTrace 逐段 reveal；截图 hover 轻微放大；桌面按钮可轻量 Magnet。每区最多一个主动画。

- [ ] **Step 5: 运行 motion、Reduced Motion 和性能回归**

  运行 unit、Playwright reduced-motion project、typecheck、lint、build；人工检查移动端无 Magnet、无 sticky stack。

- [ ] **Step 6: 提交**

  提交 `feat: add responsive motion system`。

### Task 9: 完成 SEO、E2E、可访问性与发布门禁

**Files:**
- Modify: `index.html`, `src/app/seo.ts`, route pages
- Create: `public/robots.txt`, `public/favicon.svg`
- Create: `tests/e2e/portfolio.spec.ts`
- Create: `docs/verification/portfolio.md`
- Test: all unit and E2E suites

**Interfaces:**
- Produces: route-specific title/description/Open Graph; optional canonical only when configured `VITE_SITE_URL` is valid。
- Consumes: complete application and actual asset manifest。

- [ ] **Step 1: 写 SEO 与 external-link 失败测试**

  断言 `lang="zh-CN"`、三个 route 的独立 title/description、无 Site URL 时不虚构 canonical、外链属性正确、本地 OG 图只在真实存在时引用。

- [ ] **Step 2: 实现 SEO 与 robots**

  使用可配置 Site URL，验证 URL 后才写 canonical；favicon 与 OG 均为本地资产。不得写假域名。

- [ ] **Step 3: 写完整 Playwright 流程**

  覆盖首页 Hero、两个项目往返、GitHub、移动菜单、简历状态、390px `scrollWidth <= clientWidth`、Reduced Motion 内容完整、404 返回首页。

- [ ] **Step 4: 运行自动化门禁**

  依次运行 `npm run typecheck`、`npm run lint`、`npm run test -- --run`、`npm run test:e2e`、`npm run build`。把命令、日期、真实结果和失败项原样写入 verification 文档。

- [ ] **Step 5: 运行人工可访问性与响应式检查**

  仅键盘遍历导航、菜单、Gallery 和 CTA；检查焦点、标题树、alt、状态非颜色依赖、Escape、焦点恢复。检查 1440x900、1280x800、1024x768、768x1024、390x844、360x800。

- [ ] **Step 6: 运行 Lighthouse**

  对桌面与移动生产构建运行 Lighthouse，记录真实性能分数、LCP、INP 或可用替代实验指标、CLS；不修改数据。未达目标时定位可控原因并针对性修复。

- [ ] **Step 7: 内容真实性自审**

  搜索禁止声明和伪造指标，逐页核对项目状态、数字、Candidate、Fake 与 Real 边界、NEXT / PLANNED 和“示意”。

- [ ] **Step 8: 最终 Skill 审查**

  使用 frontend-design 和 design-taste-frontend 只读审查模板感、重复卡片、Evidence Trace、视觉重心、动效强度、移动重排、虚构内容与占位资产；只做针对性修复。

- [ ] **Step 9: 提交验收与文档**

  自动化通过且工作区清楚时依次提交 `test: add portfolio acceptance coverage` 与 `docs: record implementation and verification`。不 push。

## Plan Self-Review

- Spec coverage：任务覆盖初始化、设计基础、首页、两页 Case Study、资产、动效、测试、SEO、性能、无障碍、最终 Skill 审查与 Git 规则。
- Placeholder scan：计划没有未定占位词或“稍后实现”式空步骤；真实资产缺失走明确 AssetPlaceholder 和发布门禁。
- Type consistency：全局内容通过 `ProjectRecord` / `TraceStepRecord`，Reduced Motion 通过单一 hook/provider，资产通过 `assetManifest`，后续任务均消费前序接口。
- Scope boundary：用户已批准设计规格和本实施计划，并授权在 `codex/portfolio-implementation` 隔离分支执行 Phase 1–9；正常 Task 之间无需再次等待批准。只有命中既定停止条件、发生真实性冲突、需要访问项目目录之外文件、需要新增未批准依赖或需要破坏性 Git 操作时才停止询问。
