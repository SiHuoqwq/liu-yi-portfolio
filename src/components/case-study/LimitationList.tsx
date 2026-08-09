export function LimitationList({ current, planned = [] }: { current: readonly string[]; planned?: readonly string[] }) {
  return <div className="limitation-groups"><div><h3 className="mono">CURRENT LIMITATIONS</h3><ul>{current.map((item) => <li key={item}>{item}</li>)}</ul></div>{planned.length ? <div><h3 className="mono">NEXT / PLANNED</h3><ul>{planned.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}</div>
}
