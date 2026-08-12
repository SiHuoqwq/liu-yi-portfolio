# 项目记忆

## 使用规则

1. 每次完成一个对话任务后，识别对本项目后续工作有用的关键信息，并在任务结束前更新本文件，以降低上下文遗忘风险；在本项目开启新对话时，也应先读取本文件，以获取最新项目进度、已确认决策和关键背景。
2. 只记录具有持续价值且已经确认的信息，例如用户批准的决策、真实项目内容、当前进度、关键路径、验证结果、已知问题和下一步；不记录临时推测、冗长对话或敏感信息。
3. 新信息应合并到相应章节，及时替换已失效内容，避免重复堆积；如果历史变化对后续工作重要，则在“变更记录”中简要保留。
4. 记录必须忠于当前仓库和用户明确决定。无法确认的信息应标记为“待确认”，不得写成既定事实。

## 当前项目状态

- 仓库用途：个人作品集网站。
- 当前阶段：Phase 1–9 工程验收与 Portfolio Visual Refinement Round 2 已完成；析数真实素材自动化与作品集接入已完成，尚未进入 KnowledgeFlow 素材、合并或部署阶段。
- 网站实现：首页与两条 Case Study 均已完成响应式结构、分级动效和第二轮定向视觉优化；析数已接入真实产品 UI 截图，KnowledgeFlow 仍使用明确的真实资产缺失占位。
- Git：Phase 0 基线位于 `master`；开发在 `codex/portfolio-implementation` 隔离分支和 worktree 中进行。

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
- 隔离开发 worktree 为 `D:\Codex\Projects\portfolio-implementation`，分支为 `codex/portfolio-implementation`。
- Phase 1 必须非破坏式初始化，保留 `AGENTS.md`、`PROJECT_MEMORY.md` 与 `docs/`；create-vite 不安全时手动创建 Vite + React + TypeScript 骨架。
- 真实性测试检查语义状态而非禁止关键词本身；未完成功能只能位于 `CURRENT LIMITATIONS`、`NEXT / PLANNED` 或明确否定说明，不得归入 Implemented、Supported、Verified、Core Capability 或 Released Feature。
- 不调用 imagegen，不伪造项目截图；真实资产缺失时使用明确的 `AssetPlaceholder`，并列为发布门禁问题。

## 关键路径

- 项目规则：`AGENTS.md`
- 项目记忆：`PROJECT_MEMORY.md`
- 正式设计规格：`docs/specs/portfolio-design-spec.md`
- 实施计划：`docs/plans/portfolio-implementation-plan.md`
- 当前正式需求副本：`C:\Users\35345\.codex\attachments\9fc44240-9ba2-432b-a52a-b64f3592b069\pasted-text.txt`

## 待办与下一步

- 后续发布前仍需真实简历、KnowledgeFlow 项目截图和分享图；头像仍为可选资产。析数素材已使用项目自带公开合成演示数据自动生成并接入，未访问私人数据文件。
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

## 变更记录

- 2026-08-06：创建项目记忆机制并记录初始项目状态。
- 2026-08-06：完成 Phase 0；确认 Evidence Trace 设计基线，保存正式设计规格与分阶段 TDD 实施计划，未编写页面代码。
- 2026-08-09：用户再次提供并确认正式设计规格；只读复查确认目录仍无旧网站或 `package.json`，实施计划批准与 worktree 许可仍待确认。
- 2026-08-09：用户批准修正后的实施计划与 Phase 1–9；要求先建立仅含四个 Phase 0 文件的本地基线提交，再创建 `codex/portfolio-implementation` 隔离 worktree。
- 2026-08-09：已创建 Phase 0 基线提交 `a70f085`，并从该提交建立 `D:\Codex\Projects\portfolio-implementation` / `codex/portfolio-implementation`，准备进入 Phase 1。
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
