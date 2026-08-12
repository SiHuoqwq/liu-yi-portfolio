# 刘燚个人作品集设计规格

> 状态：用户已确认。本文是实施基线，不是新的视觉提案。
>
> 当前阶段：Phase 0，只记录规格，不编写页面代码。

## 1. 目标与受众

为刘燚创建中文为主的求职作品集，服务于 AI 应用开发工程师和 AI Agent 开发工程师岗位投递。页面需要让技术招聘者快速确认：候选人能够独立完成 AI 工作流、Python / FastAPI 后端、数据与 RAG Pipeline、React / TypeScript 前端、状态持久化与恢复、自动化测试及发布验收。

网站仅包含以下路由：

- `/`：首页
- `/projects/xishu`：析数 Case Study
- `/projects/knowledgeflow`：KnowledgeFlow AI Case Study
- `*`：自定义 404，可选但计划纳入第一版

不增加 Blog、Services、独立 Skills、独立 Contact 或其他无必要页面。

## 2. Design Read 与固定参数

Design Read：面向技术招聘者的开发者作品集，采用深色技术编辑与工程证据记录语言，使用 React、Tailwind CSS 和克制的 Framer Motion。

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 6`
- `VISUAL_DENSITY: 5`

视觉概念为 `Evidence Trace | 证据轨迹`。它表达四项工程事实：模型运行过程可追踪、关键结论有证据、系统状态可恢复、测试与发布结果可复核。

整站仅保留两个强视觉记忆点：

1. 首页 Hero 右侧的动态 Evidence Trace。
2. 首页两个 Sticky 项目档案。

其他区域保持安静。视觉装饰不得压过项目证据与阅读顺序。

## 3. Skill 审查结论与优先级处理

已使用 `frontend-design` 与 `design-taste-frontend` 审查已确认方案。结论：方案具有项目专属性，Evidence Trace 与两个真实项目的工程证据直接相关；非对称 Hero、不同结构的两个项目档案和连续工程轨迹可避免通用 AI 模板感；响应式、Reduced Motion、性能和可访问性均可按规格实现，未发现必须停工的严重冲突。

以下用户明确决策覆盖 Skill 默认偏好：

- 使用 Lucide React，因为正式规格明确指定；全站只使用这一套图标并统一描边。
- 使用固定深色主题，因为正式规格明确指定全站深色令牌；不额外设计浅色模式。
- 保留 `SELECTED WORK / 02`、`ENGINEERING PRINCIPLES / 04` 等真实信息结构，因为正式规格明确指定；实施时控制数量，避免扩散成模板化章节编号。
- Hero 使用工程 Trace 而非生成图片，因为 Trace 是项目专属核心视觉；禁止调用 imagegen 或伪造产品截图。
- 使用真实项目截图或明确的 `AssetPlaceholder`。图片缺失时不以随机图、生成图或假 Dashboard 替代。
- 首页 Hero 文案、CTA 数量和项目状态按正式规格原文执行，不因 Skill 的通用营销页压缩规则改写事实。

## 4. 视觉语言与禁止项

关键词：深色技术编辑、工程记录、非对称排版、真实项目证据、克制动态轨迹、清晰信息层级。

禁止使用：

- 通用 AI 紫色渐变、黑底紫色网格、大面积玻璃拟态
- 粒子宇宙、3D 球体、WebGL、Three.js、GIF 跑马灯
- 虚构终端、服务器状态、运行时间、IP、天气、城市、系统负载
- 大量发光圆点、技能 Logo 墙、技能熟练度条
- 全卡片化、三张等宽功能卡、机械左右交替
- 巨型头像 Hero、AI 生成项目截图、虚构 Dashboard
- 任何未经证实的业务、用户、性能、部署或商业数据

## 5. 技术基线

- React + TypeScript + Vite
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React
- Vitest + React Testing Library
- Playwright
- npm，提交 lockfile

第一版不引入 Next.js、GSAP、Three.js、CMS、MDX、Zustand、TanStack Query、大型 UI 组件库、图表库或远程字体运行时依赖。网站为静态作品集，不需要后端。只有 Framer Motion 无法稳定实现批准交互时，才能另行提议 GSAP，未经批准不得安装。

## 6. 设计令牌

### 6.1 颜色

```css
--color-bg-primary: #0b0e12;
--color-bg-secondary: #0e1318;
--color-bg-elevated: #11171d;
--color-bg-rag: #15141a;

