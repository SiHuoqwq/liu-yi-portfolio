import { CaseSection } from '../components/case-study/CaseSection'
import { CaseStudyHero } from '../components/case-study/CaseStudyHero'
import { CaseStudyNavigation } from '../components/case-study/CaseStudyNavigation'
import { DecisionComparison } from '../components/case-study/DecisionComparison'
import { LimitationList } from '../components/case-study/LimitationList'
import { ProcessTrace } from '../components/case-study/ProcessTrace'
import { ProjectContext } from '../components/case-study/ProjectContext'
import { ResponsibilityList } from '../components/case-study/ResponsibilityList'
import { VerificationRecord } from '../components/case-study/VerificationRecord'
import { ArtifactShowcase } from '../components/xishu/ArtifactShowcase'
import { RunRecoveryDiagram } from '../components/xishu/RunRecoveryDiagram'
import { XishuArchitectureComparison } from '../components/xishu/XishuArchitectureComparison'
import { ScreenshotGallery } from '../components/case-study/ScreenshotGallery'

export function XishuPage() {
  return (
    <main id="main-content" className="case-page">
      <CaseStudyHero project="XISHU" title="析数 · AI 数据分析工作台" statement={<>将模型能力限制在意图理解，<br />将业务计算和证据校验交给程序。</>} summary="面向在线学习运营数据的 AI 分析应用，支持数据上传、字段画像、自然语言分析和结构化结果展示。受限意图、确定性计算与 Evidence 校验降低字段误用和业务数字幻觉风险。" status="RELEASE / v2.0.0" tone="verified" facts={[["ROLE", "Independent Full-stack Development"], ["STACK", "FastAPI / React / SQLAlchemy / pandas / DeepSeek"], ["VERIFICATION", "183 pytest / 59 Vitest / Type Check / Build"]]} />
      <CaseSection index="01 / 11" title="项目概览与职责" ariaLabel="析数已实现能力"><ProjectContext items={[["IMPLEMENTED", "受限意图 · Plan Compiler · 确定性计算 · Evidence Registry · Artifact"], ["DATA", "在线学习运营数据"], ["DELIVERY", "独立完成工作流、后端、前端、测试与 v2.0.0 发布"]]} /><ResponsibilityList items={["AI 工作流与状态模型", "FastAPI / SQLAlchemy 后端", "React / TypeScript 工作台", "自动化测试与发布门禁"]} /></CaseSection>
      <CaseSection index="02 / 11" title="用户工作流"><ProcessTrace steps={["上传数据并生成字段画像", "使用自然语言提出分析意图", "编译为受限分析计划", "执行确定性计算", "校验证据并生成 Artifact", "保存 Run 并支持恢复"]} /></CaseSection>
      <CaseSection index="03 / 11" title="为什么不让 Agent 自由决定"><p>自由规划容易选择错误字段、混合不可比较指标，并把语言生成误当作业务计算。析数把模型限制在高层意图，将计算、约束和证据校验留给程序。</p><DecisionComparison left={{ title: 'FREE AGENT RISK', items: ['工具选择不可预测', '字段语义可能误判', '结论难以回到当前 Run'] }} right={{ title: 'CONTROLLED SYSTEM', items: ['受限 Intent', '编译后的固定操作', 'Evidence Registry 逐条校验'] }} /></CaseSection>
      <CaseSection index="04 / 11" title="V1 → V2 架构演进" tone="elevated"><XishuArchitectureComparison /></CaseSection>
      <CaseSection index="05 / 11" title="可信分析 Trace"><ProcessTrace steps={[
        { label: 'Intent / constrained', detail: '仅识别受控分析意图，不自由扩展未知分析路径。' },
        { label: 'Compiler / schema checked', detail: '将意图编译为固定 Schema 操作和执行计划。' },
        { label: 'Compute / deterministic', detail: '由 pandas 完成统计、聚合和趋势计算。' },
        { label: 'Registry / run scoped', detail: '计算结果注册为当前 Run 内可引用 Evidence。' },
        { label: 'Validation / referenced', detail: '结论只能引用有效 Evidence，拒绝未知数字来源。' },
        { label: 'Artifact / delivered', detail: '结果转换为结构化 Text / Metric / Table / Chart。' },
      ]} /></CaseSection>
      <CaseSection index="06 / 11" title="Artifact 不是聊天气泡"><p>分析结果按用途形成四类结构化 Artifact；每个 Artifact 保留来源和当前 Run 关联。</p><ArtifactShowcase /></CaseSection>
      <CaseSection index="07 / 11" title="Run 生命周期与恢复"><RunRecoveryDiagram /><h3>合作式取消</h3><p>取消信号在安全边界生效；同步计算无法保证立即中断。无分布式队列和多节点执行。</p></CaseSection>
      <CaseSection index="08 / 11" title="界面与证据阅读"><p>以下界面使用公开的合成演示数据，由 DeepSeek 真实模型模式通过实际产品 UI 生成；用于证明数据画像、结构化 Artifact、Run 状态与可信拒答边界。页面展示的是受控工作流与确定性数据计算结果，不将单次模型输出扩大为通用模型能力声明。</p><ScreenshotGallery items={[{ path: '/images/xishu/dataset-profile.webp', alt: '析数合成演示数据的数据集画像', width: 1600, height: 980 }, { path: '/images/xishu/analysis-result.webp', alt: '析数课程类别分析结果', width: 1600, height: 560 }, { path: '/images/xishu/artifact-overview.webp', alt: '析数结构化表格与图表 Artifact', width: 1600, height: 1590 }, { path: '/images/xishu/run-details.webp', alt: '析数已完成运行的执行详情', width: 1600, height: 1000 }, { path: '/images/xishu/boundary-refusal.webp', alt: '析数教师维度数据条件不足说明', width: 1600, height: 900 }]} /></CaseSection>
      <CaseSection index="09 / 11" title="测试与发布证据" ariaLabel="析数验证状态"><VerificationRecord items={[{ label: 'Backend Tests', value: '183 / 183 PASS', status: 'pass' }, { label: 'Frontend Tests', value: '59 / 59 PASS', status: 'pass' }, { label: 'TypeScript', value: 'PASS', status: 'pass' }, { label: 'ESLint', value: 'PASS / 0 WARNING', status: 'pass' }, { label: 'Build', value: 'PASS', status: 'pass' }, { label: 'Release', value: 'v2.0.0', status: 'pass' }]} /></CaseSection>
      <CaseSection index="10 / 11" title="技术取舍与限制" ariaLabel="析数当前限制"><LimitationList current={["OpenAI Provider 未实现", "Redis 未实现；当前不声明分布式执行", "P95 未测量；不展示虚构延迟", "云部署与 Live Demo 未完成", "合作式取消不保证同步计算立即中断"]} planned={["更严格的数据域扩展", "部署方案需在真实环境验证后再声明"]} /></CaseSection>
      <CaseSection index="11 / 11" title="下一条证据轨迹"><CaseStudyNavigation href="/projects/knowledgeflow" label="KnowledgeFlow AI · 本地模块化 RAG" /></CaseSection>
    </main>
  )
}
