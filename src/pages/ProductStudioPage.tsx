import { CaseSection } from '../components/case-study/CaseSection'
import { CaseStudyNavigation } from '../components/case-study/CaseStudyNavigation'
import { DecisionComparison } from '../components/case-study/DecisionComparison'
import { TechnicalRecord } from '../components/case-study/TechnicalRecord'
import { AdoptionStateBoundary } from '../components/productstudio/AdoptionStateBoundary'
import { GenerationEvidenceBinding } from '../components/productstudio/GenerationEvidenceBinding'
import { ProductIsolationRecord } from '../components/productstudio/ProductIsolationRecord'
import { ProductStudioArchitectureDiagram } from '../components/productstudio/ProductStudioArchitectureDiagram'
import { ProductStudioHero } from '../components/productstudio/ProductStudioHero'
import { ProjectScreenshot } from '../components/projects/ProjectScreenshot'

export function ProductStudioPage() {
  return (
    <main id="main-content" className="case-page">
      <ProductStudioHero />

      <CaseSection index="02 / 09" title="背景与问题" ariaLabel="ProductStudio 背景与问题">
        <p>传统 Prompt → Image 流程把商品事实、创意表达和模型参数混在一起，难以解释谁批准了什么方案，也难以在失败或刷新后恢复任务语义。</p>
        <DecisionComparison
          left={{ title: 'PROMPT → IMAGE', items: ['商品事实容易被创意覆盖', '选择、采用与生成状态混合', '结果与任务、QA 和历史脱节'] }}
          right={{ title: 'CONTROLLED PRODUCT WORKFLOW', items: ['Product Truth 约束候选', 'Explicit Adoption 保留用户控制', 'Job、QA 与 History / Recovery 绑定'] }}
        />
      </CaseSection>

      <CaseSection index="03 / 09" title="核心架构" ariaLabel="ProductStudio 核心架构" tone="elevated">
        <p>主流程从 Product Truth 进入受控规划、生成执行与质量确认；History / Recovery 负责保存并恢复关键工作状态。</p>
        <ProductStudioArchitectureDiagram />
      </CaseSection>

      <CaseSection index="04 / 09" title="Creative Director 与显式采用" ariaLabel="ProductStudio Creative Director">
        <p>当前 Creative Director 使用 Deterministic Creative Director Provider，在 Product Truth 边界内提出结构化候选；它不使用 LLM/VLM 进行候选规划，也不具备自主决策能力。用户选择并明确采用后，方案才进入生成。</p>
        <AdoptionStateBoundary />
        <ProjectScreenshot path="/images/productstudio/02_creative_flow.png" alt="ProductStudio 创意候选、选择与采用流程" />
      </CaseSection>

      <CaseSection index="05 / 09" title="Generation + QA" ariaLabel="ProductStudio Generation 与 QA">
        <p>CUI（ComfyUI）执行 Qwen Image Edit；BiRefNet 提供商品保真与回退路径。生成完成只代表任务产生了结果，仍需人工确认商品一致性。</p>
        <GenerationEvidenceBinding />
        <ProjectScreenshot path="/images/productstudio/03_generation_result_qa.png" alt="ProductStudio 真实生成结果与质量确认" />
      </CaseSection>

      <CaseSection index="06 / 09" title="Product Context Isolation" ariaLabel="ProductStudio 商品上下文隔离">
        <p>商品、输出类型和上下文共同确定草稿、采用状态与历史归属；当前验证范围是 ARIOSE 与 gaming headset 的切换和恢复。</p>
        <ProductIsolationRecord />
        <ProjectScreenshot path="/images/productstudio/04_product_context_isolation.png" alt="ProductStudio 商品上下文隔离与恢复" />
      </CaseSection>

      <div className="productstudio-tail productstudio-tail__section--technical">
        <CaseSection index="07 / 09" title="技术实现" ariaLabel="ProductStudio 已实现技术">
          <p>工程重点不是堆叠模型，而是让采用策略、生成任务、质量确认与恢复状态保持可追踪。</p>
          <TechnicalRecord items={[
            ['CLIENT / API', 'React + TypeScript Workbench · FastAPI Backend'],
            ['CONTROLLED WORKFLOW', 'Deterministic Creative Director Provider · Explicit Adoption'],
            ['JOB EXECUTION', 'Generation Strategy → Generation Job → CUI / Qwen Image Edit'],
            ['FIDELITY GATE', 'BiRefNet Fidelity Fallback · Fidelity QA · Manual Confirmation'],
            ['STATE RECOVERY', 'Product Context · Job-bound Result · History / Recovery'],
          ]} />
        </CaseSection>
      </div>

      <div className="productstudio-tail productstudio-tail__section--boundaries">
        <CaseSection index="08 / 09" title="Current Boundaries" ariaLabel="ProductStudio 当前边界">
          <p className="mono">CURRENT SCOPE</p>
          <TechnicalRecord items={[
            ['PLANNING BOUNDARY', 'Creative planning 当前由 Deterministic Creative Director Provider 驱动；当前不包含 LLM/VLM Creative Director 或自主 Agent 决策。'],
            ['REFERENCE BOUNDARY', '每个生成任务绑定一个隔离的当前商品上下文；Multi-reference composition、Human + Product composition 与 Multi-view consistency 尚未实现。'],
            ['DELIVERY BOUNDARY', '当前依赖已配置的本地 CUI 与模型资产；automated installation、distributed queue、permission system 与 production monitoring 尚未产品化。'],
          ]} />
        </CaseSection>
      </div>

      <div className="productstudio-tail productstudio-tail__section--roadmap">
        <CaseSection index="09 / 09" title="Roadmap" ariaLabel="ProductStudio Roadmap">
          <p className="mono">PLANNED / NOT IMPLEMENTED</p>
          <TechnicalRecord items={[
            ['PLANNED 01 · CONTROLLED PLANNING', 'LLM/VLM Creative Director · Controlled Agent Workflow'],
            ['PLANNED 02 · REFERENCE COMPOSITION', 'Multi-reference · Human + Product'],
            ['PLANNED 03 · CONSISTENCY', 'Multi-view'],
            ['PLANNED 04 · MODEL PROFILE', 'FLUX Profile'],
          ]} />
          <CaseStudyNavigation href="/" label="返回首页 / Selected Work" />
        </CaseSection>
      </div>
    </main>
  )
}
