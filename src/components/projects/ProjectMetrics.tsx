export function ProjectMetrics({ metrics }: { metrics: readonly string[] }) {
  return <ul className="project-metrics">{metrics.map((metric) => <li key={metric} className="mono">{metric}</li>)}</ul>
}
