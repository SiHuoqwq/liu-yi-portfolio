import { profile, resumeAssetPath, resumeAvailable } from '../../content/profile'
import { PrimaryButton } from '../ui/PrimaryButton'
import { TextLink } from '../ui/TextLink'

export function AboutContact() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <header><p className="section-index mono">ABOUT / CONTACT</p><h2 id="about-title">刘燚<br /><span className="mono">LIU YI</span></h2><p className="mono">AVAILABLE FOR<br />AI Application Engineer<br />AI Agent Engineer</p></header>
        <div className="about__body"><p>{profile.education}</p><p>目前专注 AI 应用、AI Agent 与 RAG 工程方向。我关注的不只是模型能否完成一次回答，也包括工作流是否可控、结果是否可验证、状态是否可恢复，以及系统能否通过测试和发布门禁。</p><dl><div><dt className="mono">EMAIL</dt><dd>{profile.email}</dd></div><div><dt className="mono">GITHUB</dt><dd>github.com/SiHuoqwq</dd></div></dl><div className="about__actions"><PrimaryButton href={resumeAssetPath} disabledReason={resumeAvailable ? undefined : '简历文件待补充'}>下载简历</PrimaryButton><TextLink href={`mailto:${profile.email}`}>发送邮件</TextLink><TextLink href={profile.github}>GitHub</TextLink></div></div>
      </div>
    </section>
  )
}
