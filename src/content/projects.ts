export type TraceStepRecord = {
  index: string
  label: string
  status: string
}

export type ProjectRecord = {
  id: 'xishu' | 'knowledgeflow' | 'productstudio'
  index: string
  name: string
  title: string
  category: string
  version: string
  status: string
  statusTone: 'verified' | 'warning'
  summary: string
  problem: string
  solution: string
  capabilities: readonly { label: string; detail: string }[]
  metrics: readonly string[]
  route: string
  github?: string
  imagePath: string
  flow?: readonly string[]
}

export const heroTraceSteps: readonly TraceStepRecord[] = [
  { index: '01', label: '意图', status: '已约束' },
  { index: '02', label: '计划', status: '已编译' },
  { index: '03', label: '计算', status: '确定性' },
  { index: '04', label: '证据', status: '已验证' },
  { index: '05', label: '产物', status: '已交付' },
]

export const xishuProject: ProjectRecord = {
  id: 'xishu',
  index: '01',
  name: '析数',
  title: '可信 AI 数据分析工作台',
  category: 'AI DATA ANALYSIS',
  version: 'v2.0.0',
  status: 'RELEASED',
  statusTone: 'verified',
  summary: '面向在线学习运营数据的可信 AI 分析应用。',
  problem: '自由生成容易出现字段误判和业务数字幻觉。',
  solution: '模型只识别高层意图，程序负责工作流编译、计算和证据校验。',
  capabilities: [
    { label: 'CONTROLLED WORKFLOW', detail: '受限意图驱动固定分析流程' },
    { label: 'EVIDENCE VALIDATION', detail: '结论必须引用当前 Run 的证据' },
    { label: 'RECOVERABLE EXECUTION', detail: '状态持久化，SSE 更新，REST 恢复' },
  ],
  metrics: ['183 / 183 Backend Tests', '59 / 59 Frontend Tests', '4 Artifact Types', 'v2.0.0 Released'],
  route: '/projects/xishu',
  github: 'https://github.com/SiHuoqwq/ai-data-analyst',
  imagePath: '/images/xishu/hero-workbench.webp',
}

export const knowledgeFlowProject: ProjectRecord = {
  id: 'knowledgeflow',
  index: '02',
  name: 'KnowledgeFlow AI',
  title: '本地模块化 RAG 知识库',
  category: 'RETRIEVAL SYSTEM',
  version: 'v0.2.0 Candidate',
  status: 'CANDIDATE',
  statusTone: 'warning',
  summary: '以来源追踪、固定拒答和可复核验收约束本地 RAG 流程。',
  problem: '检索结果与回答之间若缺少来源快照，答案无法可靠复核。',
  solution: '模块化拆分文档处理、检索、上下文预算和来源验证，并区分 Fake 与真实模型验收。',
  capabilities: [
    { label: 'RETRIEVAL', detail: 'BGE / Chroma / Similarity / MMR' },
    { label: 'CONTEXT CONTROL', detail: 'Context Budget / Refusal' },
    { label: 'SOURCE TRACE', detail: '回答绑定来源快照' },
  ],
  metrics: ['17 / 17 Release Gate', 'FAKE PROVIDER FULL-STACK / PASSED', 'REAL DEEPSEEK REACT E2E / VERIFIED', '2-TURN QA · SOURCE TRACE · SESSION RESTORE'],
  route: '/projects/knowledgeflow',
  github: 'https://github.com/SiHuoqwq/langchain-rag-framework',
  imagePath: '/images/knowledgeflow/hero-workbench.webp',
  flow: ['DOCUMENT', 'CHUNK', 'EMBEDDING', 'RETRIEVAL', 'CONTEXT', 'SOURCE'],
}

export const productStudioProject: ProjectRecord = {
  id: 'productstudio',
  index: '03',
  name: 'ProductStudio',
  title: 'AI 电商视觉内容生成工作台',
  category: 'AI VISUAL WORKFLOW',
  version: 'v0.2.0-job-demo',
  status: 'FROZEN JOB DEMO',
  statusTone: 'warning',
  summary: '以商品事实约束创意，由用户明确采用方案，并将本地生成、质量确认与任务恢复串成闭环。',
  problem: '直接从 Prompt 进入模型，会混合商品事实、创意表达与执行参数，难以审核和恢复。',
  solution: '分离 Product Truth、创意提案、显式采用与执行状态，让结果绑定具体商品、任务和 QA 记录。',
  capabilities: [
    { label: 'PRODUCT TRUTH', detail: '已确认事实、未知信息与参考依据分层' },
    { label: 'EXPLICIT ADOPTION', detail: 'Proposed、Selected、Approved、Generated 状态分离' },
    { label: 'PRODUCT ISOLATION', detail: '按商品、输出类型与上下文隔离状态' },
  ],
  metrics: ['REAL CUI / QWEN RESULT', 'Fidelity QA + Manual Confirmation', 'HISTORY / RECOVERY', 'v0.2.0 Job Demo'],
  route: '/projects/productstudio',
  imagePath: '/images/productstudio/01_workbench_overview.png',
  flow: ['TRUTH', 'DIRECTION', 'ADOPTION', 'GENERATION', 'QA', 'RECOVERY'],
}

export const projects = [xishuProject, knowledgeFlowProject, productStudioProject] as const
