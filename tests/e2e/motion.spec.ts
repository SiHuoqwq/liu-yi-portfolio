import { expect, test } from '@playwright/test'

test('uses the editorial sticky stack only on motion-capable desktop viewports', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1200 })
  await page.goto('/')

  await expect(page.locator('.project-stack')).toHaveAttribute('data-stack-mode', 'sticky')
  await expect(page.locator('.trace')).toHaveAttribute('data-motion', 'sequence')
})

test('keeps the project stack static on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  await expect(page.locator('.project-stack')).toHaveAttribute('data-stack-mode', 'static')
  await expect(page.locator('.featured-project')).toHaveCount(2)
})

test.describe('reduced motion', () => {
  test('renders all evidence immediately without scroll-linked motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')

    await expect.poll(() => page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true)
    await expect(page.locator('.project-stack')).toHaveAttribute('data-stack-mode', 'static')
    await expect(page.locator('.trace')).toHaveAttribute('data-motion', 'reduced')
    await expect(page.locator('.trace-step')).toHaveCount(5)
    await expect(page.locator('.trace-step').first()).toBeVisible()
  })
})
