export function SafeDocumentUpdate() {
  return <div className="safe-update"><span className="mono diagram-label">示意</span><p>解析新文档 → 写入新 chunks → 清理旧 chunks</p><p className="warning-copy">不是完整数据库事务；清理失败时可能短暂存在新旧数据。</p></div>
}
