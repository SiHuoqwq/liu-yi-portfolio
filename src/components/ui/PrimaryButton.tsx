import type { AnchorHTMLAttributes, ReactNode } from 'react'

type PrimaryButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  disabledReason?: string
}

export function PrimaryButton({ children, disabledReason, className = '', ...props }: PrimaryButtonProps) {
  if (disabledReason) {
    return (
      <span className={`button button--primary ${className}`} aria-disabled="true" title={disabledReason}>
        {children}
      </span>
    )
  }

  return (
    <a className={`button button--primary ${className}`} {...props}>
      {children}
    </a>
  )
}
