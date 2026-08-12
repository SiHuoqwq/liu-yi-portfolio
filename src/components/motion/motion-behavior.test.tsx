import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { FeaturedProjectStack } from '../projects/FeaturedProjectStack'
import { Trace } from '../trace/Trace'
import { ReducedMotionProvider } from '../ui/ReducedMotionProvider'

it('uses fully visible static trace and project flow when reduced motion is requested', () => {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query.includes('prefers-reduced-motion: reduce'),
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))

  render(
    <ReducedMotionProvider>
      <MemoryRouter>
        <Trace />
        <FeaturedProjectStack />
      </MemoryRouter>
    </ReducedMotionProvider>,
  )

  expect(screen.getByText('轨迹完成').closest('[data-motion]')).toHaveAttribute('data-motion', 'reduced')
  expect(screen.getByText('可信 AI 数据分析工作台').closest('[data-stack-mode]')).toHaveAttribute('data-stack-mode', 'static')
  for (const item of screen.getAllByRole('listitem').filter((node) => node.classList.contains('trace-step'))) {
    expect(item).not.toHaveStyle({ opacity: 0 })
  }
})
