import { expect, test } from '@playwright/test'

const viewports = [
  { width: 1440, height: 900 },
  { width: 1280, height: 800 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
  { width: 360, height: 800 },
] as const

for (const viewport of viewports) {
  test(`home layout ${viewport.width}x${viewport.height}`, async ({ page }, testInfo) => {
    await page.setViewportSize(viewport)
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('构建可验证、可恢复')
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    expect(overflow).toBeLessThanOrEqual(0)
    await page.screenshot({ path: testInfo.outputPath(`home-${viewport.width}x${viewport.height}.png`), fullPage: true })
  })
}

for (const pageCase of [
  { slug: 'xishu', path: '/projects/xishu', heading: '析数' },
  { slug: 'knowledgeflow', path: '/projects/knowledgeflow', heading: 'KnowledgeFlow AI' },
] as const) {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }] as const) {
    test(`${pageCase.slug} layout ${viewport.width}x${viewport.height}`, async ({ page }, testInfo) => {
      await page.setViewportSize(viewport)
      await page.goto(pageCase.path)
      await expect(page.getByRole('heading', { level: 1 })).toContainText(pageCase.heading)
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
      expect(overflow).toBeLessThanOrEqual(0)
      await page.screenshot({ path: testInfo.outputPath(`${pageCase.slug}-${viewport.width}x${viewport.height}.png`), fullPage: true })
    })
  }
}
