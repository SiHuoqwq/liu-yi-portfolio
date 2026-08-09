export function XishuArchitectureComparison() {
  return (
    <figure className="architecture-comparison">
      <figcaption><span className="mono diagram-label">示意</span> V1 到 V2 责任边界</figcaption>
      <div><section><h3>V1 / FREE PLANNING</h3><p>LangGraph StateGraph</p><p>14 个工具由模型自由规划</p><p>字段与计算路径难以稳定约束</p></section><span className="architecture-arrow" aria-hidden="true">→</span><section><h3>V2 / COMPILED PLAN</h3><p>Restricted Analysis Intent</p><p>Plan Compiler + 5 个严格 Schema 操作</p><p>Evidence Registry + Deterministic Fallback</p></section></div>
    </figure>
  )
}
