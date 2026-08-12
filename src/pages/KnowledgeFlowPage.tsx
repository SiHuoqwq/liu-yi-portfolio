import { ScreenshotGallery } from '../components/case-study/ScreenshotGallery'
import { BrowserAcceptanceFlow } from '../components/knowledgeflow/BrowserAcceptanceFlow'
import { RagContextBudget } from '../components/knowledgeflow/RagContextBudget'
import { SafeDocumentUpdate } from '../components/knowledgeflow/SafeDocumentUpdate'
import { SourceValidation } from '../components/knowledgeflow/SourceValidation'
import { DocumentIngestion } from '../components/knowledgeflow/DocumentIngestion'
import { CaseSection } from '../components/case-study/CaseSection'
import { CaseStudyHero } from '../components/case-study/CaseStudyHero'
import { CaseStudyNavigation } from '../components/case-study/CaseStudyNavigation'
import { LimitationList } from '../components/case-study/LimitationList'
import { ProcessTrace } from '../components/case-study/ProcessTrace'
import { ProjectContext } from '../components/case-study/ProjectContext'
import { VerificationRecord } from '../components/case-study/VerificationRecord'

export function KnowledgeFlowPage() {
  return (
    <main id="main-content" className="case-page case-page--rag">
      <CaseStudyHero project="KNOWLEDGEFLOW" title="KnowledgeFlow AI · 本地模块化 RAG 知识库" statement={<>让回答只建立在合格 Context 与<br />可复核来源之上。</>} summary="面向本地文档的模块化 RAG 工作台，覆盖文档摄入、稳定 Chunk ID、检索与上下文预算、固定拒答、来源快照、SSE 对话体验和浏览器恢复。" status="CANDIDATE / v0.2.0" tone="warning" facts={[["ROLE", "Independent Full-stack Development"], ["STACK", "FastAPI / React / Chroma / BGE / DeepSeek"], ["BOUNDARY", "Real DeepSeek React E2E verified · not full-stack"]]} />
      <CaseSection index="01 / 12" title="背景与职责"><ProjectContext items={[["PURPOSE", "本地模块化 RAG 知识库"], ["ROLE", "独立完成后端、检索、前端与验收"], ["STATUS", "v0.2.0 Candidate，不是正式 Release"]]} /></CaseSection>
      <CaseSection index="02 / 12" title="用户工作流"><ProcessTrace steps={["上传支持的文档", "解析并切分 Chunk", "生成稳定 ID 与 Embedding", "Similarity / MMR 检索", "执行 Context Budget", "回答或固定拒答", "保存来源快照并恢复展示"]} /></CaseSection>
      <CaseSection index="03 / 12" title="RAG 风险不是只有召回率"><p>系统需要处理来源失联、低质量 Context、上下文越界、更新残留和浏览器会话恢复。没有合格 Context 时，固定拒答比让模型猜测更可靠。</p></CaseSection>
      <CaseSection index="04 / 12" title="文档摄入" ariaLabel="KnowledgeFlow 已实现能力" tone="rag"><div className="ingestion-layout"><DocumentIngestion /><ProjectContext items={[["SUPPORTED", "PDF · TXT · Markdown"], ["EMBEDDING", "BAAI/bge-small-zh-v1.5"], ["VECTOR STORE", "Persistent Chroma"], ["RETRIEVAL", "Similarity / MMR · Cosine Distance Filter"], ["CONTROL", "Context Budget · Refusal · Source Trace"]]} /></div></CaseSection>
      <CaseSection index="05 / 12" title="Chunk 与稳定 ID"><p>稳定 ID 由 source、page、chunk_index、start_index 与内容 SHA-256 组成，减少同一内容在更新与恢复中的身份漂移。</p><SafeDocumentUpdate /></CaseSection>
      <CaseSection index="06 / 12" title="Retrieval 与 Context"><RagContextBudget /><p>Context Formatter 按字符预算保留完整 Chunk，不截断成无法解释的来源片段。</p></CaseSection>
      <CaseSection index="07 / 12" title="拒答和来源校验"><SourceValidation /></CaseSection>
      <CaseSection index="08 / 12" title="FastAPI / React / SSE"><ProjectContext items={[["REST", "Documents · Upload · Delete · Health / Config"], ["SSE", "Streaming Chat"], ["HISTORY", "前端有限有界历史；浏览器恢复当前展示"], ["NOT INCLUDED", "服务端长期记忆 · 跨设备永久 Conversation"]]} /></CaseSection>
      <CaseSection index="09 / 12" title="界面与来源阅读"><ScreenshotGallery items={[{ path: '/images/knowledgeflow/upload-empty.webp', alt: 'KnowledgeFlow 空状态', width: 1600, height: 1000 }, { path: '/images/knowledgeflow/document-list.webp', alt: 'KnowledgeFlow 文档列表', width: 1600, height: 1000 }, { path: '/images/knowledgeflow/streaming-chat.webp', alt: 'KnowledgeFlow 流式问答', width: 1600, height: 1000 }, { path: '/images/knowledgeflow/source-snapshot.webp', alt: 'KnowledgeFlow 来源快照', width: 1600, height: 1000 }, { path: '/images/knowledgeflow/session-restore.webp', alt: 'KnowledgeFlow 浏览器恢复', width: 1600, height: 1000 }]} /></CaseSection>
      <CaseSection index="10 / 12" title="门禁与浏览器验收" ariaLabel="KnowledgeFlow 验证状态"><VerificationRecord items={[{ label: 'Release Check', value: '17 / 17 PASS', status: 'pass' }, { label: 'Frontend Tests', value: '51 / 51 PASS', status: 'pass' }, { label: 'Production Build', value: 'PASS', status: 'pass' }, { label: 'Version / Secret Scan', value: 'PASS', status: 'pass' }, { label: 'Runtime Data Fingerprint', value: 'UNCHANGED', status: 'pass' }, { label: 'Fake Provider', value: 'FAKE PROVIDER FULL-STACK / PASSED', status: 'pass' }, { label: 'Real DeepSeek', value: 'REAL DEEPSEEK REACT E2E / VERIFIED', status: 'pass' }, { label: 'Verified Scope', value: '2-TURN QA · SOURCE TRACE · SESSION RESTORE', status: 'pass' }]} /><BrowserAcceptanceFlow /></CaseSection>
      <CaseSection index="11 / 12" title="技术取舍与限制" ariaLabel="KnowledgeFlow 当前限制"><LimitationList current={["DOCX 与 OCR 未支持", "BM25、Hybrid Search、Reranker 与 HyDE 未实现", "不是 Agent、LangGraph 或 Tool Calling 系统", "没有服务端长期 Conversation Memory", "没有用户认证、权限、多租户与公网部署", "真实 DeepSeek 仅验证两轮 React E2E、来源追踪与当前标签页刷新恢复；拒答、删除、离线和重启持久化未纳入本轮"]} planned={["OCR", "Hybrid Search", "Reranker", "补充其余真实 Provider 人工清单"]} /></CaseSection>
      <CaseSection index="12 / 12" title="返回作品集"><CaseStudyNavigation href="/" label="返回首页 / Selected Work" /></CaseSection>
    </main>
  )
}
