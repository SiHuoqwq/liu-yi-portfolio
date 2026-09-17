import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { FeaturedProjectStack } from '../projects/FeaturedProjectStack'
import { Trace } from '../trace/Trace'
import { ReducedMotionProvider } from '../ui/ReducedMotionProvider'

const expectedProjectTitles = [
  'AI 电商视觉内容生成工作台',
  '可信 AI 数据分析工作台',
  '本地模块化 RAG 知识库',
]

const expectedProjectIndexes = [
  '01 / AI VISUAL WORKFLOW',
  '02 / AI DATA ANALYSIS',
  '03 / RETRIEVAL SYSTEM',
]

function expectFeaturedProjectOrder() {
  const projects = screen.getAllByRole('article')
  expect(projects.map((project) => within(project).getByRole('heading', { level: 3 }).textContent)).toEqual(
    expectedProjectTitles,
  )
  expect(projects.map((project) => project.querySelector('.project-index')?.textContent)).toEqual(
    expectedProjectIndexes,
  )
}

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
  expectFeaturedProjectOrder()
  for (const item of screen.getAllByRole('listitem').filter((node) => node.classList.contains('trace-step'))) {
    expect(item).not.toHaveStyle({ opacity: 0 })
  }
})

it('keeps every project visible in the desktop motion stack', () => {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query.includes('min-width: 1024px'),
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))

  render(
    <ReducedMotionProvider>
      <MemoryRouter>
        <FeaturedProjectStack />
      </MemoryRouter>
    </ReducedMotionProvider>,
  )

  expect(screen.getByText('可信 AI 数据分析工作台')).toBeVisible()
  expect(screen.getByText('本地模块化 RAG 知识库')).toBeVisible()
  expect(screen.getByText('AI 电商视觉内容生成工作台')).toBeVisible()
  expectFeaturedProjectOrder()
})
