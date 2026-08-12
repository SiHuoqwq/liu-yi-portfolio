const capabilities = [
  ['AI 应用系统', 'LangChain · LangGraph · Tool Calling · DeepSeek API · Structured Output · Provider Abstraction · Prompt & Context Control'],
  ['RAG 与数据处理', 'pandas · NumPy · BGE Embedding · Chroma · Similarity / MMR · Document Chunking · Context Budget · Source Tracking'],
  ['后端与可靠性', 'Python · FastAPI · Pydantic · SQLAlchemy · Alembic · REST API · SSE · SQLite'],
  ['产品界面', 'React · TypeScript · Vite · TanStack Query · Tailwind CSS · Vitest · Testing Library · Responsive UI'],
] as const

export function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities" aria-labelledby="capabilities-title">
      <div className="container capabilities__grid">
        <header><p className="section-index mono">CAPABILITIES / 04</p><h2 id="capabilities-title">从模型能力，到可靠产品。</h2><p>不只完成模型接入，也覆盖工作流、后端服务、数据处理、前端交互和测试验收。</p><p className="project-ref mono">P01 析数<br />P02 KnowledgeFlow AI</p></header>
        <ol>{capabilities.map(([title, items], index) => <li key={title}><span className="mono">{String(index + 1).padStart(2, '0')}</span><div><h3 className="mono">{title}</h3><p>{items}</p><small className="mono">EVIDENCE / P01 · P02</small></div></li>)}</ol>
      </div>
    </section>
  )
}
