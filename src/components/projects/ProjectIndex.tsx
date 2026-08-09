export function ProjectIndex({ index, category }: { index: string; category: string }) {
  return <p className="project-index mono">{index} / {category}</p>
}
