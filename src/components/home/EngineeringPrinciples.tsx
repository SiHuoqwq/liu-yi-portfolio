const principles = [
  ['01', '模型处理不确定性，程序处理确定性', '使用模型完成意图识别、语言理解和内容生成；将统计计算、状态转换、证据校验和数据约束交给确定性程序。', 'RESPONSIBILITY / SEPARATED'],
  ['02', '证据先于结论', '关键结论必须回到工具结果、文档来源或当前运行记录，避免生成无法验证的数字和引用。', 'SOURCE / LINKED'],
  ['03', '状态先持久化，实时流只负责体验', '任务、事件和结果先保存，再用于实时展示与恢复；KnowledgeFlow 不声明服务端长期 Conversation 数据库。', 'STATE / RECOVERABLE'],
  ['04', '门禁通过后发布', '使用单元、集成、浏览器验收和构建检查验证最终版本，并区分 Fake Provider 与真实模型验收。', 'RELEASE / VERIFIED'],
] as const

export function EngineeringPrinciples() {
  return (
    <section id="principles" className="section principles" aria-labelledby="principles-title">
      <div className="container principles__grid">
        <header className="principles__intro"><p className="section-index mono">ENGINEERING PRINCIPLES / 04</p><h2 id="principles-title">AI 应用不能只依赖模型表现良好。</h2><p>它还需要确定性计算、可追溯证据、可恢复状态和可复核的发布门禁。</p></header>
        <ol className="principles__trace">{principles.map(([index, title, body, status]) => <li key={index}><span className="principle-index mono">{index}</span><div><h3>{title}</h3><p>{body}</p><span className="mono principle-status">{status}</span></div></li>)}</ol>
      </div>
    </section>
  )
}
