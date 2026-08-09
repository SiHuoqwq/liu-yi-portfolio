import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { TextLink } from './TextLink'

it('marks external links for a safe new browsing context', () => {
  render(<TextLink href="https://github.com/SiHuoqwq">GitHub</TextLink>)

  expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('target', '_blank')
  expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('rel', 'noreferrer')
})
