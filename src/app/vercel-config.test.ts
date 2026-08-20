import { describe, expect, it } from 'vitest'

import vercelConfig from '../../vercel.json'

describe('Vercel deployment configuration', () => {
  it('routes direct SPA requests through index.html', () => {
    expect(vercelConfig.rewrites).toContainEqual({
      source: '/(.*)',
      destination: '/index.html',
    })
  })
})
