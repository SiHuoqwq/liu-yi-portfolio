import { heroTraceSteps } from '../../content/projects'
import { useReducedMotionPreference } from '../ui/useReducedMotionPreference'
import { TraceProgress } from './TraceProgress'
import { TraceStatus } from './TraceStatus'
import { TraceStep } from './TraceStep'

export function Trace() {
  const reduced = useReducedMotionPreference()
  return (
    <div className="trace" data-motion={reduced ? 'reduced' : 'sequence'}>
      <div className="trace__header"><span className="mono">TRACE / 0001</span><span className="mono">EVIDENCE PATH</span></div>
      <TraceProgress />
      <ol>
        {heroTraceSteps.map((step, index) => <TraceStep key={step.label} step={step} index={index} reduced={reduced} />)}
      </ol>
      <TraceStatus />
    </div>
  )
}
