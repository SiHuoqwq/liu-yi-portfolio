import { render, screen } from '@testing-library/react'
import { XishuArchitectureComparison } from './XishuArchitectureComparison'

it('shows the constrained V2 responsibility boundary as an example', () => {
  render(<XishuArchitectureComparison />)
  expect(screen.getByText('示意')).toBeVisible()
  expect(screen.getByText(/14 个工具/)).toBeVisible()
  expect(screen.getByText(/5 个严格 Schema 操作/)).toBeVisible()
})
