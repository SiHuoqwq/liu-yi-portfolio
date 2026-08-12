import { render, screen, waitFor } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProjectScreenshot } from './ProjectScreenshot'

it('opens a real project image in a modal and restores focus after Escape', async () => {
  const user = userEvent.setup()
  const { container } = render(<ProjectScreenshot path="/images/xishu/hero-workbench.webp" alt="析数工作台" />)

  const trigger = screen.getByRole('button', { name: '放大查看：析数工作台' })
  await user.click(trigger)

  expect(screen.getByRole('dialog', { name: '图片预览：析数工作台' })).toBeVisible()
  expect(screen.getByRole('button', { name: '关闭图片预览' })).toHaveFocus()
  expect(document.body).toHaveAttribute('data-image-viewer-open', 'true')
  expect(container).toHaveAttribute('inert')

  await user.tab()
  expect(screen.getByRole('button', { name: '关闭图片预览' })).toHaveFocus()

  await user.keyboard('{Escape}')

  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
  expect(document.body).not.toHaveAttribute('data-image-viewer-open')
  expect(container).not.toHaveAttribute('inert')
  expect(trigger).toHaveFocus()
})

it('keeps a missing asset as a non-interactive placeholder', () => {
  render(<ProjectScreenshot path="/images/demo/missing.webp" alt="缺失图片" />)

  expect(screen.queryByRole('button', { name: /放大查看/ })).not.toBeInTheDocument()
  expect(screen.getByText('/images/demo/missing.webp')).toBeVisible()
})

it('keeps the background locked until the last concurrent preview closes', async () => {
  render(
    <>
      <ProjectScreenshot path="/images/xishu/hero-workbench.webp" alt="析数工作台" />
      <ProjectScreenshot path="/images/knowledgeflow/hero-workbench.webp" alt="KnowledgeFlow 工作台" />
    </>,
  )

  fireEvent.click(screen.getByRole('button', { name: '放大查看：析数工作台' }))
  fireEvent.click(screen.getByRole('button', { name: '放大查看：KnowledgeFlow 工作台' }))
  expect(screen.getAllByRole('dialog')).toHaveLength(1)
  expect(screen.getAllByRole('dialog', { hidden: true })).toHaveLength(2)
  expect(screen.getByRole('dialog', { name: '图片预览：KnowledgeFlow 工作台' })).toBeVisible()

  fireEvent.keyDown(window, { key: 'Escape' })

  await waitFor(() => expect(screen.getAllByRole('dialog')).toHaveLength(1))
  expect(screen.getByRole('dialog', { name: '图片预览：析数工作台' })).toBeVisible()
  await waitFor(() => expect(screen.getByRole('button', { name: '关闭图片预览' })).toHaveFocus())
  expect(document.body).toHaveAttribute('data-image-viewer-open', 'true')

  fireEvent.keyDown(window, { key: 'Escape' })

  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
  expect(document.body).not.toHaveAttribute('data-image-viewer-open')
})
