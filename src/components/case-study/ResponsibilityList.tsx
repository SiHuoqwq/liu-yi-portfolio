export function ResponsibilityList({ items }: { items: readonly string[] }) {
  return <ul className="responsibility-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
}
