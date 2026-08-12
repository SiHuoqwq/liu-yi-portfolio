import { profile, resumeAssetPath, resumeAvailable } from '../../content/profile'
import { PrimaryButton } from '../ui/PrimaryButton'
import { SecondaryButton } from '../ui/SecondaryButton'
import { TextLink } from '../ui/TextLink'
import { Trace } from '../trace/Trace'

export function HeroSection() {
  return (
    <section id="hero" className="hero section" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow mono">LIU YI / AI APPLICATION ENGINEER</p>
          <h1 id="hero-title" aria-label="构建可验证、可恢复、可交付的 AI 应用。">
            <span className="hero-title__line">构建可验证、</span>
            <span className="hero-title__line">可恢复、</span>
            <span className="hero-title__line">可交付的 AI 应用。</span>
          </h1>
          <p className="hero__lede">专注 Agent、RAG 与数据分析应用，独立完成从工作流设计、模型接入到前后端开发、测试验收与版本发布的项目闭环。</p>
          <div className="hero__actions">
            <PrimaryButton href="#projects">查看项目</PrimaryButton>
            <SecondaryButton href={resumeAssetPath} disabledReason={resumeAvailable ? undefined : '简历文件待补充'}>下载简历</SecondaryButton>
            <TextLink href={profile.github}>GitHub</TextLink>
            <TextLink href={`mailto:${profile.email}`}>Email</TextLink>
          </div>
        </div>
        <Trace />
      </div>
    </section>
  )
}
