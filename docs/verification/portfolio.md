# Portfolio Verification Record

> 状态：Phase 9 实现与验证门禁已完成。真实简历、项目截图与分享图仍是发布阻塞，不将当前状态表述为正式发布通过。

## Asset Gate

- 检查日期：2026-08-09
- 检查范围：仅 `<portfolio-repo>` 项目目录
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
| `npm run build` | PASS，Vite 生产构建；最大入口 chunk 194.26 kB，gzip 61.91 kB |

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
- OCR、BM25、Reranker、Hybrid Search、Agent、LangGraph、P95 和云部署等未完成功能只出现在限制、计划或明确否定说明中。
- KnowledgeFlow 保留 Fake Provider PASS，并把真实模型结果严格限定为 `REAL DEEPSEEK REACT E2E / VERIFIED` 与 `2-TURN QA · SOURCE TRACE · SESSION RESTORE`；未写成 Full-stack 通过。
- 未发现伪造性能指标、伪造截图、虚构 canonical、失效简历链接或把 Candidate 写成 Released 的情况。

## Visual Review

- 设计读法：面向技术招聘者的开发者作品集，使用深色技术编辑语言和 Evidence Trace 证据轨迹系统。
- 固定参数：`DESIGN_VARIANCE: 7`、`MOTION_INTENSITY: 6`、`VISUAL_DENSITY: 5`。
- 核心视觉：Hero Trace 把可控、可验证、可恢复的工程主张转化为流程证据；两条项目案例使用不同布局族，避免通用 SaaS 卡片模板。
- 深色单主题、技术编号、真实版本状态和 Lucide 均来自已批准规格或技术栈；通用设计技能的冲突偏好未覆盖正式规格。
- 1440px 与 360px 全页截图已人工检查，未见裁切、横向溢出或失效布局。
- Phase 9 完整门禁后再次检查首页 1440px / 360px 与 KnowledgeFlow 390px 全页截图；muted 文本对比度提升未破坏视觉层级、移动重排或 Evidence Trace。

## Dependency and Audit Review

- `lighthouse@13.4.1` 仅作为 `devDependency` 安装，`package.json` 与 `package-lock.json` 同步更新。
- `npm audit --json`：0 info、0 low、0 moderate、0 high、0 critical，total 0 vulnerabilities。
- 依赖统计：prod 43、dev 316、optional 50、peer 7、total 407。
- 未运行 `npm audit fix --force`，未进行 major version 升级或 Lighthouse 之外的主动依赖调整。

## Lighthouse

### 测试环境与方法

- 测试日期：2026-08-09
- 最终测试时间窗口：2026-08-09 21:04:30-21:09:32（Asia/Shanghai）；每行同时保留 Lighthouse `fetchTime` UTC 原始时间
- Node：`v22.20.0`
- npm：`10.9.3`
- Lighthouse：`13.4.1`，本地 `devDependency`
- Chrome：`151.0.7922.76`，`C:\Program Files\Google\Chrome\Application\chrome.exe`
- 服务：先执行 `npm run build`，再使用 `npm run preview -- --host 127.0.0.1 --port 4173`；没有使用 Vite dev server
- 审计类别：Performance、Accessibility、Best Practices、SEO
- 模式：Desktop 使用 Lighthouse 标准 `--preset=desktop`；Mobile 使用 Lighthouse 标准移动模式；没有自定义节流或修改评分配置
- 每个 URL / 模式连续执行 3 次；两个 Case Study 同时覆盖 Desktop 与 Mobile
- 单位：FCP、LCP、Speed Index、TBT 均为 ms；CLS 无单位；四类分数为 0-100
- TBT 是 lab responsiveness proxy，不是 INP。**INP requires field or interaction measurement**；本次不生成、不推断 INP 数字，也不声称验证了 `INP < 200ms`。

### 修复前原始结果

首轮 18 次结果全部保留。它们暴露出 muted 文本对比度不足以及两个 visible label / accessible name 不匹配问题；没有用修复后的结果覆盖首轮数据。

