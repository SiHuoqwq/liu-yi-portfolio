import { projects } from '../../content/projects'
import { FeaturedProjectPanel } from './FeaturedProjectPanel'

export function FeaturedProjectStack() {
  return <div className="project-stack">{projects.map((project) => <FeaturedProjectPanel key={project.id} project={project} />)}</div>
}
