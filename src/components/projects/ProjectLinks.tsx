import { Link } from 'react-router-dom'
import type { ProjectRecord } from '../../content/projects'
import { TextLink } from '../ui/TextLink'

export function ProjectLinks({ project }: { project: ProjectRecord }) {
  return (
    <div className="project-links">
      <Link className="button button--primary" to={project.route}>查看{project.name} Case Study</Link>
      <TextLink href={project.github}>GitHub</TextLink>
    </div>
  )
}
