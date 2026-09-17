import { describe, expect, it } from 'vitest'
import indexHtml from '../../index.html?raw'

function parseIndexHtml() {
  return new DOMParser().parseFromString(indexHtml, 'text/html')
}

describe('static social metadata fallback', () => {
  it.each([
    ['meta[name="description"]', '展示析数 AI 数据分析工作台、KnowledgeFlow AI RAG 知识库与 ProductStudio AI 电商视觉内容生成工作台'],
    ['meta[property="og:title"]', '刘燚｜AI 应用开发工程师与 AI Agent 开发作品集'],
    ['meta[property="og:description"]', '展示析数 AI 数据分析工作台、KnowledgeFlow AI RAG 知识库与 ProductStudio AI 电商视觉内容生成工作台'],
    ['meta[property="og:type"]', 'website'],
    ['meta[property="og:image"]', '/images/share/portfolio.webp'],
    ['meta[property="og:image:width"]', '1200'],
    ['meta[property="og:image:height"]', '630'],
    ['meta[property="og:image:alt"]', '刘燚 AI 应用开发工程师作品集，展示可验证的 AI 应用工程证据'],
    ['meta[name="twitter:card"]', 'summary_large_image'],
    ['meta[name="twitter:title"]', '刘燚｜AI 应用开发工程师与 AI Agent 开发作品集'],
    ['meta[name="twitter:description"]', '展示析数 AI 数据分析工作台、KnowledgeFlow AI RAG 知识库与 ProductStudio AI 电商视觉内容生成工作台'],
    ['meta[name="twitter:image"]', '/images/share/portfolio.webp'],
  ])('includes %s', (selector, expectedContent) => {
    expect(parseIndexHtml().querySelector(selector)?.getAttribute('content')).toContain(expectedContent)
  })

  it('does not declare a fixed canonical or og:url for every SPA route', () => {
    const document = parseIndexHtml()

    expect(document.querySelector('link[rel="canonical"]')).not.toBeInTheDocument()
    expect(document.querySelector('meta[property="og:url"]')).not.toBeInTheDocument()
  })
})
