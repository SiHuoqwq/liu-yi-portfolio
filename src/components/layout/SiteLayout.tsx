import { Outlet } from 'react-router-dom'
import { RouteSeo } from '../../app/seo'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { SkipLink } from './SkipLink'

export function SiteLayout() {
  return (
    <>
      <RouteSeo />
      <SkipLink />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  )
}
