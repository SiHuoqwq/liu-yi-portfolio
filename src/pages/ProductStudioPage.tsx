import { CaseSection } from '../components/case-study/CaseSection'
import { CaseStudyNavigation } from '../components/case-study/CaseStudyNavigation'
import { DecisionComparison } from '../components/case-study/DecisionComparison'
import { LimitationList } from '../components/case-study/LimitationList'
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
        <p>系统把事实、受控决策、执行、质量门禁与恢复拆成独立职责；每一层只向下一层交付明确状态。</p>
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

      <CaseSection index="07 / 09" title="技术实现" ariaLabel="ProductStudio 已实现技术">
        <TechnicalRecord items={[
          ['FRONTEND', 'React + TypeScript'],
          ['BACKEND', 'Python + FastAPI'],
          ['AI WORKFLOW', 'Controlled AI Workflow'],
          ['CREATIVE', 'Deterministic Creative Director Provider · Explicit Adoption · Generation Strategy'],
          ['GENERATION', 'CUI / ComfyUI · Qwen Image Edit'],
          ['QUALITY', 'BiRefNet Fidelity Fallback · Fidelity QA · Manual Confirmation'],
          ['STATE', 'Product Context Isolation · Job-bound Result · History / Recovery'],
        ]} />
      </CaseSection>

      <CaseSection index="08 / 09" title="Current Limitations" ariaLabel="ProductStudio 当前限制">
        <LimitationList current={[
          'Creative Director 当前使用确定性 provider，并非 LLM/VLM Agent。',
          'Multi-reference production flow 未实现。',
          'Human + Product production flow 未实现。',
          'Multi-view consistency 未实现。',
          '运行依赖已配置的本地 CUI 与模型资产，安装和部署尚未产品化。',
          '尚未建设分布式任务队列、权限、监控与团队协作能力。',
        ]} />
      </CaseSection>

      <CaseSection index="09 / 09" title="Roadmap" ariaLabel="ProductStudio Roadmap">
        <p className="mono">PLANNED / NOT IMPLEMENTED</p>
        <TechnicalRecord items={[
          ['PLANNED 01', 'LLM/VLM Creative Director'],
          ['PLANNED 02', 'Controlled Agent Workflow'],
          ['PLANNED 03', 'Multi-reference'],
          ['PLANNED 04', 'Human + Product'],
          ['PLANNED 05', 'Multi-view'],
          ['PLANNED 06', 'FLUX Profile'],
          ['PLANNED 07', 'Advanced model management'],
        ]} />
        <CaseStudyNavigation href="/" label="返回首页 / Selected Work" />
      </CaseSection>
    </main>
  )
}