| 场景 / 次数 | fetchTime (UTC) | URL | Perf | A11y | BP | SEO | FCP | LCP | Speed Index | TBT | CLS |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Home Desktop 1 | 2026-08-09T12:56:02.119Z | `http://127.0.0.1:4173/` | 100 | 96 | 100 | 100 | 384.567 | 474.6804 | 384.567 | 0 | 0 |
| Home Desktop 2 | 2026-08-09T12:56:46.753Z | `http://127.0.0.1:4173/` | 100 | 96 | 100 | 100 | 375.638125 | 463.16575 | 375.638125 | 0 | 0 |
| Home Desktop 3 | 2026-08-09T12:57:01.169Z | `http://127.0.0.1:4173/` | 100 | 96 | 100 | 100 | 374.37712500000004 | 461.25255000000004 | 374.37712500000004 | 0 | 0 |
| Home Mobile 1 | 2026-08-09T12:57:15.627Z | `http://127.0.0.1:4173/` | 98 | 96 | 100 | 100 | 1753.1419999999998 | 2148.9704 | 1753.1419999999998 | 0 | 0 |
| Home Mobile 2 | 2026-08-09T12:57:30.099Z | `http://127.0.0.1:4173/` | 98 | 96 | 100 | 100 | 1753.4613749999999 | 2149.35365 | 1753.4613749999999 | 0 | 0 |
| Home Mobile 3 | 2026-08-09T12:57:44.563Z | `http://127.0.0.1:4173/` | 98 | 96 | 100 | 100 | 1755.395125 | 2152.0741500000004 | 1755.395125 | 0 | 0 |
| 析数 Desktop 1 | 2026-08-09T12:58:19.534Z | `http://127.0.0.1:4173/projects/xishu` | 100 | 97 | 100 | 100 | 398.18975 | 538.7276999999999 | 398.18975 | 14.999999999999943 | 0 |
| 析数 Desktop 2 | 2026-08-09T12:58:33.831Z | `http://127.0.0.1:4173/projects/xishu` | 100 | 97 | 100 | 100 | 393.36287500000003 | 499.63545 | 393.36287500000003 | 0 | 0 |
| 析数 Desktop 3 | 2026-08-09T12:58:48.122Z | `http://127.0.0.1:4173/projects/xishu` | 100 | 97 | 100 | 100 | 394.94050000000004 | 534.9286 | 394.94050000000004 | 15.999999999999943 | 0 |
| 析数 Mobile 1 | 2026-08-09T12:59:02.520Z | `http://127.0.0.1:4173/projects/xishu` | 97 | 96 | 100 | 100 | 1837.1741249999998 | 2313.8089499999996 | 1837.1741249999998 | 0 | 0 |
| 析数 Mobile 2 | 2026-08-09T12:59:16.787Z | `http://127.0.0.1:4173/projects/xishu` | 97 | 96 | 100 | 100 | 1828.6154999999999 | 2299.5386 | 1828.6154999999999 | 0 | 0 |
| 析数 Mobile 3 | 2026-08-09T12:59:30.942Z | `http://127.0.0.1:4173/projects/xishu` | 97 | 96 | 100 | 100 | 1828.3159999999998 | 2298.3792 | 1828.3159999999998 | 0 | 0 |
| KnowledgeFlow Desktop 1 | 2026-08-09T13:00:01.843Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 100 | 97 | 100 | 100 | 395.03712500000006 | 501.64455000000004 | 395.03712500000006 | 0 | 0 |
| KnowledgeFlow Desktop 2 | 2026-08-09T13:00:16.020Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 100 | 97 | 100 | 100 | 393.805125 | 500.16615 | 393.805125 | 0 | 0 |
| KnowledgeFlow Desktop 3 | 2026-08-09T13:00:30.301Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 100 | 97 | 100 | 100 | 393.148 | 499.37760000000003 | 393.148 | 0 | 0 |
| KnowledgeFlow Mobile 1 | 2026-08-09T13:00:44.540Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 94 | 96 | 100 | 100 | 1829.4859999999999 | 2420.6832 | 1829.4859999999999 | 191 | 0 |
| KnowledgeFlow Mobile 2 | 2026-08-09T13:00:58.829Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 94 | 96 | 100 | 100 | 1830.915375 | 2428.49845 | 1830.915375 | 200 | 0 |
| KnowledgeFlow Mobile 3 | 2026-08-09T13:01:13.118Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 93 | 96 | 100 | 100 | 1834.1535 | 2446.4842 | 1834.1535 | 225 | 0 |

