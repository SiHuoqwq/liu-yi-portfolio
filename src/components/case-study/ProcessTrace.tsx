import { motion } from 'framer-motion'
import { useReducedMotionPreference } from '../ui/useReducedMotionPreference'

type ProcessStep = string | { label: string; detail: string }

export function ProcessTrace({ steps }: { steps: readonly ProcessStep[] }) {
  const reduced = useReducedMotionPreference()
  return <ol className="process-trace">{steps.map((step, index) => {
    const label = typeof step === 'string' ? step : step.label
    const detail = typeof step === 'string' ? undefined : step.detail
    return <motion.li key={label} initial={reduced ? false : { opacity: 0.7, y: 10 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.32, delay: Math.min(index * 0.04, 0.2) }}><span className="mono">{String(index + 1).padStart(2, '0')}</span><div><strong>{label}</strong>{detail ? <p>{detail}</p> : null}</div></motion.li>
  })}</ol>
}
