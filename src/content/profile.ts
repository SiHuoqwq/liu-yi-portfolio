export const profile = {
  name: '刘燚',
  englishName: 'LIU YI',
  role: 'AI 应用开发工程师 / AI Agent 开发工程师',
  email: '3534543791@qq.com',
  github: 'https://github.com/SiHuoqwq',
  education: '华东交通大学 / 信息与计算科学本科 / 2022.09-2026.06',
} as const

export const siteLinks = [
  { label: '项目', href: '/#projects' },
  { label: '工程方法', href: '/#principles' },
  { label: '能力', href: '/#capabilities' },
  { label: '关于', href: '/#about' },
] as const

export const resumeAssetPath = assetManifest.resume.path
export const resumeAvailable = getAssetAvailability(resumeAssetPath)
import { assetManifest, getAssetAvailability } from '../app/assets'
