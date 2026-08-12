import { X } from 'lucide-react'
import { useEffect, useRef, type RefObject } from 'react'
import { profile, resumeAssetPath, resumeAvailable, siteLinks } from '../../content/profile'
import { PrimaryButton } from '../ui/PrimaryButton'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  triggerRef: RefObject<HTMLButtonElement | null>
}

export function MobileMenu({ open, onClose, triggerRef }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.dataset.menuOpen = 'true'
    const dialog = dialogRef.current
    const focusable = dialog?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    focusable?.[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        triggerRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      delete document.body.dataset.menuOpen
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, open, triggerRef])

  if (!open) return null

  return (
    <div ref={dialogRef} className="mobile-menu" role="dialog" aria-modal="true" aria-label="移动导航">
      <div className="mobile-menu__top">
        <span className="mono">LIU YI / INDEX</span>
        <button className="mobile-menu__close" type="button" onClick={onClose} aria-label="关闭菜单">
          <X aria-hidden="true" strokeWidth={1.7} />
        </button>
      </div>
      <nav aria-label="移动端">
        {siteLinks.map((link, index) => (
          <a key={link.href} href={link.href} onClick={onClose}>
            <span>{String(index + 1).padStart(2, '0')} {link.label}</span><span aria-hidden="true">↗</span>
          </a>
        ))}
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <PrimaryButton href={resumeAssetPath} disabledReason={resumeAvailable ? undefined : '简历文件待补充'}>
          下载简历
        </PrimaryButton>
      </nav>
    </div>
  )
}
