export function TechnicalRecord({ items }: { items: readonly [string, string][] }) {
  return <dl className="technical-record">{items.map(([label, value]) => <div key={label}><dt className="mono">{label}</dt><dd>{value}</dd></div>)}</dl>
}
