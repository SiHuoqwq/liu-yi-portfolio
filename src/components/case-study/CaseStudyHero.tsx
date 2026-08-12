import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { StatusLabel } from '../ui/StatusLabel'

type CaseStudyHeroProps = {
  project: string
  title: string
  statement: ReactNode
  summary: string
  status: string
  tone: 'verified' | 'warning'
  facts: readonly [string, string][]
}

export function CaseStudyHero({ project, title, statement, summary, status, tone, facts }: CaseStudyHeroProps) {
  return (
    <section className="case-hero" data-testid="case-section" aria-labelledby="case-title">
      <div className="container">
        <Link className="case-hero__back" to="/"><ArrowLeft size={16} aria-hidden="true" />返回首页</Link>
        <div className="case-hero__top"><p className="mono">CASE STUDY / {project}</p><StatusLabel tone={tone}>{status}</StatusLabel></div>
        <h1 id="case-title">{title}</h1>
        <p className="case-hero__statement">{statement}</p>
        <p className="case-hero__summary">{summary}</p>
        <dl className="case-facts">{facts.map(([label, value]) => <div key={label}><dt className="mono">{label}</dt><dd>{value}</dd></div>)}</dl>
      </div>
    </section>
  )
}
