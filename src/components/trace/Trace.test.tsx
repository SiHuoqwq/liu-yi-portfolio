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
  expect(screen.getByText('轨迹 / 0001')).toBeVisible()
  expect(screen.getByText('证据路径')).toBeVisible()
  for (const label of ['意图', '计划', '计算', '证据', '产物']) {
    expect(screen.getByText(label)).toBeVisible()
  }
  for (const status of ['已约束', '已编译', '确定性', '已验证', '已交付']) {
    expect(screen.getByText(status)).toBeVisible()
  }
  expect(screen.getByText('轨迹完成')).toBeVisible()
})
