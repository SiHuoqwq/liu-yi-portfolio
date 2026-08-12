import { render, screen } from '@testing-library/react'
import { XishuArchitectureComparison } from './XishuArchitectureComparison'

it('shows the constrained V2 responsibility boundary as an example', () => {
  render(<XishuArchitectureComparison />)
  expect(screen.getByText('示意')).toBeVisible()
  expect(screen.getByText(/14 个分析与可视化工具/)).toBeVisible()
  expect(screen.getByText(/5 个严格 Schema 操作/)).toBeVisible()
  expect(screen.getByText('自由规划分析步骤')).toBeVisible()
  expect(screen.getByText('最终回答可能脱离工具证据')).toBeVisible()
  expect(screen.getByText('pandas 确定性计算')).toBeVisible()
  expect(screen.getByText('计算与证据可验证')).toBeVisible()
})
