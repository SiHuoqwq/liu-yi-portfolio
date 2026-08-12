# 析数真实素材接入记录

## 来源与真实性

- 源项目：`<xishu-source>`
- 源版本：`dc3b010 feat: list conversation questions on dataset overview`
- 数据：`demo/learning_operations_demo.csv`，项目自带固定种子的公开合成演示数据（360 行、9 列），未使用私人文件。
- 运行方式：production frontend 连接当前已配置的真实 DeepSeek 后端。用户于 2026-08-13 明确授权本轮模型调用；自动化没有读取、复制或输出私有 API Key。
- 截图均来自实际析数 UI；未使用 imagegen、第三方图片或伪造 Dashboard。

## 最终素材与用途

| 文件 | 评级 | 用途 |
| --- | --- | --- |
| `hero-workbench.webp` | Recommended | 首页析数主图；展示真实工作台、问题与已完成状态 |
| `dataset-profile.webp` | Recommended | Case Study 数据画像 |
| `analysis-input.webp` | Optional | 工作流输入候选，当前不进入主图库 |
| `analysis-result.webp` | Recommended | Case Study 分析结果顶部 |
| `artifact-overview.webp` | Recommended | Case Study 结构化 Table / Chart Artifact |
| `run-details.webp` | Recommended | Case Study 五步完成态 Run Details |
| `session-history.webp` | Optional | 三组正常分析与一组边界分析的历史记录；当前不进入主图库 |
| `session-recovery.webp` | Optional | 证明历史问题与结论恢复；当前入口未同时恢复 Artifact，不作完整 Artifact 恢复声明 |
| `boundary-refusal.webp` | Recommended | Case Study 教师字段缺失时的可信拒答边界 |

## 未采用候选

- 购买渠道与月度趋势的真实 DeepSeek 截图保留在临时原始目录，不进入作品集主图库以控制截图数量。购买渠道回答明确指出缺少学习时长字段，没有编造该指标；月度趋势生成 90 行结构化结果与两张图，但最终结论较机械，视觉与叙事价值低于课程类别结果。
- 长页 Artifact 元素截图受到产品固定输入框遮挡；最终采用无遮挡的原始长页局部裁切。

## 已知产品边界

- 教师维度问题正确停止后续 Artifact，Table 与 Chart 均为 0；当前 UI 状态仍显示“分析失败”，建议未来将业务条件不足与系统错误区分，但本阶段未修改析数产品文案。
- 从历史记录重新进入能够恢复问题与分析结论，但当前界面没有同时显示该 Run 的 Artifact；作品集不声明已验证完整 Artifact 恢复。
- DeepSeek 课程类别结果准确覆盖完成率、课程评分与退款率，生成 2 张表与 2 张图；购买渠道结果对缺失的学习时长作明确限制说明；教师边界未调用后续分析 Artifact。
