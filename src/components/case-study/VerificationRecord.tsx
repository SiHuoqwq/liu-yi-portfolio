export function VerificationRecord({ items }: { items: readonly { label: string; value: string; status: 'pass' | 'warning' }[] }) {
  return <ul className="verification-record">{items.map((item) => <li key={item.label}><span>{item.label}</span><strong className={`mono verification-record--${item.status}`}>{item.value}</strong></li>)}</ul>
}
