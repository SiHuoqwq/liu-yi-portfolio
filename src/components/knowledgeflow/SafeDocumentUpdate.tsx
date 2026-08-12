export function SafeDocumentUpdate() {
  const idParts = ['SOURCE', 'PAGE', 'CHUNK INDEX', 'START INDEX', 'CONTENT HASH'] as const
  return <div className="safe-update"><span className="mono diagram-label">示意</span><div className="stable-id-flow" aria-label="稳定 Chunk ID 组成">{idParts.map((part) => <span key={part} className="mono">{part}</span>)}<strong className="mono">STABLE CHUNK ID</strong></div><div className="safe-update__flow" aria-label="文档安全更新流程"><ol>{['READ OLD IDS', 'PROCESS NEW', 'UPSERT NEW', 'SUCCESS?'].map((step) => <li key={step} className="mono">{step}</li>)}</ol><div><p><span className="mono">YES</span> Remove stale IDs</p><p><span className="mono">NO</span> Keep old knowledge</p></div></div><p className="warning-copy">这不是完整数据库事务。清理失败时可能暂时存在新旧数据。</p></div>
}
