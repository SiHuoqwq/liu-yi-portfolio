import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { ReducedMotionContext } from './reducedMotionContext'

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  const [reduce, setReduce] = useState(() =>
    typeof window === 'undefined' || typeof window.matchMedia !== 'function'
      ? false
      : window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduce(media.matches)
    media.addEventListener?.('change', update)
    return () => media.removeEventListener?.('change', update)
  }, [])

  const value = useMemo(() => reduce, [reduce])
  return <ReducedMotionContext.Provider value={value}>{children}</ReducedMotionContext.Provider>
}
