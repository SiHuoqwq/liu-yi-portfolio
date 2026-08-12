# KnowledgeFlow AI 真实素材接入记录

## 来源与真实性

- 源项目：`<knowledgeflow-source>`。
- 源版本：`c75985a611d10fc9ae8adf77e654f4606d0907d8`（本轮自动化修改前的 `main` commit）。
- 验收时间：2026-08-13 03:49:03 +0800（Asia/Shanghai）。
- 实际模型：`deepseek-v4-pro`。
- 演示文档：临时公开合成 Markdown `knowledgeflow-real-provider-acceptance.md`；只包含上线门槛、验收责任和记录禁入信息，不来自私人文件、公司资料或现有知识库正文。
- 运行方式：实际 React/Vite 工作台连接 production FastAPI 路由、真实 BGE/Chroma/RAG 链和真实 DeepSeek；Playwright 执行隔离上传、两轮 SSE、来源快照和 `sessionStorage` 刷新恢复。
- 验收边界：保留 `FAKE PROVIDER FULL-STACK / PASSED`；新增窄范围 `REAL DEEPSEEK REACT E2E / VERIFIED` 与 `2-TURN QA · SOURCE TRACE · SESSION RESTORE`。不得表述为真实 DeepSeek Full-stack 已通过。
- 真实请求：本任务累计 6 次；两次未采用运行分别为 1 次和 2 次，最终通过运行为 3 次（第一轮回答、第二轮指代问题改写、第二轮回答）。没有自动重试，也未运行 API health check、额外真实问题或真实 smoke test。
- 隔离边界：Chroma、uploads、缓存、合成文档、浏览器 profile、日志和原始 PNG 全部位于 `<temporary-root>\knowledgeflow-real-acceptance-20260813-034746`，不提交到仓库；正式 `data/chroma` 与 `data/uploads` 前后指纹一致。
- 六张素材均来自同一次真实 Provider 配置下的产品会话；未使用 imagegen、概念 Dashboard、手工改字或 Fake/Real 拼接。

## 两轮验收结果

- 第一轮问题：“根据验收规范，上线必须同时满足哪两项核心门槛？请引用来源。”回答准确包含“来源引用准确率达到 100%”和“回滚演练必须在 15 分钟内完成”，引用 S1。
- 第二轮问题：“这个方案由谁负责最终验收，验收记录中明确不能包含哪些信息？请引用来源。”请求携带第一轮完整 user/assistant 有界历史并发生一次 contextualizer 改写；回答准确包含“平台工程组”“API Key”“客户数据”“内部绝对路径”，引用 S1。
- 两轮 S1 均指向实际进入当前 Prompt 的合成文档 Chunk 0，来源证据支持答案。
- 刷新后恢复两轮已完成消息和当前选中的来源快照；这里只声明当前浏览器标签页恢复，不代表服务端长期记忆、账户历史或跨设备同步。

## 最终素材与评级

| 文件 | 尺寸 | 评级 | 展示内容 |
| --- | --- | --- | --- |
| `hero-workbench.webp` | 1600 × 760 | Recommended | 首页主图；第二轮真实回答、真实文档列表和所选来源证据三栏工作台 |
| `upload-empty.webp` | 1600 × 1000 | Recommended | 同次真实 Provider 配置会话的隔离空知识库；0 文档、0 Chunks、上传引导和禁用提问框 |
| `document-list.webp` | 1600 × 1000 | Recommended | 合成 Markdown 摄入成功、真实文档列表、1 文档与 1 Chunk；尚未触发模型请求 |
| `streaming-chat.webp` | 1600 × 1000 | Recommended | 第一轮真实 SSE 生成中；用户问题、部分正文、生成状态和停止按钮 |
| `source-snapshot.webp` | 1600 × 1000 | Recommended | 第一轮完成回答绑定 S1；显示文件名、Chunk 0、距离、已用于回答和证据片段 |
| `session-restore.webp` | 1600 × 1000 | Recommended | 两轮真实问答后刷新；第二轮完整事实与所选 S1 来源快照恢复 |

## 未采用候选

- 两次失败运行的候选未采用：第一次只完成第一轮回答但未可靠捕获生成态；第二次在第二轮答案请求前因浏览器等待范围错误中止。两次均保持正式数据指纹不变，候选留在临时目录且不提交。
- 知识库外拒答、删除、离线和 Chroma 重启持久化没有在本次真实 Provider 流程中执行，不能作为真实验收素材或声明。
- Fake Provider 六张旧素材已整组替换，不与本次真实截图混用。

## 已知产品限制

- 当前没有服务端长期 Conversation Memory、历史会话列表、跨标签页或跨设备同步、多用户隔离。
- 不支持 Agent、LangGraph、Tool Calling、OCR、DOCX、BM25、Hybrid Search、Reranker 或 HyDE。
- Chroma 更新不是完整数据库事务；FastAPI 没有用户认证、权限或多租户，不应直接暴露到公网。
- 本次真实验收范围不包括固定拒答、同名更新、删除、离线状态、重启持久化或 Streamlit 路径。

## 安全声明

- 应用正常读取本机配置，但自动化没有打开、打印、复制、修改或提交 `.env` 内容。
- 没有在命令、日志、报告、截图或 Git diff 中记录 API Key、Authorization Header、完整请求体或秘密。
- 没有访问私人文件、公司资料、现有知识库正文或用户已有运行数据；页面和截图不含绝对敏感路径。
- 没有使用 imagegen、伪造 UI 或修改真实模型回答文字。

## 验证记录

- 真实验收：任务累计模型请求 6 次，最终通过运行 3 次；两轮事实、有效引用、真实 SSE、有界历史、contextualizer、刷新恢复全部通过；正式 Chroma/uploads 指纹不变；敏感文本检查通过。
- 源项目离线门禁：安全模式 Release Check 全部 17 项通过（不读取本机 `.env` 内容；保留 tracked-file、秘密形态、版本、测试、临时健康检查和 Fake smoke）；Frontend Vitest `51 / 51 PASS`；Node 截图同步回归 `1 / 1 PASS`；production build `PASS`；Fake Provider 浏览器全栈 `PASS`；正式 Chroma/uploads 指纹 `UNCHANGED`。
- 作品集：TypeScript `PASS`；ESLint `PASS`；Vitest `27 / 27 PASS`；Playwright `22 / 22 PASS`；production build `PASS`。
- 视觉检查：`/` 与 `/projects/knowledgeflow` 在 1440×900、1024×768、390×844 共 6 个 production preview 场景通过；页面宽度等于视口宽度，0 破图、0 占位、0 浏览器错误、0 敏感文本命中。`FAKE PROVIDER FULL-STACK / PASSED`、`REAL DEEPSEEK REACT E2E / VERIFIED` 与范围说明均存在，错误的 `REAL DEEPSEEK FULL-STACK / VERIFIED` 不存在。
- 视觉截图与机器记录：`docs/visual-review-knowledgeflow-assets/`。
