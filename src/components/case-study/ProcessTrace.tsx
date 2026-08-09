import { motion } from 'framer-motion'
import { useReducedMotionPreference } from '../ui/useReducedMotionPreference'

export function ProcessTrace({ steps }: { steps: readonly string[] }) {
  const reduced = useReducedMotionPreference()
  return <ol className="process-trace">{steps.map((step, index) => <motion.li key={step} initial={reduced ? false : { opacity: 0.7, y: 10 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.32, delay: Math.min(index * 0.04, 0.2) }}><span className="mono">{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></motion.li>)}</ol>
}
