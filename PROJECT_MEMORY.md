# 项目记忆

## 使用规则

1. 每次完成一个对话任务后，识别对本项目后续工作有用的关键信息，并在任务结束前更新本文件，以降低上下文遗忘风险；在本项目开启新对话时，也应先读取本文件，以获取最新项目进度、已确认决策和关键背景。
2. 只记录具有持续价值且已经确认的信息，例如用户批准的决策、真实项目内容、当前进度、关键路径、验证结果、已知问题和下一步；不记录临时推测、冗长对话或敏感信息。
3. 新信息应合并到相应章节，及时替换已失效内容，避免重复堆积；如果历史变化对后续工作重要，则在“变更记录”中简要保留。
4. 记录必须忠于当前仓库和用户明确决定。无法确认的信息应标记为“待确认”，不得写成既定事实。

## 当前项目状态

- 仓库用途：个人作品集网站。
- 当前阶段：Phase 1–9 工程验收、Portfolio Visual Refinement Round 2、析数与 KnowledgeFlow 真实素材自动化及作品集接入、项目图片阅读增强均已完成；KnowledgeFlow 已补充真实 DeepSeek 窄范围 React E2E 证据；作品集已发布到公开 GitHub 仓库，尚未部署网站。
- 网站实现：首页与两条 Case Study 均已完成响应式结构、分级动效和真实产品 UI 素材接入；Evidence Trace 使用中文界面文案，全部真实项目图片支持可访问的点击放大，两条 Case Study 首屏提供“返回首页”；KnowledgeFlow 首页使用完成工作台主图，Case Study 依次展示空态、文档列表、SSE 流式生成、来源快照和刷新恢复。
- Git：Phase 0 基线位于 `master`；开发在 `codex/portfolio-implementation` 隔离分支和 worktree 中进行；公开仓库为 `https://github.com/SiHuoqwq/liu-yi-portfolio`。

## 已确认决策

- 项目级长期记忆文件为仓库根目录的 `PROJECT_MEMORY.md`。
- 每次新对话开始时先读取本文件；每次对话任务完成前更新本文件中的长期有效信息。
- 新视觉方向、页面结构或重大交互必须先完成并获批设计规格与实施计划，再开始实现。
- 未经用户明确批准，不启动 Visual Companion，也不执行其脚本。
- 图片生成仅可在用户对具体命名资产明确批准后进行。
- 用户已确认本项目正式设计方向为 `Evidence Trace｜证据轨迹`，面向 AI 应用开发工程师 / AI Agent 开发工程师求职。
- 固定设计参数为 `DESIGN_VARIANCE: 7`、`MOTION_INTENSITY: 6`、`VISUAL_DENSITY: 5`。
- 固定路由为 `/`、`/projects/xishu`、`/projects/knowledgeflow`，并计划提供自定义 404；不增加 Blog、Services、独立 Skills 或独立 Contact。
- 技术基线为 React、TypeScript、Vite、React Router、Tailwind CSS、Framer Motion、Lucide React、Vitest、React Testing Library、Playwright 和 npm。
- 用户已批准正式设计规格与实施计划，并授权完成基线提交后在 `codex/portfolio-implementation` 隔离分支连续执行 Phase 1–9。
- Phase 0 基线提交为 `a70f085af66505b16ea7bd3201d0ca0bcf7b5886`（`docs: establish portfolio implementation baseline`）。
- 隔离开发 worktree 为 `<portfolio-repo>`，分支为 `codex/portfolio-implementation`。
- Phase 1 必须非破坏式初始化，保留 `AGENTS.md`、`PROJECT_MEMORY.md` 与 `docs/`；create-vite 不安全时手动创建 Vite + React + TypeScript 骨架。
- 真实性测试检查语义状态而非禁止关键词本身；未完成功能只能位于 `CURRENT LIMITATIONS`、`NEXT / PLANNED` 或明确否定说明，不得归入 Implemented、Supported、Verified、Core Capability 或 Released Feature。
- 不调用 imagegen，不伪造项目截图；真实资产缺失时使用明确的 `AssetPlaceholder`，并列为发布门禁问题。
- 用户已批准 2026-08-13 项目图片阅读增强：Evidence Trace 可见文案中文化；首页和两条 Case Study 的真实项目截图使用单图沉浸预览；两条项目页顶部增加“返回首页”。保持既有颜色、字体、页面结构、真实性叙事与签名视觉，不引入轮播或第三方依赖。
- 首页能力分组标题采用中文，保留必要的 `AI`、`RAG` 专业术语；分组下的框架、工具、协议与技能专名保持英文原名。