--color-text-primary: #f2f5f7;
--color-text-secondary: #a0abb6;
--color-text-muted: #6f7b87;

--color-border: rgba(185, 201, 216, 0.14);
--color-border-strong: rgba(185, 201, 216, 0.24);

--color-accent-blue: #78b7ff;
--color-accent-blue-soft: rgba(120, 183, 255, 0.14);
--color-verified: #79d6b0;
--color-verified-soft: rgba(121, 214, 176, 0.12);
--color-warning: #d9b36c;
--color-error: #e58b8b;
```

蓝色仅表示当前流程、链接和交互；绿色表示通过、验证和完成；黄色表示 Candidate、限制和未完整验证；红色仅表示真实错误、无效引用或拒绝状态。状态必须同时有文字或符号，不只依赖颜色。

### 6.2 字体与字号

- 中文和正文：Noto Sans SC；无法稳定本地托管时使用可靠系统中文无衬线回退。
- 英文、数字、技术状态：IBM Plex Mono，并提供等宽系统字体回退。
- 字体加载使用 `font-display: swap`，不依赖生产时远程字体请求。
- 中文正文不得整页使用等宽字体。

```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 22px;
--text-2xl: 28px;
--text-3xl: 36px;
--text-4xl: 48px;
--text-hero: clamp(48px, 5.1vw, 72px);
--text-case-hero: clamp(52px, 6vw, 88px);
```

### 6.3 布局与形状

```css
--container-max: 1200px;
--page-padding-desktop: 48px;
--page-padding-tablet: 32px;
--page-padding-mobile: 20px;

--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-project: 22px;
--radius-pill: 999px;
```

- 1440px 基准使用 12 栏栅格，约 24px 栏间距。
- 断点：`sm 640`、`md 768`、`lg 1024`、`xl 1280`、`2xl 1536`。
- 项目大面板使用 20-24px 圆角，截图 10-14px，按钮 8-12px；胶囊仅用于小型状态标签。
- 不让所有容器都有圆角或阴影。

### 6.4 动效令牌

```css
--duration-fast: 160ms;
--duration-normal: 320ms;
--duration-slow: 620ms;
--duration-trace-step: 180ms;
--ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
--ease-emphasized: cubic-bezier(0.16, 1, 0.3, 1);
```

Framer Motion 用于页面进入、Reveal、Trace 点亮、Sticky 项目轻微缩放、截图轻微放大、`useScroll`、`useTransform` 和桌面端轻量 Magnet。CSS 用于 hover、focus、边线、基础 sticky、状态颜色与 Reduced Motion。

禁止锁定整页滚动、强制停留、循环播放核心流程、逐字打印长文、每帧更新 React State。优先只动画 `transform` 和 `opacity`。每区最多一个主要动画，所有动效必须表达层级、过程、反馈或状态变化。

## 7. 首页信息架构

固定顺序：Navigation、Hero / Evidence Trace、Selected Work、析数 Featured Project、KnowledgeFlow AI Featured Project、Engineering Principles、Capabilities、About / Contact、Footer。

### 7.1 Navigation

桌面导航为 `刘燚 / LIU YI`、项目、工程方法、能力、关于、GitHub 外链、简历；高度 68-72px，滚动前接近透明并带淡边线，滚动后使用深色半透明背景和约 12px blur，高度不变化。当前章节用文字亮度或细下划线表示。

移动菜单使用编号 01-04、GitHub 与下载简历。支持 Escape、焦点锁定、关闭后焦点恢复、点击菜单项关闭、背景滚动锁定；动画 250-350ms。

### 7.2 Hero

桌面约 700px 高，不使用固定 `h-screen`。12 栏为左 7 栏、1 栏留白、右 4 栏 Trace。

- 身份：`LIU YI / AI APPLICATION ENGINEER`
- 主标题：`构建可验证、可恢复、可交付的 AI 应用。`
- 说明：`专注 Agent、RAG 与数据分析应用，独立完成从工作流设计、模型接入到前后端开发、测试验收与版本发布的项目闭环。`
- 操作：查看项目、下载简历、GitHub、Email

右侧 `TRACE / 0001` 展示 INTENT constrained、PLAN compiled、COMPUTE deterministic、EVIDENCE validated、ARTIFACT delivered。它不是终端，不显示假命令；只使用纵向轨迹线、节点、状态词和极淡坐标刻度。

进入序列总时长约 1.8 秒，依次展示导航、身份、标题、正文和按钮、Trace 节点，不阻止操作。移动端文案在上、Trace 在下，标题约 42-48px，CTA 在首屏可见，不启用 Magnet 或鼠标光晕。

### 7.3 Selected Work 与项目档案

过渡文案为 `SELECTED WORK / 02` 与 `两个项目，一条共同原则：模型处理不确定性，程序保证确定性。`，高度约 220-280px。

析数项目档案：

- 名称：析数，可信 AI 数据分析工作台
- 分类：`01 / AI DATA ANALYSIS`
- 版本：`v2.0.0`
- 定位：面向在线学习运营数据的可信 AI 分析应用
- 核心：受限意图、Evidence 校验、可恢复执行
- 真实结果：183/183 Backend Tests、59/59 Frontend Tests、4 Artifact Types、v2.0.0 Released
- GitHub：`https://github.com/SiHuoqwq/ai-data-analyst`
- 桌面结构：左约 7 栏真实截图，右约 5 栏说明和 Trace，面板最小高约 680-740px

