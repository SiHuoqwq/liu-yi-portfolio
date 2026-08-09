# Portfolio Verification Record

> 状态：实现与非 Lighthouse 门禁已完成。真实求职资产和 Lighthouse 仍是发布门禁，不将当前状态表述为正式发布通过。

## Asset Gate

- 检查日期：2026-08-09
- 检查范围：仅 `D:\Codex\Projects\portfolio-implementation` 项目目录
- 已存在：`public/favicon.svg`、`public/robots.txt`
- 未访问项目目录外的用户文件，未生成或伪造项目截图

### 发布阻塞

- `public/resume/liu-yi-ai-application-resume.pdf`
- `public/images/xishu/hero-workbench.webp`
- `public/images/xishu/dataset-profile.webp`
- `public/images/xishu/run-progress.webp`
- `public/images/xishu/artifact-overview.webp`
- `public/images/xishu/chart-result.webp`
- `public/images/knowledgeflow/hero-workbench.webp`
- `public/images/knowledgeflow/upload-empty.webp`
- `public/images/knowledgeflow/document-list.webp`
- `public/images/knowledgeflow/streaming-chat.webp`
- `public/images/knowledgeflow/source-snapshot.webp`
- `public/images/knowledgeflow/session-restore.webp`
- `public/images/share/portfolio.webp`

### 可选资产

- `public/images/profile/liu-yi.webp`

### 当前降级

- 缺失截图显示 `AssetPlaceholder` 与准确文件名，不生成或伪造项目界面。
- 简历操作显示不可用状态，不输出失效 `href`。
- 个人照片缺失时使用纯排版 About，不显示占位头像。
- 分享图缺失时不输出 `og:image`。
- 未配置有效 `VITE_SITE_URL` 时不输出 canonical 或虚构域名。

## Automated Gates

执行日期：2026-08-09

| 命令 | 真实结果 |
| --- | --- |
| `npm run typecheck` | PASS，exit 0 |
| `npm run lint` | PASS，exit 0，0 warning |
| `npm run test -- --run` | PASS，19 files / 26 tests |
| `npm run test:e2e` | PASS，系统 Chrome 22 / 22 |
| `npm run build` | PASS，Vite 生产构建；最大入口 chunk 194.24 kB，gzip 61.90 kB |

Playwright 覆盖首页、两个项目往返、逐路由 SEO、GitHub 外链、移动菜单 Escape 与焦点恢复、简历缺失状态、404、每页唯一 h1 与连续标题层级、Reduced Motion、桌面动效降级和横向溢出。

响应式截图与无横向溢出检查覆盖首页 `1440x900`、`1280x800`、`1024x768`、`768x1024`、`390x844`、`360x800`；两个 Case Study 覆盖 `1440x900` 与 `390x844`。

## Accessibility and Interaction Review

- Skip Link 指向每页 `main#main-content`。
- 桌面导航保持单行；移动导航使用 modal dialog、焦点首置、Tab 循环、Escape 关闭与触发器焦点恢复。
- Gallery 使用真实按钮、ARIA tab 语义与方向键、Home、End 操作；所有面板保留文档阅读顺序。
- GitHub 使用 `target="_blank" rel="noreferrer"`；`mailto:` 保持系统默认上下文。
- 简历缺失使用 `aria-disabled="true"` 的非链接元素，状态不只依赖颜色。
- 所有路由均验证恰好一个 h1，标题层级无跳级。
- 动效只改变 transform 与 opacity；Reduced Motion 和低高度 / 移动视口使用静态内容。

## Content Truth Review

- 析数与 KnowledgeFlow 的 Implemented / Supported / Verified、Current Limitations、Next / Planned 使用独立语义区域。
- OCR、BM25、Reranker、Hybrid Search、Agent、LangGraph、P95、云部署和真实 DeepSeek 等未完成功能只出现在限制、计划或明确否定说明中。
- KnowledgeFlow 的 Fake Provider PASS 与 Real DeepSeek NOT VERIFIED 保持明确区分。
- 未发现伪造性能指标、伪造截图、虚构 canonical、失效简历链接或把 Candidate 写成 Released 的情况。

## Visual Review

- 设计读法：面向技术招聘者的开发者作品集，使用深色技术编辑语言和 Evidence Trace 证据轨迹系统。
- 固定参数：`DESIGN_VARIANCE: 7`、`MOTION_INTENSITY: 6`、`VISUAL_DENSITY: 5`。
- 核心视觉：Hero Trace 把可控、可验证、可恢复的工程主张转化为流程证据；两条项目案例使用不同布局族，避免通用 SaaS 卡片模板。
- 深色单主题、技术编号、真实版本状态和 Lucide 均来自已批准规格或技术栈；通用设计技能的冲突偏好未覆盖正式规格。
- 1440px 与 360px 全页截图已人工检查，未见裁切、横向溢出或失效布局。

## Lighthouse

- 状态：NOT RUN。
- 原因：当前环境没有 `lighthouse` 命令，项目也没有 Lighthouse 依赖。安装新依赖需要用户授权，未擅自安装或通过 `npx` 下载。
- 因此不记录 Performance、Accessibility、Best Practices、SEO、LCP、CLS 或实验交互指标的虚构分数。
