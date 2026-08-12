import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotionPreference } from './useReducedMotionPreference'

export function MotionReveal({ children }: { children: ReactNode }) {
  const reduce = useReducedMotionPreference()
  return (
    <motion.div
      data-motion={reduce ? 'reduced' : 'reveal'}
      initial={reduce ? false : { opacity: 0.7, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.32 }}
    >
      {children}
    </motion.div>
  )
}
