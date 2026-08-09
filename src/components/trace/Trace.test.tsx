import { render, screen } from '@testing-library/react'
import { ReducedMotionProvider } from '../ui/ReducedMotionProvider'
import { Trace } from './Trace'

it('renders every evidence step and final status without relying on animation', () => {
  window.matchMedia = vi.fn().mockReturnValue({
    matches: true,
    media: '(prefers-reduced-motion: reduce)',
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })

  render(<ReducedMotionProvider><Trace /></ReducedMotionProvider>)
  for (const label of ['INTENT', 'PLAN', 'COMPUTE', 'EVIDENCE', 'ARTIFACT']) {
    expect(screen.getByText(label)).toBeVisible()
  }
  expect(screen.getByText('TRACE COMPLETE')).toBeVisible()
})
