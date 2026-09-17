# 项目记忆

## 使用规则

1. 每次完成一个对话任务后，识别对本项目后续工作有用的关键信息，并在任务结束前更新本文件，以降低上下文遗忘风险；在本项目开启新对话时，也应先读取本文件，以获取最新项目进度、已确认决策和关键背景。
2. 只记录具有持续价值且已经确认的信息，例如用户批准的决策、真实项目内容、当前进度、关键路径、验证结果、已知问题和下一步；不记录临时推测、冗长对话或敏感信息。
3. 新信息应合并到相应章节，及时替换已失效内容，避免重复堆积；如果历史变化对后续工作重要，则在“变更记录”中简要保留。
4. 记录必须忠于当前仓库和用户明确决定。无法确认的信息应标记为“待确认”，不得写成既定事实。

## 当前项目状态

- 仓库用途：个人作品集网站。
- 当前阶段：作品集网站与 AI 应用开发简历均已完成，现已进入求职投递阶段；计划优先在 BOSS 直聘投递 AI 应用开发工程师 / AI Agent 开发工程师岗位。
- 网站实现：首页与两条 Case Study 均已完成响应式结构、分级动效和真实产品 UI 素材接入；Evidence Trace 使用中文界面文案，全部真实项目图片支持可访问的点击放大，两条 Case Study 首屏提供“返回首页”；KnowledgeFlow 首页使用完成工作台主图，Case Study 依次展示空态、文档列表、SSE 流式生成、来源快照和刷新恢复。
- ProductStudio Portfolio Phase 1 已在 `codex/productstudio-portfolio` 分支提交为 `578b448fee246b7f427fc9bd5dd47e60688261aa`：第三张首页项目卡、通用三项目动效栈、`/projects/productstudio` 路由及四张正式 PNG 素材已接入。Phase 2-A 九段 Case Study、Phase 2-A.5 QA 真实性修正与 Phase 2-B.1 专属 Hero 均已完成，并由 `feat: refine ProductStudio portfolio case study` checkpoint 固化；QA 口径为 `Fidelity QA + Manual Confirmation`，不宣称 Human QA Pipeline、Human Approved 或独立 Human QA 状态机；Hero 主图使用未选择具体商品的 `05_neutral_workspace.png`，未修改其他 Case Study。Phase 2-B.2 已通过人工视觉确认，并由 `feat: refine ProductStudio architecture presentation` checkpoint 固化：架构区改为四阶段主流程、独立 Quality Gate 与 History / Recovery State Rail。Phase 2-B.3 内容压缩与尾部响应式布局已完成并通过人工视觉确认，并由 `refactor: streamline ProductStudio portfolio tail sections` checkpoint 固化；后半段为 5 个工程决策、3 个 Current Boundaries 与 4 个 Roadmap 方向。
- 首页精选项目的统一展示顺序为 ProductStudio → 析数 → KnowledgeFlow AI；`src/content/projects.ts` 的 `projects` 数组是唯一排序源，展示序号同步为 01 / 02 / 03。静态/移动模式直接遍历数组，桌面 sticky 模式仅将 `projects[0]` 单独置于底层，不写死具体项目。
- 析数用户可见项目截图已统一为房地产销售 Demo：`01_real_estate_overview.png` 用于首页与 Case Study 数据画像，`02_real_estate_analysis.png` 用于 Case Study 经营分析；旧教育场景 WebP 保留在资产目录但不再被首页或 Xishu Case Study 引用。`03_xishu_real_estate_history.png` 未接入，因为普通最近会话导航尚不能自动解析对应 `runId` 并恢复结构化 Artifact。
- 线上作品集部署在 `liu-yi-portfolio-iccbna3v.edgeone.cool`；2026-08-14 实测裸域名返回 HTTP 401，当前投递必须使用用户提供的完整 EdgeOne 签名链接并保留 `eo_token` / `eo_time` 查询参数。项目记忆不保存具体 token 值。
- 正式简历：`D:\Codex\Projects\portfolio-implementation\public\resume\liu-yi-ai-application-resume.pdf`。
- AI 简历 V2 Candidate 1 与 Candidate 2 均已有独立可编辑生成链，源码位于 `D:\Codex\Projects\resume-it-procurement-2026-08-19\src\`；Candidate 2 输出为 `D:\Codex\Outputs\resume-ai-v2-candidate-2\liu-yi-ai-application-resume-v2-candidate-2.pdf`。当前正式 V1 与 Candidate 1 均未替换、未覆盖、未部署。
- 产品/开发助理（AI 应用方向）定向版简历已生成，输出为 `D:\Codex\Outputs\resume-ai-product-assistant-2026-09-15\刘燚-产品开发助理-AI应用方向-优化简历.pdf`；它以 Candidate 2 为基线，仅调整顶部职位定位、顶部简介、ProductStudio 项目简介及项目顺序（ProductStudio → 析数 → KnowledgeFlow AI），未覆盖原附件或既有版本。
- Candidate 2 同目录另有可编辑 Word 版 `liu-yi-ai-application-resume-v2-candidate-2.docx`，生成入口为 `src\build_resume_v2_candidate_2_docx.py`；它使用原生可编辑段落、真正的项目 bullet、5 个外部超链接和嵌入证件照，并非整页 PDF 图片。
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
- 用户已批准 2026-08-13 项目图片阅读增强：Evidence Trace 可见文案中文化；首页和两条 Case Study 的真实项目截图使用单图沉浸预览；两条项目页顶部增加“返回首页”。保持既有颜色、字体、页面结构、真实性叙事与签名视觉，不引入轮播或第三方依赖。
- 首页能力分组标题采用中文，保留必要的 `AI`、`RAG` 专业术语；分组下的框架、工具、协议与技能专名保持英文原名。

## 关键路径

- 项目规则：`AGENTS.md`
- 项目记忆：`PROJECT_MEMORY.md`
- 正式设计规格：`docs/specs/portfolio-design-spec.md`
- 实施计划：`docs/plans/portfolio-implementation-plan.md`
- 当前正式需求副本：`C:\Users\35345\.codex\attachments\9fc44240-9ba2-432b-a52a-b64f3592b069\pasted-text.txt`
- 项目图片阅读增强规格：`docs/superpowers/specs/2026-08-13-project-image-viewer-design.md`
- 项目图片阅读增强计划：`docs/superpowers/plans/2026-08-13-project-image-viewer.md`
- 项目图片阅读增强视觉检查：`docs/visual-review-image-viewer/`
- ProductStudio 正式 handoff：`C:\Users\35345\Desktop\ProductStudio-Portfolio-Handoff\ProductStudio-Portfolio-Handoff\`
- ProductStudio Phase 1 页面：`src/pages/ProductStudioPage.tsx`
- ProductStudio 正式截图：`public/images/productstudio/`

## 待办与下一步

- 作品集和正式简历已具备投递条件；当前重点是按岗位 JD 微调 BOSS 招呼语与简历关键词，并持续记录投递反馈。分享图仍可作为后续可选优化，不阻塞投递。
- 当前关注的一类 JD 强调 AI 工具活化、业务流程自动化、飞书多维表格和 RPA，并要求用 1–3 个实际案例分别说明业务问题、AI/自动化工具、本人完成的工作和效率结果。现有项目可证明的相关能力包括 DeepSeek API、LangGraph / LangChain、Prompt 与上下文约束、Tool Calling、Python / FastAPI / API、pandas 数据处理、Codex / Claude Code 辅助开发以及自动化测试验收；目前没有飞书多维表格、n8n、Make、Zapier、影刀 RPA 或 Selenium 的项目证据，也没有企业上线前后的真实工时基线。投递时应以“析数”和 KnowledgeFlow 两个案例回答，量化自动覆盖环节与测试验收结果，不得虚构节省工时或熟练实战经历。
- 首次招聘沟通反馈中，对方明确询问“多 Agent 落地产品经验”和在线体验链接。当前“析数”属于单 Agent / 受控工作流调用多个工具，KnowledgeFlow 属于模块化 RAG，均不得包装成多 Agent；目前也没有公开可操作的多 Agent 在线 Demo。回复应如实说明边界，提供作品集 Case Study 与 GitHub 源码，并强调已有 Agent 工作流、状态管理、工具调用、上下文约束和测试验收经验可迁移到多 Agent 架构。
- 另一项招聘沟通询问能否从零搭建采购、外贸发货、库存和部分财务的一体化业务系统。当前没有完全同类的已上线项目，可明确表达具备从需求拆解、领域与数据建模、API、前后端、持久化、异常恢复到测试验收的完整工程能力，并建议按采购入库、销售/发货、库存台账、应收应付/费用/对账分期交付 MVP；财务范围必须限定为业务财务，不得声称具备总账、税务或法定会计系统实战。
- 同一招聘方进一步给出“智能排柜与供应链跟单自动化”复杂模块：基于生产进度、国内/海外库存、客户订单与交期、船期、SKU 体积/重量等信息生成多个 40HQ 排柜方案，并处理生产延期和客户临时加急后的动态重排。该问题的核心是受硬/软约束的组合优化、滚动重规划、计划版本/差异、人工审批和审计，不应由 LLM 自由决定；AI 适合作为自然语言交互、异常信息抽取和方案解释层。应明确区分“订单行/箱数分配到哪个柜”和“纸箱在柜内如何三维摆放”：前者可先用体积、重量、可用日期和交期做 CP-SAT/MILP MVP，后者还需要朝向、堆叠、承重、托盘等数据。建议从模块化单体、关系数据库、独立求解模块、库存预留、计划版本、差异审批和审计日志起步。当前没有集装箱装载、供应链 ERP 或运筹优化的生产项目经验，面试时应提出 OR-Tools CP-SAT/MILP 或启发式求解器方向与分阶段 MVP，同时明确同领域经验边界。
- 用户已收到杭州长决科技有限公司的现场面试邀请；邀请卡使用 LATIC 品牌标识。公开页面显示 LATIC 业务覆盖中国与拉美之间的通信设备、光纤/FTTH、数字电视、IPTV、跨境采购进口及区域库存分销，但暂未找到可权威确认“杭州长决科技有限公司”与公开 LATIC 主体之间工商关系的页面，面试时只能将其作为品牌业务理解，不能表述为已确认的股权或法律主体事实。
- 针对该面试，建议将优势定位为“模型理解 + 确定性业务规则/求解 + 全栈工程闭环”，并继续如实说明没有同类 ERP/智能排柜生产上线经验。通用业务回答顺序为：业务目标与责任人 → 数据来源/口径 → 硬约束 → 软目标 → 候选方案与解释 → 人工审批/正式落库 → 指标验收。智能排柜“决策闭环全景图”已按用户批准方向制作，SVG 与 1920×1350 PNG 位于 `D:\Codex\Outputs\interview-prep-2026-08-18\`；2026-08-17 已验证 SVG XML、关键文案、无外部图片依赖和 PNG 尺寸，并完成视觉检查，无裁切、重叠或乱码。
- 面试双页速查图已完成，位于 `D:\Codex\Outputs\interview-prep-2026-08-18\cheat-sheets\`：第1页为“ERP与智能排柜”，第2页为“自我介绍与面试问答”，每页均交付 1800×2546 PNG 与可缩放 SVG。内容合并了用户截图和已确认面试材料，并补充 ERP 定义、七步记忆法、现场查看提纲话术及诚信边界；已完成 XML、关键文案、无外部依赖、PNG 尺寸和视觉检查，第2页深色卡片对比度问题已修复。
- Lighthouse 已按用户授权以 `13.4.1` 本地 devDependency 安装并完成 3 个 URL 的 Desktop / Mobile 各 3 次 production preview 审计；原始结果与中位数位于 `docs/verification/portfolio.md`。
- Visual Refinement Round 2 已修复 Hero 与 Selected Work 中文断行，并提高析数、KnowledgeFlow 中段的真实信息密度；下一步仅在用户提供真实资产后进入 Asset Integration，当前不得 merge、push 或部署。
- ProductStudio Phase 2-B.3 checkpoint 已完成；下一步等待用户指示，不得自行 push、merge 或继续后续 Phase。

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
- 2026-08-19 IT 采购定向简历：`D:\Codex\Outputs\resume-it-procurement-2026-08-19\刘燚_IT采购_AI工具应用_简历.pdf` 已交付；销售实习表述真实，无供应商、合同或订单经验声明；一页 A4，文本提取与视觉 QA 均通过。
- 2026-08-28 AI 简历 V2 Candidate 1：A4 单页，主正文/项目 bullet 最小字号 8.5 pt、行高 13.0 pt，底部安全边距 97.0 pt（34.22 mm），三张项目卡和 8 条 bullet 无自动检测重叠，证件照比例误差 0，保留邮箱、个人 GitHub、析数 GitHub、KnowledgeFlow GitHub 与作品集共 5 个 URI；Candidate SHA-256 为 `B8E4E9D88F7778726DEB9A885611E2F82FDC9002979E74895BD97FA864477F3A`，V1 基准 `BEF559C8CF3F5209A13B0B905AAD37038398C083654F04D64EC377B38381EBF1` 未变化。
- 2026-08-28 AI 简历 V2 Candidate 2：仅按用户要求修改三处中英文措辞，将项目 bullet 从 8.5 pt / 13.0 pt 提升至 9.0 pt / 13.5 pt，并将技术能力行高从 13.0 pt 微调至 13.3 pt；保持 A4 单页、原左右边距、三项目结构、蓝白风格、证件照与 5 个 URI。实测底部安全边距 87.2 pt（30.76 mm）、文字重叠 0、证件照比例误差 0，216 DPI 整页视觉检查无截断、覆盖或乱码；Candidate 2 SHA-256 为 `5B0117B8CC3B4C5E22504BFC408A2D86CF20B352EA008CAA129F619CA6489873`，V1 与 Candidate 1 哈希均未变化。Candidate 2 定向测试 3/3 通过，完整测试为 14 通过、5 失败；5 项失败仍仅因旧测试硬编码的外部源 PDF 不存在，未修改旧测试或伪造 fixture。按要求停止，不自行进入 Candidate 3。
- 2026-08-28 Candidate 2 Word 版：Microsoft Word 原生渲染为严格 A4 单页，证件照、三项目卡、中文字体、5 个超链接和正文均正常；首次渲染发现并修复图片段落固定行高导致的裁切及 GitHub 链接拆行。最终 DOCX 结构测试 1/1 通过，SHA-256 为 `31E725AE38F07CFA8B1AF2CC2CCE6FD770404C4A3B1A348AF34F3874C694C63C`。
- 2026-09-15 产品/开发助理（AI 应用方向）定向版：附件 SHA-256 与 Candidate 2 一致；新 PDF 为 A4 单页，正文最小字号 9.0 pt，底部安全边距 87.2 pt，文本重叠 0，保留证件照和 5 个 URI；216 DPI 整页视觉检查无裁切、覆盖或乱码，内容与布局直接校验 2/2 通过。新 PDF SHA-256 为 `38F70FF7EF279C5782C0A57D35074D8D29B7BADB47587F7710882F37861A8A61`。
- 2026-09-15 ProductStudio Portfolio Phase 1：相关 Vitest 13/13、typecheck、production build 与最小 Playwright browser smoke 1/1 通过；commit 前已将 motion E2E 的两项目旧断言更新为三项目，并在 1440×1200 sticky 场景逐张验证三张卡可滚动访问、图片可解码、中心无遮挡、无横向溢出及 transform 动效，motion Playwright 3/3 通过；四张导入 PNG 与 handoff 源文件 SHA-256 一致，首页和详情页均无资产占位。
- 2026-09-18 首页项目排序 Preview QA：静态/移动与桌面 sticky 两条组件测试均验证 ProductStudio → 析数 → KnowledgeFlow AI 及对应 01 / 02 / 03；typecheck、Vitest 55/55、production build 与 `git diff --check` 均通过。
- 2026-09-18 析数房地产证据刷新：两张 1440×1100 原始 PNG 源/目标/build SHA-256 一致；首页与 Case Study 定向测试、typecheck、Vitest 55/55、production build、相关 Playwright 21/21 与 `git diff --check` 通过，首页及 Xishu/KnowledgeFlow 桌面和移动视口无横向溢出。
- 2026-09-16 ProductStudio Portfolio Phase 2-A：九段页面骨架和四个专用证据组件完成；typecheck、相关 Vitest 13/13 与 production build 通过。未修改首页、其他项目页、公共 Case Study 组件或 CSS。
- 2026-09-16 ProductStudio Portfolio Phase 2-A.5：首页与详情页统一使用 `Fidelity QA + Manual Confirmation`，生成边界为 `Generation Completed ≠ Product Fidelity Confirmed`；typecheck、完整 Vitest 34/34 与 production build 通过，生产源码不存在 Human QA / Human Approved 声明。
- 2026-09-16 ProductStudio Portfolio Phase 2-B.1：ProductStudio 专属 Hero 在 1440×900 下完整显示标题、定位、价值句、四项技术关键词和 CTA，工作台主图从 y=567 开始，首屏可见 333px（图片高度 44.5%）；390×844 与 320×800 均无横向溢出且主图可解码。typecheck、完整 Vitest 34/34 与 production build 均通过。
- 2026-09-16 ProductStudio Hero 中性素材接入：`05_neutral_workspace.png` 为可解码 1440×900 PNG，SHA-256 `EBA3D34078BC57FB43706F6A7B17CA4524E7445FD022D946E6CC54928341C41A`；Hero 引用已切换，01–04 原图保持不变。1440×900 下主图首屏露出 333px，渲染与原图宽高比均为 1.6；390×844 无横向溢出，标签与 CTA 均可见。
- 2026-09-16 ProductStudio Phase 2-B.2：专属 Architecture Diagram 在 1440×900 下为四个约 188px 等宽阶段卡，Quality Gate 使用独立 warning 语义，History / Recovery 以 State Rail 表达保存与恢复；390×844 下为 350px 单列顺序，无横向溢出。typecheck、完整 Vitest 34/34、production build 与 `git diff --check` 通过。
- 2026-09-17 ProductStudio Phase 2-B.3a：Technical Implementation 从 7 项压缩为 5 个工程决策，Current Limitations 改为 3 个 Current Boundaries，Roadmap 从 7 项压缩为 4 个明确标记为 planned 的方向；未修改 CSS、通用组件或前六段内容。typecheck、完整 Vitest 34/34、production build 与 `git diff --check` 通过。
- 2026-09-17 ProductStudio Phase 2-B.3b：仅为后三段增加 ProductStudio 作用域布局；1440px 为 Technical 3+2、Boundaries 三列、Roadmap 2×2，390px 与 320px 为自然单列且无横向溢出或文本截断。390px 三段总高度由 2650.15px 降至 2044.30px（-22.86%），320px 由 2881.27px 降至 2321.76px（-19.42%）；正文与标签字号未缩小。

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
- 2026-08-13：完成 KnowledgeFlow 初版 Fake Provider 素材自动化后，用户授权真实 DeepSeek 复验。真实验收修正两个仅影响捕获自动化的同步问题：首个空 metadata chunk 不再触发截图延迟，第二轮完成等待绑定第 2 个回答卡；正式产品语义未改变。最终六张素材整组替换为同一次成功真实 Provider 会话，恢复截图只声明当前标签页 `sessionStorage` 刷新恢复，不扩大为长期记忆或跨设备同步。
- 2026-08-13：完成项目图片阅读增强。首页 Evidence Trace 改为中文工程语义；复用 `ProjectScreenshot` 为首页两张主图与两条 Case Study 共十张截图提供同一可访问预览；两条 Case Study 共用页首返回入口。未生成或改动任何项目素材，未改变项目真实性文案和页面信息结构。
- 2026-08-13：按用户反馈将首页四个能力分组标题调整为“AI 应用系统”“RAG 与数据处理”“后端与可靠性”“产品界面”，下方技术栈继续使用英文专名。
- 2026-08-14：用户确认作品集网站与简历已完成并进入 BOSS 直聘投递阶段；通用招呼语定位为“身份 + 两项代表项目 + 工程闭环 + 沟通意愿”。线上作品集裸域名需要授权，投递时必须保留用户提供的完整 EdgeOne 签名参数。
- 2026-09-15：从 `master@c4ed64b` 创建 `codex/productstudio-portfolio`，完成 ProductStudio Portfolio Phase 1 骨架接入并提交为 `578b448fee246b7f427fc9bd5dd47e60688261aa`；保持既有 Evidence Trace 设计与手写 TSX 内容架构，未引入 MDX、CMS 或新依赖，未 push 或 merge。
- 2026-09-16：完成 ProductStudio Portfolio Phase 2-A 九段 Case Study 骨架与组件边界；主图归入 01 Hero，另外三张图分别只用于 Creative Director、Generation + QA 和 Product Context Isolation；未 commit、push 或 merge。
- 2026-09-16：完成 ProductStudio Phase 2-A.5 QA 口径修正；未新增 QA 状态模型，未修改公共组件、图片、架构或视觉样式，未 commit、push 或 merge。
- 2026-09-16：完成 ProductStudio Phase 2-B.1 Hero 优化；新增 ProductStudio 专属首屏组件与作用域样式，保留项目事实、版本和非规模化生产系统边界，未修改通用 `CaseStudyHero`、其他项目页面、图片或公共交互，未 commit、push 或 merge。
- 2026-09-16：为 Phase 2-B.1 接入中性工作台证据图，仅新增资源、manifest 条目并替换 Hero 图片引用；未修改 Hero 文案、结构、技术标签、CTA、CSS 或响应式布局，未删除或覆盖 01–04 PNG。
- 2026-09-16：按用户授权创建 Phase 2-A + 2-A.5 + 2-B.1 checkpoint `feat: refine ProductStudio portfolio case study`；提交前 typecheck、完整 Vitest 34/34、production build 与 `git diff --check` 通过，未 push、merge 或开始 Phase 2-B.2。
- 2026-09-16：按已批准的方案 A 实现 ProductStudio Phase 2-B.2；未修改通用 `ProcessTrace`、Hero、首页或其他 Case Study。
- 2026-09-17：ProductStudio Phase 2-B.2 通过人工视觉确认，并由 `feat: refine ProductStudio architecture presentation` checkpoint 固化；未 push、merge 或开始后续阶段。
- 2026-09-17：完成 ProductStudio Phase 2-B.3a 内容压缩与作用域真实性测试；Roadmap 能力未进入 Technical Implementation，未修改 CSS、通用组件、其他 Case Study 或图片，未 commit、push 或开始 2-B.3b。
- 2026-09-17：完成 ProductStudio Phase 2-B.3b 尾部布局优化并通过人工视觉确认，由 `refactor: streamline ProductStudio portfolio tail sections` checkpoint 固化；未改写 Phase 2-B.3a 文案，未修改 Hero、Architecture、前六段内容、通用组件、图片或其他 Case Study，未 push。
