import { TechnicalRecord } from '../case-study/TechnicalRecord'

export function GenerationEvidenceBinding() {
  return (
    <div>
      <h3>Generation Result</h3>
      <p className="mono">GENERATION COMPLETED ≠ PRODUCT FIDELITY CONFIRMED</p>
      <p>结果归属于具体任务，不通过输出目录中的“最新文件”推断。生成完成后需要人工确认商品一致性。</p>
      <TechnicalRecord items={[
        ['Strategy', '记录本次任务的保真、质量与速度偏好。'],
        ['Job', '绑定商品、输入、采用方案、执行状态与输出。'],
        ['Fidelity QA', '记录商品一致性检查与人工确认语义，不把生成成功自动视为商品一致性通过。'],
      ]} />
    </div>
  )
}
