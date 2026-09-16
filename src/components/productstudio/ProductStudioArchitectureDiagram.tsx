import { ProcessTrace } from '../case-study/ProcessTrace'

const architectureStages = [
  { label: 'Product Truth', detail: '保存商品身份、已确认事实、unknown 与参考依据，创意描述不能反向改写事实。' },
  { label: 'Controlled AI Workflow', detail: 'Deterministic Creative Director Provider 提出结构化候选；用户明确采用后，Generation Strategy 才进入执行链路。' },
  { label: 'Generation', detail: 'CUI（ComfyUI）执行 Qwen Image Edit；BiRefNet 提供商品保真与回退路径。' },
  { label: 'Fidelity QA', detail: '检查商品外形、颜色、结构、标识与类目关键特征，并记录质量验证状态。' },
  { label: 'History / Recovery', detail: '保存 Job、输出、QA 状态与必要来源，支持刷新或后端重启后的任务恢复。' },
] as const

export function ProductStudioArchitectureDiagram() {
  return <ProcessTrace steps={architectureStages} />
}
