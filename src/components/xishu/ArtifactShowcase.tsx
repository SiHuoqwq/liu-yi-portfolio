export function ArtifactShowcase() {
  const artifacts = [
    ['TEXT', '分析总结与解释', 'Evidence-linked conclusion'],
    ['METRIC', '关键业务指标', 'Structured value + label'],
    ['TABLE', '分组和趋势结果', 'Deterministic tabular output'],
    ['CHART', '量纲安全的图表结果', 'Persisted visual artifact'],
  ] as const

  return <div className="artifact-showcase" role="group" aria-label="析数 Artifact 类型"><span className="mono diagram-label">示意</span>{artifacts.map(([type, title, detail]) => <div key={type}><strong className="mono">{type}</strong><span>{title}</span><small className="mono">{detail}</small></div>)}</div>
}
