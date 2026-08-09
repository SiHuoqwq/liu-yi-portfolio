import { render, screen } from '@testing-library/react'
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
