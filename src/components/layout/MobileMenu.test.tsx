import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'

it('closes on Escape and restores focus to the menu trigger', async () => {
  const user = userEvent.setup()
  render(
    <MemoryRouter>
      <SiteHeader />
    </MemoryRouter>,
  )

  const trigger = screen.getByRole('button', { name: /打开菜单/ })
  await user.click(trigger)
  expect(screen.getByRole('dialog', { name: '移动导航' })).toBeVisible()

  await user.keyboard('{Escape}')
  expect(screen.queryByRole('dialog', { name: '移动导航' })).not.toBeInTheDocument()
  expect(trigger).toHaveFocus()
})

it('exposes the public resume link in the mobile menu', async () => {
  const user = userEvent.setup()
  render(
    <MemoryRouter>
      <SiteHeader />
    </MemoryRouter>,
  )

  await user.click(screen.getByRole('button', { name: /打开菜单/ }))
  const dialog = screen.getByRole('dialog', { name: '移动导航' })

  expect(within(dialog).getByRole('link', { name: '下载简历' })).toHaveAttribute(
    'href',
    '/resume/liu-yi-ai-application-resume.pdf',
  )
})
