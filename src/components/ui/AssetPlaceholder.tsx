export function AssetPlaceholder({ path, label = '真实项目截图待补充' }: { path: string; label?: string }) {
  return (
    <div className="asset-placeholder" role="img" aria-label={`${label}：${path}`}>
      <span className="mono">ASSET / PENDING</span>
      <strong>{label}</strong>
      <code>{path}</code>
    </div>
  )
}