## 关键路径

- 项目规则：`AGENTS.md`
- 项目记忆：`PROJECT_MEMORY.md`
- 正式设计规格：`docs/specs/portfolio-design-spec.md`
- 实施计划：`docs/plans/portfolio-implementation-plan.md`
- 当前正式需求副本：`<local-user-home>\.codex\attachments\9fc44240-9ba2-432b-a52a-b64f3592b069\pasted-text.txt`
- 项目图片阅读增强规格：`docs/superpowers/specs/2026-08-13-project-image-viewer-design.md`
- 项目图片阅读增强计划：`docs/superpowers/plans/2026-08-13-project-image-viewer.md`
- 项目图片阅读增强视觉检查：`docs/visual-review-image-viewer/`

## 待办与下一步

- 后续发布前仍需真实简历和分享图；头像仍为可选资产。析数与 KnowledgeFlow 素材均已接入，未访问私人数据文件或现有知识库正文。
- 用户已提供并授权原样公开单页 A4 简历（包含手机号与邮箱）和证件照；尚未复制进作品集或接入页面，下一步需完成头像/分享图规格、简历下载入口与部署配置。
- Lighthouse 已按用户授权以 `13.4.1` 本地 devDependency 安装并完成 3 个 URL 的 Desktop / Mobile 各 3 次 production preview 审计；原始结果与中位数位于 `docs/verification/portfolio.md`。
- Visual Refinement Round 2 已修复 Hero 与 Selected Work 中文断行，并提高析数、KnowledgeFlow 中段的真实信息密度；下一步仅在用户提供真实资产后进入 Asset Integration，当前不得 merge、push 或部署。

## 最近验证

