import { describe, expect, it } from 'vitest'
import { applySeo, getRouteSeo } from './seo'

describe('route SEO', () => {
  it.each([
    ['/', '刘燚｜AI 应用开发工程师与 AI Agent 开发作品集'],
    ['/projects/xishu', '析数｜可信 AI 数据分析工作台 Case Study'],
    ['/projects/knowledgeflow', 'KnowledgeFlow AI｜本地模块化 RAG Case Study'],
  ])('provides independent metadata for %s', (path, expectedTitle) => {
    const seo = getRouteSeo(path)
    expect(seo.title).toBe(expectedTitle)
    expect(seo.description.length).toBeGreaterThan(30)
  })

  it('omits canonical and unavailable local share images without inventing URLs', () => {
    applySeo('/', { siteUrl: '', shareImageAvailable: false })

    expect(document.querySelector('link[rel="canonical"]')).not.toBeInTheDocument()
    expect(document.querySelector('meta[property="og:image"]')).not.toBeInTheDocument()
  })

  it('writes canonical only for a valid configured http site URL', () => {
    applySeo('/projects/xishu', { siteUrl: 'https://portfolio.example/', shareImageAvailable: false })
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://portfolio.example/projects/xishu',
    )

    applySeo('/', { siteUrl: 'not a url', shareImageAvailable: false })
    expect(document.querySelector('link[rel="canonical"]')).not.toBeInTheDocument()
  })

  it('publishes complete social share metadata for a valid configured site URL', () => {
    applySeo('/', { siteUrl: 'https://portfolio.example/', shareImageAvailable: true })

    expect(document.querySelector('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://portfolio.example/images/share/portfolio.webp',
    )
    expect(document.querySelector('meta[property="og:image:width"]')).toHaveAttribute('content', '1200')
    expect(document.querySelector('meta[property="og:image:height"]')).toHaveAttribute('content', '630')
    expect(document.querySelector('meta[property="og:image:alt"]')).toHaveAttribute(
      'content',
      '刘燚 AI 应用开发工程师作品集，展示析数与 KnowledgeFlow AI 工程证据',
    )
    expect(document.querySelector('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image')
    expect(document.querySelector('meta[name="twitter:image"]')).toHaveAttribute(
      'content',
      'https://portfolio.example/images/share/portfolio.webp',
    )
  })
})
