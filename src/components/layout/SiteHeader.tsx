import { Menu } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, resumeAssetPath, resumeAvailable, siteLinks } from '../../content/profile'
import { MobileMenu } from './MobileMenu'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    queueMicrotask(() => triggerRef.current?.focus())
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand-link" to="/" aria-label="刘燚 LIU YI / 作品集首页">
          刘燚 <span className="mono">LIU YI</span>
        </Link>
        <nav className="desktop-nav" aria-label="主要导航">
          {siteLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          {resumeAvailable ? <a href={resumeAssetPath}>下载简历</a> : <span aria-disabled="true" title="简历文件待补充">下载简历</span>}
        </nav>
        <button ref={triggerRef} className="menu-trigger" type="button" aria-label="MENU / 打开菜单" onClick={() => setMenuOpen(true)}>
          MENU <Menu size={18} strokeWidth={1.7} aria-hidden="true" />
        </button>
      </div>
      <MobileMenu open={menuOpen} onClose={closeMenu} triggerRef={triggerRef} />
    </header>
  )
}
