export function DecisionComparison({ left, right }: { left: { title: string; items: readonly string[] }; right: { title: string; items: readonly string[] } }) {
  return <div className="decision-comparison"><section><h3>{left.title}</h3><ul>{left.items.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h3>{right.title}</h3><ul>{right.items.map((item) => <li key={item}>{item}</li>)}</ul></section></div>
}
