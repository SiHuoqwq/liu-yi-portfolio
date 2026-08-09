# 项目记忆

## 使用规则

1. 每次完成一个对话任务后，识别对本项目后续工作有用的关键信息，并在任务结束前更新本文件，以降低上下文遗忘风险；在本项目开启新对话时，也应先读取本文件，以获取最新项目进度、已确认决策和关键背景。
2. 只记录具有持续价值且已经确认的信息，例如用户批准的决策、真实项目内容、当前进度、关键路径、验证结果、已知问题和下一步；不记录临时推测、冗长对话或敏感信息。
3. 新信息应合并到相应章节，及时替换已失效内容，避免重复堆积；如果历史变化对后续工作重要，则在“变更记录”中简要保留。
4. 记录必须忠于当前仓库和用户明确决定。无法确认的信息应标记为“待确认”，不得写成既定事实。

## 当前项目状态

- 仓库用途：个人作品集网站。
- 当前阶段：Phase 4 已完成；析数与 KnowledgeFlow Case Study 的完整静态阅读结构和语义状态边界已实现。
- 网站实现：首页与两条 Case Study 均已完成响应式静态结构；项目截图仍使用明确的真实资产缺失占位。
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

- 下一阶段为 Phase 5：建立资产 manifest、响应式图片与可访问 Screenshot Gallery，只接入项目目录内真实存在的资产。
- Phase 5 只检查和接入项目目录内由用户提供的真实简历、截图、头像和分享图；目前尚未核验这些资产。

## 最近验证

- 2026-08-09 Phase 1：`npm run typecheck`、`npm run lint`、`npm run test -- --run`、`npm run build` 均为 exit 0；Vitest 1/1 通过，Vite production build 成功。
- 2026-08-09 Phase 2：同一组门禁均为 exit 0；Vitest 8/8 通过，Vite production build 成功。
- 2026-08-09 Phase 3：typecheck、lint、Vitest 11/11、build 均通过；系统 Chrome 视觉检查 1440×900、1024×768、768×1024、390×844 共 4/4 通过且无横向溢出。
- 2026-08-09 Phase 4：typecheck、lint、Vitest 15/15、build 均通过；首页与两条 Case Study 的系统 Chrome 多视口检查 8/8 通过且无横向溢出。

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
