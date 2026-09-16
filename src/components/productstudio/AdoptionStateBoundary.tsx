import { TechnicalRecord } from '../case-study/TechnicalRecord'

export function AdoptionStateBoundary() {
  return (
    <div>
      <p className="mono">PROPOSED ≠ SELECTED ≠ APPROVED ≠ GENERATED</p>
      <TechnicalRecord items={[
        ['PROPOSED', 'Deterministic Creative Director Provider 产生结构化候选，不自动进入生成。'],
        ['SELECTED', '用户选中候选，但尚未形成正式生成输入。'],
        ['APPROVED', '用户明确采用，形成 Approved Creative Brief。'],
        ['GENERATED', 'CUI 已执行任务；结果仍需 Fidelity QA。'],
      ]} />
    </div>
  )
}
