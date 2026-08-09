import type { AnchorHTMLAttributes, ReactNode } from 'react'

type SecondaryButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  disabledReason?: string
}

export function SecondaryButton({ children, disabledReason, className = '', ...props }: SecondaryButtonProps) {
  if (disabledReason) {
    return (
      <span className={`button button--secondary ${className}`} aria-disabled="true" title={disabledReason}>
        {children}
      </span>
    )
  }

  return (
    <a className={`button button--secondary ${className}`} {...props}>
      {children}
    </a>
  )
}
