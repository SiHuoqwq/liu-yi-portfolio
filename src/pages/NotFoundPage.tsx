import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main id="main-content" className="container not-found">
      <p className="mono">ERROR / 404</p>
      <h1>页面未找到</h1>
      <p>这条证据轨迹没有对应页面。</p>
      <Link className="button button--primary" to="/">返回首页</Link>
    </main>
  )
}
