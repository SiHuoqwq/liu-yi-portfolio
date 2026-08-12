import { profile, resumeAssetPath, resumeAvailable } from '../../content/profile'
import { Container } from './Container'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div>
          <p className="site-footer__manifesto mono">BUILDING RELIABLE AI APPLICATIONS</p>
          <p>构建可靠、可验证的 AI 应用。</p>
          <small>© 2026 Liu Yi · AI APPLICATION ENGINEER</small>
        </div>
        <div className="site-footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={`mailto:${profile.email}`}>Email ↗</a>
          {resumeAvailable ? <a href={resumeAssetPath}>Resume</a> : <span aria-disabled="true">Resume / 待补充</span>}
          <a href="#top">Back to top</a>
        </div>
      </Container>
    </footer>
  )
}
