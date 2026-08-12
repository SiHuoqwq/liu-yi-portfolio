import { render, screen } from '@testing-library/react'
import { MotionReveal } from './MotionReveal'
import { ReducedMotionProvider } from './ReducedMotionProvider'

it('keeps reveal content fully visible when reduced motion is requested', () => {
  window.matchMedia = vi.fn().mockReturnValue({
    matches: true,
    media: '(prefers-reduced-motion: reduce)',
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })

  render(
    <ReducedMotionProvider>
      <MotionReveal>完整证据内容</MotionReveal>
    </ReducedMotionProvider>,
  )

  expect(screen.getByText('完整证据内容')).toBeVisible()
  expect(screen.getByText('完整证据内容')).toHaveAttribute('data-motion', 'reduced')
})
