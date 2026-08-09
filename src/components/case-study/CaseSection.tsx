import type { ReactNode } from 'react'

export function CaseSection({ index, title, children, ariaLabel, tone = 'default' }: { index: string; title: string; children: ReactNode; ariaLabel?: string; tone?: 'default' | 'rag' | 'elevated' }) {
  const headingId = `case-section-${index}`
  return (
    <section className={`case-section case-section--${tone}`} data-testid="case-section" aria-labelledby={ariaLabel ? undefined : headingId} aria-label={ariaLabel}>
      <div className="container case-section__grid">
        <header><p className="mono case-section__index">{index}</p><h2 id={headingId}>{title}</h2></header>
        <div className="case-section__body">{children}</div>
      </div>
    </section>
  )
}
