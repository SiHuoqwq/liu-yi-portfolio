import { ProcessTrace } from '../case-study/ProcessTrace'
import { TechnicalRecord } from '../case-study/TechnicalRecord'

export function ProductIsolationRecord() {
  return (
    <div>
      <ProcessTrace steps={[
        { label: 'ARIOSE', detail: '保留随行杯的 Product Definition、参考图、采用状态与任务历史。' },
        { label: 'gaming headset', detail: '切换后只读取耳机自己的类目事实、参考图与任务状态。' },
        { label: 'ARIOSE restore', detail: '切回后恢复原有方案、Job 与 QA 状态，不混入耳机上下文。' },
      ]} />
      <TechnicalRecord items={[
        ['ISOLATED STATE', 'Product Definition · Reference · Creative State · History · Job'],
        ['VERIFIED SCOPE', 'ARIOSE ↔ gaming headset 切换与恢复'],
      ]} />
    </div>
  )
}
