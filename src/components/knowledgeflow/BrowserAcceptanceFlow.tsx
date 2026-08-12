export function BrowserAcceptanceFlow() {
  return <ol className="browser-flow">{['Empty State', 'Upload Markdown', 'SSE Turn 01', 'SSE Turn 02', 'Restore 2 Answers', 'Inspect Sources', 'Delete Document', 'Final Count = 0'].map((step) => <li key={step} className="mono">{step}</li>)}</ol>
}
