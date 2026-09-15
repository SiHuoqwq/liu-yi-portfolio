import { expect, test } from '@playwright/test'

test('uses the editorial sticky stack only on motion-capable desktop viewports', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1200 })
  await page.goto('/')

  const stack = page.locator('.project-stack')
  const cards = stack.locator('.featured-project')
  const stickyCard = stack.locator('.project-stack__sticky')

  await expect(stack).toHaveAttribute('data-stack-mode', 'sticky')
  await expect(cards).toHaveCount(3)
  await expect(page.locator('.trace')).toHaveAttribute('data-motion', 'sequence')

  for (const [index, projectName] of ['析数', 'KnowledgeFlow AI', 'ProductStudio'].entries()) {
    const card = cards.nth(index)
    await card.scrollIntoViewIfNeeded()
    await expect(card).toBeVisible()
    await expect(card).toContainText(projectName)
    await expect.poll(() => card.locator('img').evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0)
    await expect.poll(() => card.evaluate((element) => {
      const rect = element.getBoundingClientRect()
      const topmost = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2)
      return topmost !== null && element.contains(topmost)
    })).toBe(true)
  }

  await expect.poll(() => stickyCard.evaluate((element) => getComputedStyle(element).transform)).not.toBe('none')
  const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  expect(horizontalOverflow).toBeLessThanOrEqual(0)
})

test('keeps all three projects static and accessible on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  await expect(page.locator('.project-stack')).toHaveAttribute('data-stack-mode', 'static')
  const cards = page.locator('.featured-project')
  await expect(cards).toHaveCount(3)

  for (const [index, projectName] of ['析数', 'KnowledgeFlow AI', 'ProductStudio'].entries()) {
    const card = cards.nth(index)
    await card.scrollIntoViewIfNeeded()
    await expect(card).toBeVisible()
    await expect(card).toContainText(projectName)
  }
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