KnowledgeFlow AI 项目档案：

- 名称：KnowledgeFlow AI，本地模块化 RAG 知识库
- 分类：`02 / RETRIEVAL SYSTEM`
- 版本：`v0.2.0 Candidate`
- 轨迹：DOCUMENT、CHUNK、EMBEDDING、RETRIEVAL、CONTEXT、SOURCE
- 真实结果：17/17 Release Gate、51/51 Frontend Tests、Browser Fake Full-stack Acceptance、v0.2.0 Candidate
- GitHub：`https://github.com/SiHuoqwq/langchain-rag-framework`
- 桌面结构：上方流程、中间真实工作台截图、下方技术和验收记录，不复制析数左右结构

Sticky Stack 仅在 `>=1024px` 且未开启 Reduced Motion 时启用。析数在第二项目进入时缩放最低约 0.965、上移 18-24px、轻微降亮度，不旋转、不模糊、不完全遮挡标题。总滚动长度约 1700-2100px；不支持时降级为普通纵向项目。

### 7.4 Engineering Principles

桌面左侧 Sticky 主命题，右侧四段连续纵向轨迹，不做四卡片：模型与程序职责分离、证据先于结论、状态先持久化且实时流只负责体验、门禁通过后发布。KnowledgeFlow 不得暗示服务端永久记忆。移动端取消 Sticky。

### 7.5 Capabilities

左侧命题和 P01 / P02 索引，右侧四组连续能力：AI Application Systems、RAG & Data Processing、Backend & Reliability、Product Interface。每组均标注 P01 / P02 证据。不展示熟练度、星级或“精通”，不加入未验证技术。

### 7.6 About / Contact 与 Footer

展示姓名、教育背景、求职方向、邮箱、GitHub、简历、发邮件，不使用联系表单，不展示完整手机号。个人照片不存在时使用纯排版，不放占位头像。

Footer 主文案为 `BUILDING RELIABLE AI APPLICATIONS`，中文为 `构建可靠、可验证的 AI 应用。`，保留姓名、角色、GitHub、Email、Resume、Back to top 和 `© 2026 Liu Yi`，不重复完整导航。

## 8. Case Study 结构与真实性边界

### 8.1 析数

章节顺序：Hero、概览与职责、用户工作流、自由 Agent 风险、V1 到 V2 架构演进、可信分析 Trace、Artifact、Run 生命周期与恢复、界面展示、测试与发布证据、取舍与限制、下一项目。

