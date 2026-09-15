import { screen, within } from '@testing-library/react'
import { renderApp } from '../test/render'

it('opens the ProductStudio Phase 1 case-study skeleton with its real overview image', async () => {
  renderApp(['/projects/productstudio'])

  expect(await screen.findByRole('heading', { level: 1, name: /ProductStudio/ })).toBeVisible()
  expect(screen.getByRole('link', { name: '返回首页' })).toHaveAttribute('href', '/')
  expect(screen.getByRole('img', { name: 'ProductStudio 工作台全貌' })).toHaveAttribute(
    'src',
    '/images/productstudio/01_workbench_overview.png',
  )

  const context = screen.getByRole('region', { name: 'ProductStudio 项目背景' })
  expect(within(context).getByText('v0.2.0-job-demo')).toBeVisible()
  expect(within(context).getByText(/本地求职展示版/)).toBeVisible()
})