修复前中位数：

| 场景 | Perf | A11y | BP | SEO | FCP | LCP | Speed Index | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Home Desktop | 100 | 96 | 100 | 100 | 375.638125 | 463.16575 | 375.638125 | 0 | 0 |
| Home Mobile | 98 | 96 | 100 | 100 | 1753.4613749999999 | 2149.35365 | 1753.4613749999999 | 0 | 0 |
| 析数 Desktop | 100 | 97 | 100 | 100 | 394.94050000000004 | 534.9286 | 394.94050000000004 | 14.999999999999943 | 0 |
| 析数 Mobile | 97 | 96 | 100 | 100 | 1828.6154999999999 | 2299.5386 | 1828.6154999999999 | 0 | 0 |
| KnowledgeFlow Desktop | 100 | 97 | 100 | 100 | 393.805125 | 500.16615 | 393.805125 | 0 | 0 |
| KnowledgeFlow Mobile | 94 | 96 | 100 | 100 | 1830.915375 | 2428.49845 | 1830.915375 | 200 | 0 |

### 定位与最小修复

- `color-contrast`：`--color-text-muted: #6f7b87` 在四个深色表面的对比度为 4.174-4.475:1。将该单一语义令牌调整为 `#7b8793`，计算对比度为 4.921-5.276:1；未改变主题、核心设计或内容。
- `label-content-name-mismatch`：品牌链接与移动菜单按钮的 `aria-label` 未包含可见的 `刘燚 LIU YI` 和 `MENU`。accessible name 改为包含可见文字与中文用途说明，并新增回归测试。
- 性能代码修改：无。首轮所有场景已达到 `LCP < 2.5s` 与 `CLS < 0.1`，因此没有为分数删除内容、Evidence Trace、动效、路由代码或无障碍功能。

### 修复后最终原始结果