核心叙事：从 LangGraph StateGraph、14 个工具和模型自由规划的 V1，演进为 Restricted Analysis Intent、Plan Compiler、5 个严格 Schema 操作、Evidence Registry 和 Deterministic Fallback 的 V2。可信流程为 Intent、Compiler、Compute、Registry、Validation、Artifact。结构示例明确标注“示意”。

Run 关系为 Conversation 下包含 AnalysisRun、RunStep、Artifact 和 RunEvent。SSE 提供实时事件、Heartbeat 与 Last-Event-ID；REST 提供最终状态、历史恢复、Artifact 读取和重新同步。明确合作式取消、同步计算无法保证立即中断、无分布式队列和多节点执行。

验证记录仅使用：183/183 Backend、59/59 Frontend、TypeScript PASS、ESLint PASS 且 0 warning、Build PASS、Release v2.0.0。不得虚构覆盖率、延迟、用户规模或收益。

### 8.2 KnowledgeFlow AI

章节顺序：Hero、背景与职责、用户工作流、RAG 风险、文档摄入、Chunk 与稳定 ID、Retrieval 与 Context、拒答和来源、FastAPI / React / SSE、界面、门禁与浏览器验收、取舍与限制、返回首页。

文档摄入仅支持 PDF、TXT、Markdown；Embedding 为 BAAI/bge-small-zh-v1.5，Vector Store 为 Persistent Chroma。稳定 ID 由 source、page、chunk_index、start_index 与内容 SHA-256 组成。同名文档更新不是完整数据库事务，清理失败可能短暂存在新旧数据。

Retrieval 支持 Similarity / MMR、Cosine Distance Filter、Context Formatter、Character Budget 和完整 Chunk。无合格 Context 时固定拒答且不调用模型；有 Context 时生成回答并校验来源，只为实际进入 Prompt 的内容创建来源。

前端仅携带有限有界历史，浏览器可恢复当前展示；不是服务端长期记忆、跨设备永久 Conversation，也没有长期 Conversation 数据库。

验证记录仅使用：17/17 Release Check、51/51 Frontend Tests、Build PASS、Fake Provider Browser Flow PASS、Version / Secret Scan PASS、Runtime Data Fingerprint UNCHANGED、v0.2.0 Candidate。必须明确 `FAKE PROVIDER FULL-STACK PASSED` 与 `REAL DEEPSEEK FULL-STACK NOT VERIFIED`。

不得声称 Official v0.2.0 Release、生产部署、真实 DeepSeek 全栈通过、Agent、LangGraph、Tool Calling、DOCX、OCR、HyDE、BM25、Hybrid Search、Reranker、长期服务端记忆或公网部署。

## 9. 组件边界

全局组件：SiteHeader、MobileMenu、SiteFooter、Container、SectionHeading、PrimaryButton、SecondaryButton、TextLink、StatusLabel、ProjectEvidenceTag、ResponsiveImage、MotionReveal、ReducedMotionProvider、AssetPlaceholder。

Trace 组件：Trace、TraceStep、TraceConnector、TraceStatus、TraceProgress。

项目组件：FeaturedProjectStack、FeaturedProjectPanel、ProjectScreenshot、ProjectMetrics、ProjectLinks、ProjectIndex。

Case Study 组件：CaseStudyHero、ProjectContext、ResponsibilityList、ProcessTrace、DecisionComparison、TechnicalRecord、VerificationRecord、LimitationList、ScreenshotGallery、CaseStudyNavigation。

项目专属组件保留为析数 V1/V2 Comparison、Artifact Showcase、Run Recovery Diagram、RAG Context Budget、Safe Document Update、Source Validation、Browser Acceptance Flow。避免为了复用而把不同证据强制做成同一种卡片。

## 10. 资产策略

期望路径：

