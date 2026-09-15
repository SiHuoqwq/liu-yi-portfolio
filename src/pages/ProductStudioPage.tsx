import { CaseSection } from '../components/case-study/CaseSection'
import { CaseStudyHero } from '../components/case-study/CaseStudyHero'
import { CaseStudyNavigation } from '../components/case-study/CaseStudyNavigation'
import { ProjectContext } from '../components/case-study/ProjectContext'
import { ProjectScreenshot } from '../components/projects/ProjectScreenshot'

export function ProductStudioPage() {
  return (
    <main id="main-content" className="case-page">
      <CaseStudyHero
        project="PRODUCTSTUDIO"
        title="ProductStudio｜AI 电商视觉内容生成工作台"
        statement={<>让商品事实先于创意，<br />让采用、生成与 QA 保持可追溯。</>}
        summary="围绕商品事实、用户审批和可恢复任务构建的本地求职展示项目；本阶段先呈现项目定位与真实工作台总览。"
        status="JOB DEMO / v0.2.0"
        tone="warning"
        facts={[
          ['SCOPE', 'Local Job Demo'],
          ['FLOW', 'Truth · Adoption · Generation · QA · Recovery'],
          ['BOUNDARY', 'Not an online or scaled production system'],
        ]}
      />
      <CaseSection index="01 / 03" title="项目背景" ariaLabel="ProductStudio 项目背景">
        <p>直接从 Prompt 进入模型，会让商品事实、创意表达与执行参数混在一起。ProductStudio 将这些职责拆开，并要求用户明确采用创意方案后再进入生成。</p>
        <ProjectContext items={[
          ['VERSION', 'v0.2.0-job-demo'],
          ['PURPOSE', '本地求职展示版'],
          ['CORE', 'Product Truth · Explicit Adoption · Product Isolation'],
          ['CASE STUDY DETAILS', '完整案例展示将在后续章节展开'],
        ]} />
      </CaseSection>
      <CaseSection index="02 / 03" title="工作台总览">
        <p>ARIOSE 案例将商品入口、商品事实、创意决策和任务历史组织在同一工作台中。</p>
        <ProjectScreenshot path="/images/productstudio/01_workbench_overview.png" alt="ProductStudio 工作台全貌" />
      </CaseSection>
      <CaseSection index="03 / 03" title="返回作品集">
        <CaseStudyNavigation href="/" label="返回首页 / Selected Work" />
      </CaseSection>
    </main>
  )
}
