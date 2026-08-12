export function XishuArchitectureComparison() {
  return (
    <figure className="architecture-comparison">
      <figcaption><span className="mono diagram-label">示意</span> V1 到 V2 责任边界</figcaption>
      <div>
        <section>
          <h3>V1 / FREE PLANNING</h3>
          <p className="architecture-comparison__stack">LangGraph StateGraph<br />14 个分析与可视化工具</p>
          <div><p className="mono architecture-comparison__label">模型职责</p><ul><li>自由规划分析步骤</li><li>自主选择工具并生成最终回答</li></ul></div>
          <div><p className="mono architecture-comparison__label">主要风险</p><ul><li>字段语义难稳定约束</li><li>最终回答可能脱离工具证据</li></ul></div>
        </section>
        <div className="architecture-arrow" aria-hidden="true"><span className="mono">REFACTOR</span><strong>→</strong></div>
        <section>
          <h3>V2 / COMPILED PLAN</h3>
          <p className="architecture-comparison__stack">Restricted Analysis Intent<br />Plan Compiler · 5 个严格 Schema 操作<br />Evidence Registry · Deterministic Fallback</p>
          <div><p className="mono architecture-comparison__label">程序职责</p><ul><li>编译固定工作流</li><li>pandas 确定性计算</li><li>Evidence 约束结论</li></ul></div>
          <div><p className="mono architecture-comparison__label">主要收益</p><ul><li>模型职责收缩</li><li>计算与证据可验证</li></ul></div>
        </section>
      </div>
    </figure>
  )
}
