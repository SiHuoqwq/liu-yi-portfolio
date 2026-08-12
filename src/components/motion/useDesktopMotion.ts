import { useEffect, useState } from 'react'
import { useReducedMotionPreference } from '../ui/useReducedMotionPreference'

const desktopMotionQuery = '(min-width: 1024px) and (min-height: 1050px) and (prefers-reduced-motion: no-preference)'

export function useDesktopMotion() {
  const reduced = useReducedMotionPreference()
  const [matches, setMatches] = useState(() =>
    !reduced && typeof window.matchMedia === 'function' && window.matchMedia(desktopMotionQuery).matches,
  )

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const media = window.matchMedia(desktopMotionQuery)
    const update = () => setMatches(media.matches)
    media.addEventListener?.('change', update)
    return () => media.removeEventListener?.('change', update)
  }, [])

  return matches && !reduced
}
