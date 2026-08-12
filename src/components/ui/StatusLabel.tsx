import type { ReactNode } from 'react'

type StatusLabelProps = {
  children: ReactNode
  tone: 'verified' | 'warning' | 'error' | 'active'
}

export function StatusLabel({ children, tone }: StatusLabelProps) {
  return <span className={`status-label status-label--${tone}`}>{children}</span>
}
