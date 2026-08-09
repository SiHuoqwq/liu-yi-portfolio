import { screen } from '@testing-library/react'
import { renderApp } from '../test/render'

it('offers a clear route home for an unknown path', async () => {
  renderApp(['/missing'])
  expect(await screen.findByRole('heading', { level: 1, name: '页面未找到' })).toBeVisible()
  expect(screen.getByRole('link', { name: '返回首页' })).toHaveAttribute('href', '/')
})
