import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ScreenshotGallery } from './ScreenshotGallery'

const items = [
  { path: '/images/demo/a.webp', alt: '第一张截图', width: 1440, height: 900 },
  { path: '/images/demo/b.webp', alt: '第二张截图', width: 1440, height: 900 },
  { path: '/images/demo/c.webp', alt: '第三张截图', width: 1440, height: 900 },
] as const

it('supports arrow, Home and End navigation while keeping every panel in reading order', async () => {
  const user = userEvent.setup()
  render(<ScreenshotGallery items={items} />)
  const tabs = screen.getAllByRole('tab')
  tabs[0].focus()
  await user.keyboard('{ArrowRight}')
  expect(tabs[1]).toHaveFocus()
  await user.keyboard('{End}')
  expect(tabs[2]).toHaveFocus()
  await user.keyboard('{Home}')
  expect(tabs[0]).toHaveFocus()
  expect(screen.getAllByRole('tabpanel')).toHaveLength(3)
  expect(screen.getByText('/images/demo/a.webp')).toBeVisible()
})
