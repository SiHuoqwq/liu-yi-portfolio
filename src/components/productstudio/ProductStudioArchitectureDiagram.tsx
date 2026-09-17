const architectureStages = [
  {
    index: '01',
    category: 'INPUT / TRUTH',
    title: 'Product Truth',
    items: ['Current Product Context', 'Verified Constraints'],
  },
  {
    index: '02',
    category: 'PLANNING / CONTROL',
    title: 'Controlled AI Workflow',
    items: ['Deterministic Provider', 'Explicit Adoption'],
  },
  {
    index: '03',
    category: 'EXECUTION',
    title: 'Generation Strategy',
    items: ['Generation Job', 'CUI / Qwen Image Edit'],
  },
] as const

const persistedState = [
  'Product Context',
  'Adopted Strategy',
  'Generation Job',
  'Result',
  'Confirmation State',
] as const

export function ProductStudioArchitectureDiagram() {
  return (
    <figure className="productstudio-architecture__diagram" aria-label="ProductStudio 受控生成架构">
      <ol className="productstudio-architecture__flow">
        {architectureStages.map((stage) => (
          <li className="productstudio-architecture__stage" key={stage.index}>
            <div className="productstudio-architecture__stage-header">
              <span className="mono productstudio-architecture__stage-index">{stage.index}</span>
              <span className="mono productstudio-architecture__stage-category">{stage.category}</span>
            </div>
            <h3>{stage.title}</h3>
            <ul className="productstudio-architecture__stage-items">
              {stage.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </li>
        ))}

        <li className="productstudio-architecture__stage productstudio-architecture__stage--quality">
          <div className="productstudio-architecture__stage-header">
            <span className="mono productstudio-architecture__stage-index">04</span>
            <span className="mono productstudio-architecture__stage-category">QUALITY GATE</span>
          </div>
          <h3>Fidelity QA</h3>
          <ul className="productstudio-architecture__stage-items">
            <li>Manual Confirmation</li>
          </ul>
          <div className="productstudio-architecture__quality-boundary">
            <span>GENERATION COMPLETED</span>
            <strong aria-label="不等于">≠</strong>
            <span>PRODUCT FIDELITY CONFIRMED</span>
          </div>
        </li>
      </ol>

      <div className="productstudio-architecture__connection">
        <span className="mono">SAVE / RESTORE</span>
      </div>

      <section className="productstudio-architecture__state" aria-labelledby="productstudio-state-title">
        <header className="productstudio-architecture__state-header">
          <span className="mono productstudio-architecture__state-eyebrow">STATE RAIL</span>
          <h3 id="productstudio-state-title">HISTORY / RECOVERY</h3>
          <p className="mono">STATE PERSISTENCE</p>
        </header>
        <ul className="productstudio-architecture__state-items">
          {persistedState.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </figure>
  )
}
