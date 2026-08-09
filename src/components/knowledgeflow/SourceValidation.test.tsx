import { render, screen } from '@testing-library/react'
import { SourceValidation } from './SourceValidation'

it('labels the source validation structure as a diagram example', () => {
  render(<SourceValidation />)
  expect(screen.getByText('示意')).toBeVisible()
  expect(screen.getByText('无合格 Context')).toBeVisible()
  expect(screen.getByText('固定拒答 / 不调用模型')).toBeVisible()
})
