import type { ProjectRecord } from '../../content/projects'
import { StatusLabel } from '../ui/StatusLabel'
import { ProjectIndex } from './ProjectIndex'
import { ProjectLinks } from './ProjectLinks'
import { ProjectMetrics } from './ProjectMetrics'
import { ProjectScreenshot } from './ProjectScreenshot'

export function FeaturedProjectPanel({ project }: { project: ProjectRecord }) {
  return (
    <article className={`featured-project featured-project--${project.id}`}>
      <div className="featured-project__meta">
        <ProjectIndex index={project.index} category={project.category} />
        <StatusLabel tone={project.statusTone}>{project.status} / {project.version}</StatusLabel>
      </div>
      {project.flow ? <div className="project-flow mono">{project.flow.map((step) => <span key={step}>{step}</span>)}</div> : null}
      <div className="featured-project__body">
        <div className="featured-project__visual"><ProjectScreenshot path={project.imagePath} alt={`${project.name} 工作台首页`} priority={project.id === 'xishu'} /></div>
        <div className="featured-project__content">
          <div><p className="project-name mono">{project.name}</p><h3>{project.title}</h3><p>{project.summary}</p></div>
          <dl className="project-brief">
            <div><dt>CORE PROBLEM</dt><dd>{project.problem}</dd></div>
            <div><dt>CONTROL STRATEGY</dt><dd>{project.solution}</dd></div>
          </dl>
          <ul className="project-capabilities">{project.capabilities.map((capability) => <li key={capability.label}><strong className="mono">{capability.label}</strong><span>{capability.detail}</span></li>)}</ul>
          <ProjectMetrics metrics={project.metrics} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  )
}