- 2026-08-09 Phase 1：`npm run typecheck`、`npm run lint`、`npm run test -- --run`、`npm run build` 均为 exit 0；Vitest 1/1 通过，Vite production build 成功。
- 2026-08-09 Phase 2：同一组门禁均为 exit 0；Vitest 8/8 通过，Vite production build 成功。
- 2026-08-09 Phase 3：typecheck、lint、Vitest 11/11、build 均通过；系统 Chrome 视觉检查 1440×900、1024×768、768×1024、390×844 共 4/4 通过且无横向溢出。
- 2026-08-09 Phase 4：typecheck、lint、Vitest 15/15、build 均通过；首页与两条 Case Study 的系统 Chrome 多视口检查 8/8 通过且无横向溢出。
- 2026-08-09 Phase 5：typecheck、lint、Vitest 18/18、build 均通过；项目目录内 `public/` 不存在，简历、项目截图与分享图均记录为发布阻塞，头像为可选缺失资产。
- 2026-08-09 Phase 6：typecheck、lint、Vitest 19/19、build 均通过；系统 Chrome 验证桌面 sticky、移动静态和 Reduced Motion 静态降级 3/3 通过。
- 2026-08-09 Phase 7-8：typecheck、lint、Vitest 26/26、系统 Chrome Playwright 22/22、build 均通过；覆盖 6 个首页视口、两条 Case Study 的桌面与移动视口、SEO、外链、菜单焦点、Reduced Motion、标题树和 404。
- 2026-08-09 Phase 9：Node v22.20.0、Lighthouse 13.4.1、Chrome 151.0.7922.76；最终 18 次 Lighthouse 的 Accessibility、Best Practices、SEO 均为 100。六个场景的 LCP 中位数均低于 2.5s，CLS 中位数均为 0；TBT 仅作为 lab responsiveness proxy，未声明验证 INP。
- 2026-08-09 Phase 9 最终门禁：typecheck、lint、Vitest 26/26、系统 Chrome Playwright 22/22、production build 均通过；`npm audit` 为 0 vulnerabilities。
- 2026-08-11 Visual Refinement Round 2：typecheck、lint、Vitest 26/26、系统 Chrome Playwright 22/22、production build 均通过；1440×900、1280×800、1024×768、768×1024、390×844、360×800 均无页面级横向滚动，截图位于 `docs/visual-review-round-2/`。
- 2026-08-13 析数素材接入：使用 `ai-data-analyst-master-release` 的公开合成数据 `demo/learning_operations_demo.csv`，通过 production frontend 和用户明确授权的真实 DeepSeek Provider 生成实际 UI 截图。九张 WebP 位于 `public/images/xishu/`，作品集精选展示五张；真实性与筛选记录位于 `docs/verification/xishu-assets.md`，多视口截图位于 `docs/visual-review-xishu-assets/`。
- 2026-08-13 KnowledgeFlow 素材接入：使用 `langchain-rag-framework` commit `c75985a611d10fc9ae8adf77e654f4606d0907d8` 和公开合成 Markdown，在隔离临时数据目录通过实际 React/FastAPI/Playwright 与真实 `deepseek-v4-pro` 生成六张 WebP；真实性记录位于 `docs/verification/knowledgeflow-assets.md`，视觉检查位于 `docs/visual-review-knowledgeflow-assets/`。Fake Provider 边界继续保留；真实声明严格限定为 `REAL DEEPSEEK REACT E2E / VERIFIED` 与 `2-TURN QA · SOURCE TRACE · SESSION RESTORE`，不是 Full-stack 通过。
- 2026-08-13 KnowledgeFlow 真实验收：本任务累计 6 次模型请求；两次截图同步失败运行分别产生 1 次与 2 次请求，最终通过运行 3 次（第一轮回答、第二轮改写、第二轮回答）。两轮事实、S1 来源、真实 SSE、有界历史、当前标签页刷新恢复通过；正式 Chroma/uploads 指纹不变，未访问 `.env` 内容、私人文件或既有知识库正文。
- 2026-08-13 KnowledgeFlow 最终离线验证：源项目安全模式 Release Check 17 项、Frontend 51/51、Node 回归 1/1、production build、Fake Provider 浏览器全栈均通过；作品集 typecheck、lint、Vitest 27/27、Playwright 22/22、production build 通过；1440×900、1024×768、390×844 的首页及 Case Study 均无溢出、破图、占位、敏感文本或错误 Full-stack 声明。
- 2026-08-13 项目图片阅读增强：typecheck、lint、Vitest 30/30、系统 Chrome Playwright 23/23、production build 均通过；首页、析数与 KnowledgeFlow 在 1440×900、1024×768、390×844 均无横向溢出，三档图片预览完整显示。预览支持关闭按钮、遮罩、Escape、焦点循环与恢复、可重入背景 inert 和滚动锁定；占位图保持不可交互。
- 2026-08-13 能力分组标题中文化：首页定向单测、typecheck、lint 与 production build 通过；技术栈英文专名未修改。

## 变更记录

