export function RunRecoveryDiagram() {
  return <div className="run-diagram"><span className="mono diagram-label">示意</span><p>Conversation</p><div>{['AnalysisRun', 'RunStep', 'Artifact', 'RunEvent'].map((item) => <span key={item} className="mono">{item}</span>)}</div><p>SSE / 实时事件 · Heartbeat · Last-Event-ID</p><p>REST / 最终状态 · 历史恢复 · Artifact · 重新同步</p></div>
}
