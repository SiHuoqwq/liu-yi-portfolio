import { render, screen } from '@testing-library/react'
import { PrimaryButton } from './PrimaryButton'
import { StatusLabel } from './StatusLabel'
import { TextLink } from './TextLink'

describe('UI link semantics', () => {
  it('does not expose a broken href when an asset is unavailable', () => {
    render(
      <PrimaryButton href="/resume/missing.pdf" disabledReason="简历文件待补充">
        下载简历
      </PrimaryButton>,
    )

    expect(screen.queryByRole('link', { name: '下载简历' })).not.toBeInTheDocument()
    expect(screen.getByText('下载简历')).toHaveAttribute('aria-disabled', 'true')
  })

  it('marks external links for a new browsing context', () => {
    render(<TextLink href="https://github.com/SiHuoqwq">GitHub</TextLink>)

    expect(screen.getByRole('link', { name: /GitHub/ })).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('link', { name: /GitHub/ })).toHaveAttribute('rel', 'noreferrer')
  })

  it('expresses status with visible text', () => {
    render(<StatusLabel tone="verified">VERIFIED / PASS</StatusLabel>)
    expect(screen.getByText('VERIFIED / PASS')).toBeVisible()
  })
})