| 场景 / 次数 | fetchTime (UTC) | URL | Perf | A11y | BP | SEO | FCP | LCP | Speed Index | TBT | CLS |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Home Desktop 1 | 2026-08-09T13:05:11.067Z | `http://127.0.0.1:4173/` | 100 | 100 | 100 | 100 | 373.42112499999996 | 497.10535000000004 | 395.71551608349034 | 24.000000000000057 | 0 |
| Home Desktop 2 | 2026-08-09T13:05:25.492Z | `http://127.0.0.1:4173/` | 100 | 100 | 100 | 100 | 373.490875 | 460.18905 | 373.490875 | 0 | 0 |
| Home Desktop 3 | 2026-08-09T13:05:39.891Z | `http://127.0.0.1:4173/` | 100 | 100 | 100 | 100 | 374.64475 | 461.1737 | 374.64475 | 0 | 0 |
| Home Mobile 1 | 2026-08-09T13:04:30.345Z | `http://127.0.0.1:4173/` | 98 | 100 | 100 | 100 | 1754.1505000000002 | 2150.1806 | 1754.1505000000002 | 0 | 0 |
| Home Mobile 2 | 2026-08-09T13:05:54.326Z | `http://127.0.0.1:4173/` | 98 | 100 | 100 | 100 | 1754.404625 | 2150.48555 | 1754.404625 | 0 | 0 |
| Home Mobile 3 | 2026-08-09T13:06:08.769Z | `http://127.0.0.1:4173/` | 98 | 100 | 100 | 100 | 1752.5351249999999 | 2148.24215 | 1752.5351249999999 | 0 | 0 |
| 析数 Desktop 1 | 2026-08-09T13:06:39.917Z | `http://127.0.0.1:4173/projects/xishu` | 100 | 100 | 100 | 100 | 395.148875 | 534.6786500000001 | 395.148875 | 15.000000000000057 | 0 |
| 析数 Desktop 2 | 2026-08-09T13:06:54.248Z | `http://127.0.0.1:4173/projects/xishu` | 100 | 100 | 100 | 100 | 395.03312500000004 | 502.03975 | 395.03312500000004 | 0 | 0 |
| 析数 Desktop 3 | 2026-08-09T13:07:08.694Z | `http://127.0.0.1:4173/projects/xishu` | 100 | 100 | 100 | 100 | 395.9565 | 503.14779999999996 | 395.9565 | 0 | 0 |
| 析数 Mobile 1 | 2026-08-09T13:07:22.933Z | `http://127.0.0.1:4173/projects/xishu` | 93 | 100 | 100 | 100 | 1825.9525 | 2422.443 | 1825.9525 | 203 | 0 |
| 析数 Mobile 2 | 2026-08-09T13:07:37.216Z | `http://127.0.0.1:4173/projects/xishu` | 93 | 100 | 100 | 100 | 1827.4966250000002 | 2423.79595 | 1827.4966250000002 | 202 | 0 |
| 析数 Mobile 3 | 2026-08-09T13:07:51.465Z | `http://127.0.0.1:4173/projects/xishu` | 97 | 100 | 100 | 100 | 1829.856875 | 2302.6282499999998 | 1829.856875 | 0 | 0 |
| KnowledgeFlow Desktop 1 | 2026-08-09T13:08:21.434Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 100 | 100 | 100 | 100 | 394.114 | 500.53679999999997 | 394.114 | 0 | 0 |
| KnowledgeFlow Desktop 2 | 2026-08-09T13:08:35.689Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 100 | 100 | 100 | 100 | 393.746125 | 500.49535 | 393.746125 | 0 | 0 |
| KnowledgeFlow Desktop 3 | 2026-08-09T13:08:50.036Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 100 | 100 | 100 | 100 | 396.766625 | 504.11995 | 396.766625 | 0 | 0 |
| KnowledgeFlow Mobile 1 | 2026-08-09T13:09:04.287Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 94 | 100 | 100 | 100 | 1827.9698749999998 | 2415.3638499999997 | 1827.9698749999998 | 184 | 0 |
| KnowledgeFlow Mobile 2 | 2026-08-09T13:09:18.768Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 93 | 100 | 100 | 100 | 1834.1437499999997 | 2440.0724999999998 | 1834.1437499999997 | 213 | 0 |
| KnowledgeFlow Mobile 3 | 2026-08-09T13:09:32.994Z | `http://127.0.0.1:4173/projects/knowledgeflow` | 94 | 100 | 100 | 100 | 1829.0210000000002 | 2417.0252 | 1829.0210000000002 | 184 | 0 |

### 最终中位数

| 场景 | Perf | A11y | BP | SEO | FCP | LCP | Speed Index | TBT | CLS | LCP / CLS 目标 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Home Desktop | 100 | 100 | 100 | 100 | 373.490875 | 461.1737 | 374.64475 | 0 | 0 | PASS |
| Home Mobile | 98 | 100 | 100 | 100 | 1754.1505000000002 | 2150.1806 | 1754.1505000000002 | 0 | 0 | PASS |
| 析数 Desktop | 100 | 100 | 100 | 100 | 395.148875 | 503.14779999999996 | 395.148875 | 0 | 0 | PASS |
| 析数 Mobile | 93 | 100 | 100 | 100 | 1827.4966250000002 | 2422.443 | 1827.4966250000002 | 202 | 0 | PASS |
| KnowledgeFlow Desktop | 100 | 100 | 100 | 100 | 394.114 | 500.53679999999997 | 394.114 | 0 | 0 | PASS |
| KnowledgeFlow Mobile | 94 | 100 | 100 | 100 | 1829.0210000000002 | 2417.0252 | 1829.0210000000002 | 184 | 0 | PASS |

结论：六个最终场景的 LCP 中位数全部 `< 2500 ms`，CLS 中位数全部 `< 0.1`。INP 仍是未来 field target，未由本次 Lighthouse 验证。
