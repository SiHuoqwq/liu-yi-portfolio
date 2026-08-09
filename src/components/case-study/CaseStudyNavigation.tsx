import { Link } from 'react-router-dom'

export function CaseStudyNavigation({ href, label }: { href: string; label: string }) {
  return <Link className="case-next" to={href}><span className="mono">NEXT TRACE</span><strong>{label}</strong><span aria-hidden="true">↗</span></Link>
}
