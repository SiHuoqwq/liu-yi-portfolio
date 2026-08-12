import { ExternalLink } from 'lucide-react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }

export function TextLink({ children, href = '', ...props }: TextLinkProps) {
  const isExternal = /^https?:\/\//.test(href)
  return (
    <a
      className="text-link"
      href={href}
      target={isExternal ? '_blank' : props.target}
      rel={isExternal ? 'noreferrer' : props.rel}
      {...props}
    >
      {children}
      {isExternal ? <ExternalLink size={14} strokeWidth={1.7} aria-hidden="true" /> : null}
    </a>
  )
}
