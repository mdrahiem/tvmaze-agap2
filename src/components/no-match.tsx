/* This is no match route which is similar to the error page but it is used
when the user tries to access a route that does not exist. */

import { Link } from 'react-router-dom'
import LayoutComponent from './reusable/layout'

export default function NoMatch(): JSX.Element {
  return (
    <LayoutComponent>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    </LayoutComponent>
  )
}
