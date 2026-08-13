import { expect, test } from '@playwright/test'

test('presents the homepage and routes through both evidence case studies', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  await expect(page).toHaveTitle('刘燚｜AI 应用开发工程师与 AI Agent 开发作品集')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('构建可验证、可恢复')

  await page.getByRole('link', { name: '查看析数 Case Study' }).click()
  await expect(page).toHaveURL(/\/projects\/xishu$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('析数')
  await expect(page).toHaveTitle('析数｜可信 AI 数据分析工作台 Case Study')

  await page.getByRole('link', { name: '返回首页', exact: true }).click()
  await expect(page).toHaveURL(/\/$/)

  await page.getByRole('link', { name: '查看KnowledgeFlow AI Case Study' }).click()
  await expect(page).toHaveURL(/\/projects\/knowledgeflow$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('KnowledgeFlow AI')
  await expect(page).toHaveTitle('KnowledgeFlow AI｜本地模块化 RAG Case Study')

  await page.getByRole('link', { name: '返回首页', exact: true }).click()
  await expect(page).toHaveURL(/\/$/)
})

test('enlarges real project images and restores focus after Escape', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')

  const trigger = page.getByRole('button', { name: '放大查看：析数 工作台首页' })
  await trigger.scrollIntoViewIfNeeded()
  await trigger.click()

  const dialog = page.getByRole('dialog', { name: '图片预览：析数 工作台首页' })
  await expect(dialog).toBeVisible()
  await expect(page.getByRole('button', { name: '关闭图片预览' })).toBeFocused()
  await expect(page.locator('body')).toHaveAttribute('data-image-viewer-open', 'true')

  await page.keyboard.press('Escape')
  await expect(dialog).toBeHidden()
  await expect(trigger).toBeFocused()
  await expect(page.locator('body')).not.toHaveAttribute('data-image-viewer-open')
})

test('keeps GitHub external and publishes the approved resume and portrait', async ({ page }) => {
  await page.goto('/')
  const github = page.getByRole('link', { name: 'GitHub' }).first()
  await expect(github).toHaveAttribute('href', 'https://github.com/SiHuoqwq')
  await expect(github).toHaveAttribute('target', '_blank')
  await expect(github).toHaveAttribute('rel', 'noreferrer')

  const resumePath = '/resume/liu-yi-ai-application-resume.pdf'
  const resume = page.getByRole('link', { name: '下载简历' }).first()
  await expect(resume).toHaveAttribute('href', resumePath)
  const resumeResponse = await page.request.get(resumePath)
  expect(resumeResponse.ok()).toBe(true)
  expect(resumeResponse.headers()['content-type']).toContain('application/pdf')

  const about = page.getByRole('region', { name: /刘燚.*LIU YI/ })
  const portrait = about.getByRole('img', { name: '刘燚个人照片' })
  await portrait.scrollIntoViewIfNeeded()
  await expect(portrait).toBeVisible()
  await expect(portrait).toHaveAttribute('width', '591')
  await expect(portrait).toHaveAttribute('height', '827')
  const decodedSize = await page.evaluate(async () => {
    const response = await fetch('/images/profile/liu-yi.webp')
    const bitmap = await createImageBitmap(await response.blob())
    const size = [bitmap.width, bitmap.height]
    bitmap.close()
    return size
  })
  expect(decodedSize).toEqual([591, 827])
})

test('mobile menu traps the interaction and restores focus after Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const trigger = page.getByRole('button', { name: /打开菜单/ })
  await trigger.click()

  const dialog = page.getByRole('dialog', { name: '移动导航' })
  await expect(dialog).toBeVisible()
  await expect(page.getByRole('button', { name: '关闭菜单' })).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(dialog).toBeHidden()
  await expect(trigger).toBeFocused()
})

test('has no horizontal overflow at 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  expect(overflow).toBeLessThanOrEqual(0)
})

test('404 keeps a working route back to the portfolio', async ({ page }) => {
  await page.goto('/missing-evidence')
  await expect(page.getByRole('heading', { level: 1, name: '页面未找到' })).toBeVisible()
  await expect(page).toHaveTitle('页面未找到｜刘燚作品集')
  await page.getByRole('link', { name: '返回首页' }).click()
  await expect(page).toHaveURL(/\/$/)
})

for (const route of ['/', '/projects/xishu', '/projects/knowledgeflow', '/missing-evidence']) {
  test(`${route} has one h1 and a continuous heading outline`, async ({ page }) => {
    await page.goto(route)
    await expect(page.locator('h1')).toHaveCount(1)
    const levels = await page.locator('h1, h2, h3, h4, h5, h6').evaluateAll((headings) =>
      headings.map((heading) => Number(heading.tagName.slice(1))),
    )

    expect(levels.filter((level) => level === 1)).toHaveLength(1)
    for (let index = 1; index < levels.length; index += 1) {
      expect(levels[index] - levels[index - 1]).toBeLessThanOrEqual(1)
    }
  })
}
