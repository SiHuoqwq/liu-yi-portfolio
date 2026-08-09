export function ProcessTrace({ steps }: { steps: readonly string[] }) {
  return <ol className="process-trace">{steps.map((step, index) => <li key={step}><span className="mono">{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}</ol>
}
