import { ArrowDown, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectScreenshot } from '../projects/ProjectScreenshot'
import { StatusLabel } from '../ui/StatusLabel'

const technologyKeywords = [
  'React + TypeScript',
  'FastAPI',
  'Controlled AI Workflow',
  'CUI / Qwen Image Edit',
]

export function ProductStudioHero() {
  return (
    <section className="productstudio-hero" data-testid="case-section" aria-label="ProductStudio Hero">
      <div className="container productstudio-hero__intro">
        <Link className="case-hero__back" to="/">
          <ArrowLeft size={16} aria-hidden="true" />
          返回首页
        </Link>

        <div className="productstudio-hero__top">
          <p className="mono">CASE STUDY / PRODUCTSTUDIO</p>
          <StatusLabel tone="warning">JOB DEMO / v0.2.0</StatusLabel>
        </div>

        <div className="productstudio-hero__copy">
          <div className="productstudio-hero__identity">
            <p className="mono productstudio-hero__index">01 / 09</p>
            <h1>ProductStudio</h1>
            <p className="productstudio-hero__position">AI 电商视觉内容生成工作台</p>
          </div>

          <div className="productstudio-hero__brief">
            <p className="productstudio-hero__value">
              将商品事实约束、受控创意规划、生成执行和质量验证串联起来的电商视觉工作流。
            </p>
            <ul className="productstudio-hero__keywords" aria-label="ProductStudio 核心技术">
              {technologyKeywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
            </ul>
            <div className="productstudio-hero__actions">
              <a className="button button--secondary" href="#productstudio-workbench">
                查看工作台
                <ArrowDown size={16} aria-hidden="true" />
              </a>
              <p className="mono productstudio-hero__boundary">
                LOCAL JOB DEMO / NOT A SCALED PRODUCTION SYSTEM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="productstudio-workbench"
        className="container productstudio-hero__workbench"
        role="group"
        aria-label="ProductStudio 工作台截图"
      >
        <ProjectScreenshot
          path="/images/productstudio/05_neutral_workspace.png"
          alt="ProductStudio 工作台全貌"
          priority
        />
      </div>
    </section>
  )
}
