import React from 'react'
import { Link } from 'react-router-dom'
import RouteWithSubRoutes from '../RouteWithSubRoutes'

const AccountPage = ({ match, routes }) => (
  <div>
    AccountPage
    <ul>
      <li>
        <Link to={`${match.url}/personal-settings`}>Personal</Link>
      </li>
      <li>
        <Link to={`${match.url}/card-settings`}>Card</Link>
      </li>
    </ul>
    {routes.map(route => <RouteWithSubRoutes {...route} />)}
  </div>
)

export default AccountPage