```text
public/resume/liu-yi-ai-application-resume.pdf
public/images/profile/liu-yi.webp
public/images/xishu/hero-workbench.webp
public/images/xishu/dataset-profile.webp
public/images/xishu/run-progress.webp
public/images/xishu/artifact-overview.webp
public/images/xishu/chart-result.webp
public/images/knowledgeflow/hero-workbench.webp
public/images/knowledgeflow/upload-empty.webp
public/images/knowledgeflow/document-list.webp
public/images/knowledgeflow/streaming-chat.webp
public/images/knowledgeflow/source-snapshot.webp
public/images/knowledgeflow/session-restore.webp
```

优先 WebP。禁止 GitHub Raw 生产图片、第三方图床、随机图、AI 生成界面、假 Dashboard 和 GIF。缺图时 `AssetPlaceholder` 显示准确待补文件名；页面可用于开发排版，但不得描述为完成，发布门禁必须失败。流程图可用 HTML、CSS 或语义化 SVG 重绘，不用 SVG 制作无关装饰。

## 11. 响应式与 Reduced Motion

- `<768px`：复杂双栏变单栏，取消叠加、局部 Sticky、Magnet 和鼠标光晕；流程纵向；技术记录两列或单列；截图按阅读顺序展开；左右边距约 20px；首屏可见 CTA。
- `768-1023px`：项目普通纵向，保留轻量流程动画，不启用完整 Sticky Stack。
- `>=1024px`：Hero 双栏、项目 Sticky Stack、局部 Sticky 主命题。
- `>=1280px`：最大宽度 1200px，完整编辑式留白。

测试视口至少覆盖 1440x900、1280x800、1024x768、768x1024、390x844、360x800。

Reduced Motion 必须按组件降级：Hero Trace 直接完成；项目变普通列表；关闭 Magnet 与鼠标光晕；数字直接显示；Case Study 不 Pin；流程节点全部可见；Gallery 保持键盘操作；不丢失文字或截图。不能仅依赖全局 duration 覆盖。

## 12. 可访问性、SEO 与性能

可访问性：语义化 `header/nav/main/section/footer`，每页一个 h1，连续标题层级，Skip to content，可见焦点，全键盘操作，Mobile Menu 焦点管理与 Escape，隐藏内容不可 Tab，外链提示，Gallery 正确按钮语义与 ARIA，准确 alt，WCAG AA，对动画状态避免频繁播报。

SEO：首页 Title 为 `刘燚｜AI 应用开发工程师与 AI Agent 开发作品集`，Description 为 `展示析数 AI 数据分析工作台与 KnowledgeFlow AI RAG 知识库，涵盖 Agent、RAG、FastAPI、React、SSE、测试与发布实践。`；Case Study 使用独立元信息。设置 `lang="zh-CN"`、Open Graph、favicon、本地分享图、robots 和可配置 Site URL。没有真实域名时不输出虚构 canonical。

性能目标：LCP < 2.5s、INP < 200ms、CLS < 0.1。图片提供尺寸、srcset、合理加载优先级；除 Hero 外 lazy load；不预加载全部 Case Study；路由合理代码分割；字体 swap；滚动不高频 setState；Lighthouse 记录原始桌面和移动结果，不美化数据。

## 13. 验收门禁

必须执行 TypeScript typecheck、ESLint、Vitest、Playwright、Vite production build、桌面与移动 Lighthouse、Reduced Motion、键盘可访问性和横向溢出检查。

测试至少覆盖 Header、Anchor、Mobile Menu 行为与焦点恢复、简历缺失状态、项目链接、Case Study 路由、Gallery 键盘、Reduced Motion、无动画 Trace 完整性、404、外链属性；E2E 覆盖首页、两个项目、GitHub、移动菜单、简历状态、390px 溢出和 Reduced Motion。

## 14. 发布阻塞与停止条件

当前 Phase 0 不检查仓库外的个人文件，因此所有期望图片、简历、头像和本地分享图均视为“尚未接入”，不是已确认缺失。Phase 5 只接入用户提供的真实资产。

若发现会覆盖旧网站、规则重大冲突、真实性无法确认、关键构建环境缺失、需要访问未授权文件、需要生成或伪造截图、发现秘密或需要破坏性 Git 操作，必须停止并报告。

