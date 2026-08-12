import { motion } from 'framer-motion'
import type { TraceStepRecord } from '../../content/projects'

export function TraceStep({ step, index, reduced }: { step: TraceStepRecord; index: number; reduced: boolean }) {
  return (
    <motion.li
      className="trace-step"
      initial={reduced ? false : { opacity: 0.42, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: reduced ? 0 : 0.42 + index * 0.18, duration: 0.32 }}
    >
      <span className="trace-step__node" aria-hidden="true" />
      <span className="trace-step__index mono">{step.index}</span>
      <span className="trace-step__label mono">{step.label}</span>
      <span className="trace-step__status mono">{step.status}</span>
    </motion.li>
  )
}
