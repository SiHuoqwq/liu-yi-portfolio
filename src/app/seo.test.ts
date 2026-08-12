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
})
