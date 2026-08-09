import { screen, within } from '@testing-library/react'
import { renderApp } from '../test/render'

it('presents the approved home narrative and truthful project evidence in order', async () => {
  renderApp(['/'])

  expect(await screen.findByRole('heading', { level: 1, name: /构建可验证、可恢复/ })).toBeVisible()
  const main = screen.getByRole('main')
  const sections = within(main).getAllByRole('region').map((section) => section.id)
  expect(sections).toEqual(['hero', 'projects', 'principles', 'capabilities', 'about'])

  expect(screen.getByText('模型处理不确定性，程序保证确定性。')).toBeVisible()
  expect(screen.getByRole('link', { name: /查看析数 Case Study/ })).toHaveAttribute('href', '/projects/xishu')
  expect(screen.getByRole('link', { name: /查看.*KnowledgeFlow AI.*Case Study/ })).toHaveAttribute('href', '/projects/knowledgeflow')
  expect(screen.getByText('183 / 183 Backend Tests')).toBeVisible()
  expect(screen.getByText('59 / 59 Frontend Tests')).toBeVisible()
  expect(screen.getByText(/v0.2.0 Candidate/)).toBeVisible()
  expect(screen.getByText('REAL DEEPSEEK FULL-STACK / NOT VERIFIED')).toBeVisible()
  expect(screen.getAllByText(/hero-workbench.webp/)).toHaveLength(2)
})
