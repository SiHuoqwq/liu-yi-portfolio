import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { assetManifest } from './assets'

type SeoRecord = {
  title: string
  description: string
}

type SeoOptions = {
  siteUrl?: string
  shareImageAvailable?: boolean
}

const routeSeo: Record<string, SeoRecord> = {
  '/': {
    title: '刘燚｜AI 应用开发工程师与 AI Agent 开发作品集',
    description: '展示析数 AI 数据分析工作台与 KnowledgeFlow AI RAG 知识库，涵盖 Agent、RAG、FastAPI、React、SSE、测试与发布实践。',
  },
  '/projects/xishu': {
    title: '析数｜可信 AI 数据分析工作台 Case Study',
    description: '析数项目案例：用受控工作流、确定性计算、证据校验与可恢复执行，构建可信 AI 数据分析应用。',
  },
  '/projects/knowledgeflow': {
    title: 'KnowledgeFlow AI｜本地模块化 RAG Case Study',
    description: 'KnowledgeFlow AI 项目案例：以模块化检索、上下文预算、固定拒答与来源快照构建可复核的本地 RAG 知识库。',
  },
}

const fallbackSeo: SeoRecord = {
  title: '页面未找到｜刘燚作品集',
  description: '请求的页面不存在，请返回刘燚的 AI 应用开发工程师作品集首页。',
}

export function getRouteSeo(pathname: string) {
  return routeSeo[pathname] ?? fallbackSeo
}

function validSiteUrl(value?: string) {
  if (!value) return null
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:' ? url : null
  } catch {
    return null
  }
}

function setMeta(selector: string, attributes: Record<string, string>, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value))
    document.head.append(element)
  }
  element.content = content
}

export function applySeo(pathname: string, options: SeoOptions = {}) {
  const seo = getRouteSeo(pathname)
  const siteUrl = validSiteUrl(options.siteUrl)
  document.title = seo.title
  setMeta('meta[name="description"]', { name: 'description' }, seo.description)
  setMeta('meta[property="og:title"]', { property: 'og:title' }, seo.title)
  setMeta('meta[property="og:description"]', { property: 'og:description' }, seo.description)
  setMeta('meta[property="og:type"]', { property: 'og:type' }, 'website')

  document.head.querySelector('link[rel="canonical"]')?.remove()
  document.head.querySelector('meta[property="og:url"]')?.remove()
  document.head.querySelector('meta[property="og:image"]')?.remove()

  if (!siteUrl) return
  const canonicalUrl = new URL(pathname, siteUrl)
  const canonical = document.createElement('link')
  canonical.rel = 'canonical'
  canonical.href = canonicalUrl.href
  document.head.append(canonical)
  setMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl.href)

  if (options.shareImageAvailable) {
    setMeta('meta[property="og:image"]', { property: 'og:image' }, new URL(assetManifest.shareImage.path, siteUrl).href)
  }
}

export function RouteSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    applySeo(pathname, {
      siteUrl: import.meta.env.VITE_SITE_URL,
      shareImageAvailable: assetManifest.shareImage.available,
    })
  }, [pathname])

  return null
}