- 2026-08-06：创建项目记忆机制并记录初始项目状态。
- 2026-08-06：完成 Phase 0；确认 Evidence Trace 设计基线，保存正式设计规格与分阶段 TDD 实施计划，未编写页面代码。
- 2026-08-09：用户再次提供并确认正式设计规格；只读复查确认目录仍无旧网站或 `package.json`，实施计划批准与 worktree 许可仍待确认。
- 2026-08-09：用户批准修正后的实施计划与 Phase 1–9；要求先建立仅含四个 Phase 0 文件的本地基线提交，再创建 `codex/portfolio-implementation` 隔离 worktree。
- 2026-08-09：已创建 Phase 0 基线提交 `a70f085`，并从该提交建立 `<portfolio-repo>` / `codex/portfolio-implementation`，准备进入 Phase 1。
- 2026-08-09：Phase 1 采用手工非破坏式初始化完成；未覆盖 Phase 0 文件，四路由壳完成，基础 typecheck/lint/unit/build 门禁通过。
- 2026-08-09：Phase 2 完成固定深色设计令牌、UI 语义、Reduced Motion 安全降级、移动菜单焦点管理与 404 返回路径。
- 2026-08-09：Phase 3 完成首页；析数与 KnowledgeFlow 使用不同布局族，缺失截图以准确路径占位，未伪造项目界面。
- 2026-08-09：Phase 4 完成两条 Case Study；真实性测试按 Implemented / Supported / Verified / Current Limitations / Next Planned 语义区域检查，不做关键词全局禁用。
- 2026-08-09：Phase 5 只读检查确认项目内尚无真实资产；未搜索仓库外文件，未生成图片，Screenshot Gallery 在缺图时保留准确文件名和阅读顺序。
- 2026-08-09：Phase 6 完成响应式动效；滚动联动项目栈采用响应式启用条件，内容在所有动效状态下保持可见。
- 2026-08-09：Phase 7 完成逐路由 SEO、可配置 canonical、robots、favicon 与核心浏览器验收；无真实分享图时不输出 `og:image`。
- 2026-08-09：Phase 8 完成 design-taste-frontend、可访问性与内容真实性审查；Sticky Stack 仅在宽度至少 1024px、高度至少 1050px且未请求 Reduced Motion 时启用，防止较矮视口中的 CTA 被固定到视口之外。
- 2026-08-09：用户授权仅在隔离 worktree 安装 Lighthouse devDependency。首轮 Lighthouse 暴露 muted 文本对比度和 accessible name 问题；通过单一颜色令牌与两个 aria-label 的最小修复后，最终 Lighthouse Accessibility 全部达到 100，未做性能代码修改。
- 2026-08-09：Phase 9 完成；未 push、未创建远程、Tag 或 Release，开发分支与 worktree 保持隔离。
- 2026-08-11：完成 Visual Refinement Round 2；保留深色技术编辑方向、Engineering Principles、核心 Evidence Trace、导航、字体与颜色系统，仅定向修复标题层级并补足真实技术记录。析数 Artifact 明确为 Text / Metric / Table / Chart，KnowledgeFlow 未新增不真实能力；未使用 imagegen 或伪造素材。
- 2026-08-13：完成析数素材自动化与接入。购买渠道/月度趋势的 Fake 路由结果因未完整覆盖问题语义而不进入作品集；历史入口已验证恢复问题与结论，但未验证同时恢复 Artifact，因此不扩大恢复声明。教师维度缺字段时正确停止且无 Table/Chart；UI 仍用“分析失败”表示业务条件不足，留作未来产品文案改进，本阶段未修改析数源码。
- 2026-08-13：用户随后明确授权 DeepSeek 调用。真实 Provider 复验中，课程类别结果完整覆盖完成率/评分/退款率并生成 2 表 2 图；购买渠道对缺失的学习时长明确说明而未编造；月度趋势生成 90 行趋势结果和 2 图；教师边界仍无 Table/Chart。作品集素材已由真实 DeepSeek 版本替换，未读取或输出 API Key。
- 2026-08-13：完成 KnowledgeFlow 初版 Fake Provider 素材自动化后，用户授权真实 DeepSeek 复验。真实验收修正两个仅影响捕获自动化的同步问题：首个空 metadata chunk 不再触发截图延迟，第二轮完成等待绑定第 2 个回答卡；正式产品语义未改变。最终六张素材整组替换为同一次成功真实 Provider 会话，恢复截图只声明当前标签页 `sessionStorage` 刷新恢复，不扩大为长期记忆或跨设备同步。
- 2026-08-13：完成项目图片阅读增强。首页 Evidence Trace 改为中文工程语义；复用 `ProjectScreenshot` 为首页两张主图与两条 Case Study 共十张截图提供同一可访问预览；两条 Case Study 共用页首返回入口。未生成或改动任何项目素材，未改变项目真实性文案和页面信息结构。
- 2026-08-13：按用户反馈将首页四个能力分组标题调整为“AI 应用系统”“RAG 与数据处理”“后端与可靠性”“产品界面”，下方技术栈继续使用英文专名。
- 2026-08-13：创建公开 GitHub 仓库 `SiHuoqwq/liu-yi-portfolio`。公开前扫描确认无 `.env`、API Key、Token 或私钥；为避免暴露本机绝对路径，远端 `main` 使用经过路径脱敏并通过 production build 的单一发布基线，Git tree 为 `cb591e87980088f949380832271f4d402dd0f2da`，远端提交为 `74935289d4e4b677a9fa5fc605056309bd2384a8`。本地完整开发历史保持不变，未部署网站。
