/* A "layout route" is a good place to put markup you want to
   share across all the pages on your site, like navigation. */
import { Outlet } from 'react-router-dom'
import LayoutComponent from '../components/reusable/layout'

/*
 * Renders layout component
 * @returns Layout component
 */
function Layout(): JSX.Element {
  return (
    <LayoutComponent>
      {/* An <Outlet> renders whatever child route is currently active. */}
      <Outlet />
    </LayoutComponent>
  )
}

export default Layout
