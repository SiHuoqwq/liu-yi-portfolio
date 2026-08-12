import { render, screen } from '@testing-library/react'
import { AssetPlaceholder } from './AssetPlaceholder'

it('names the exact missing file and exposes a development placeholder description', () => {
  render(<AssetPlaceholder path="/images/xishu/chart-result.webp" />)
  expect(screen.getByText('/images/xishu/chart-result.webp')).toBeVisible()
  expect(screen.getByText('真实项目截图待补充')).toBeVisible()
})
