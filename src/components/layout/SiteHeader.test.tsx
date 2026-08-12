import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'

it('renders the approved navigation and an unavailable resume action', () => {
  render(
    <MemoryRouter>
      <SiteHeader />
    </MemoryRouter>,
  )

  expect(screen.getByRole('link', { name: '刘燚 LIU YI / 作品集首页' })).toHaveAttribute('href', '/')
  expect(screen.getByRole('button', { name: 'MENU / 打开菜单' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: '项目' })).toHaveAttribute('href', '/#projects')
  expect(screen.getByRole('link', { name: '工程方法' })).toHaveAttribute('href', '/#principles')
  expect(screen.queryByRole('link', { name: '下载简历' })).not.toBeInTheDocument()
})
