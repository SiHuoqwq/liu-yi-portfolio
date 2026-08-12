import { render, screen } from '@testing-library/react'
import { SourceValidation } from './SourceValidation'

it('labels the source validation structure as a diagram example', () => {
  render(<SourceValidation />)
  expect(screen.getByText('示意')).toBeVisible()
  expect(screen.getByText('无合格 Context')).toBeVisible()
  expect(screen.getByText('固定拒答 / 不调用模型')).toBeVisible()
  expect(screen.getByText('NO VALID CONTEXT')).toBeVisible()
  expect(screen.getByText('LLM not called')).toBeVisible()
  expect(screen.getByText('VALID CONTEXT')).toBeVisible()
  expect(screen.getByText('Remove invalid citations')).toBeVisible()
  expect(screen.getByText('Show only sources used in Prompt')).toBeVisible()
})
