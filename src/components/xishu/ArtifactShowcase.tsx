export function ArtifactShowcase() {
  return <div className="artifact-showcase"><span className="mono diagram-label">示意</span>{['SUMMARY', 'TABLE', 'CHART', 'EVIDENCE'].map((item) => <div key={item}><strong className="mono">{item}</strong><span>结构化 Artifact</span></div>)}</div>
}
