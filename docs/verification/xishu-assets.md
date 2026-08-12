# 析数真实素材接入记录

## 来源与真实性

- 源项目：`D:\Codex\Projects\ai-data-analyst-master-release`
- 源版本：`dc3b010 feat: list conversation questions on dataset overview`
- 数据：`demo/learning_operations_demo.csv`，项目自带固定种子的公开合成演示数据（360 行、9 列），未使用私人文件。
- 运行方式：隔离临时数据库与上传目录；production frontend；Fake Provider 确定性演示/测试模式。未调用 DeepSeek，未使用私有 API Key。
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

- 购买渠道与月度趋势截图保留在临时原始目录，不进入作品集。Fake Provider 的受控路由没有完整覆盖问题中的所有语义，因此不能作为真实模型理解能力证据。
- 长页 Artifact 元素截图受到产品固定输入框遮挡；最终采用无遮挡的原始长页局部裁切。

## 已知产品边界

- 教师维度问题正确停止后续 Artifact，Table 与 Chart 均为 0；当前 UI 状态仍显示“分析失败”，建议未来将业务条件不足与系统错误区分，但本阶段未修改析数产品文案。
- 从历史记录重新进入能够恢复问题与分析结论，但当前界面没有同时显示该 Run 的 Artifact；作品集不声明已验证完整 Artifact 恢复。
