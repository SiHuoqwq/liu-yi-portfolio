import { describe, expect, it } from 'vitest'
import { applySeo, getRouteSeo } from './seo'

describe('route SEO', () => {
  it.each([
    ['/', '刘燚｜AI 应用开发工程师与 AI Agent 开发作品集'],
    ['/projects/xishu', '析数｜可信 AI 数据分析工作台 Case Study'],
    ['/projects/knowledgeflow', 'KnowledgeFlow AI｜本地模块化 RAG Case Study'],
    ['/projects/productstudio', 'ProductStudio｜AI 电商视觉内容生成工作台 Case Study'],
  ])('provides independent metadata for %s', (path, expectedTitle) => {
    const seo = getRouteSeo(path)
    expect(seo.title).toBe(expectedTitle)
    expect(seo.description.length).toBeGreaterThan(30)
  })

  it('preserves the ProductStudio route metadata', () => {
    expect(getRouteSeo('/projects/productstudio')).toEqual({
      title: 'ProductStudio｜AI 电商视觉内容生成工作台 Case Study',
      description:
        'ProductStudio 项目案例：以 Product Truth 约束创意，通过显式采用、本地 CUI 生成、Fidelity QA 与任务恢复构建可解释的电商视觉工作流。',
    })
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

  it('publishes complete route social metadata without inventing a production URL', () => {
    applySeo('/projects/productstudio', { siteUrl: '', shareImageAvailable: true })

    expect(document.querySelector('link[rel="canonical"]')).not.toBeInTheDocument()
    expect(document.querySelector('meta[property="og:url"]')).not.toBeInTheDocument()
    expect(document.querySelector('meta[property="og:image"]')).toHaveAttribute(
      'content',
      '/images/share/portfolio.webp',
    )
    expect(document.querySelector('meta[property="og:image:width"]')).toHaveAttribute('content', '1200')
    expect(document.querySelector('meta[property="og:image:height"]')).toHaveAttribute('content', '630')
    expect(document.querySelector('meta[property="og:image:alt"]')).toHaveAttribute(
      'content',
      '刘燚 AI 应用开发工程师作品集，展示可验证的 AI 应用工程证据',
    )
    expect(document.querySelector('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image')
    expect(document.querySelector('meta[name="twitter:title"]')).toHaveAttribute(
      'content',
      'ProductStudio｜AI 电商视觉内容生成工作台 Case Study',
    )
    expect(document.querySelector('meta[name="twitter:description"]')).toHaveAttribute(
      'content',
      getRouteSeo('/projects/productstudio').description,
    )
    expect(document.querySelector('meta[name="twitter:image"]')).toHaveAttribute(
      'content',
      '/images/share/portfolio.webp',
    )
  })

  it('uses the configured site URL for route canonical and absolute social image URLs', () => {
    applySeo('/projects/knowledgeflow', {
      siteUrl: 'https://portfolio.example/',
      shareImageAvailable: true,
    })

    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://portfolio.example/projects/knowledgeflow',
    )
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      'content',
      'https://portfolio.example/projects/knowledgeflow',
    )
    expect(document.querySelector('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://portfolio.example/images/share/portfolio.webp',
    )
    expect(document.querySelector('meta[name="twitter:image"]')).toHaveAttribute(
      'content',
      'https://portfolio.example/images/share/portfolio.webp',
    )
  })

  it('cleans stale route and image metadata when configuration changes', () => {
    applySeo('/', { siteUrl: 'https://portfolio.example/', shareImageAvailable: true })
    applySeo('/projects/xishu', { siteUrl: '', shareImageAvailable: false })

    expect(document.title).toBe('析数｜可信 AI 数据分析工作台 Case Study')
    expect(document.querySelector('meta[name="twitter:title"]')).toHaveAttribute('content', document.title)
    expect(document.querySelector('link[rel="canonical"]')).not.toBeInTheDocument()
    expect(document.querySelector('meta[property="og:url"]')).not.toBeInTheDocument()
    expect(document.querySelector('meta[property="og:image"]')).not.toBeInTheDocument()
    expect(document.querySelector('meta[property="og:image:width"]')).not.toBeInTheDocument()
    expect(document.querySelector('meta[property="og:image:height"]')).not.toBeInTheDocument()
    expect(document.querySelector('meta[property="og:image:alt"]')).not.toBeInTheDocument()
    expect(document.querySelector('meta[name="twitter:card"]')).not.toBeInTheDocument()
    expect(document.querySelector('meta[name="twitter:image"]')).not.toBeInTheDocument()
  })
})
