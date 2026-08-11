const stages = ['FILE', 'LOAD', 'CLEAN', 'QUALITY CHECK', 'CHUNK', 'STABLE ID', 'BGE EMBEDDING', 'CHROMA'] as const

export function DocumentIngestion() {
  return <div className="ingestion-pipeline" aria-label="KnowledgeFlow 文档摄入流程"><span className="mono diagram-label">示意</span><ol>{stages.map((stage) => <li key={stage} className="mono">{stage}</li>)}</ol></div>
}
