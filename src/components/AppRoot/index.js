import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Helmet from '../Helmet'
import routes from '../../routes'
import AppHeader from '../AppHeader'
import RouteWithSubRoutes from '../RouteWithSubRoutes'

const AppRoot = props => (
  <div>
    <Helmet />
    <AppHeader />
    <Switch>{routes.map(route => <RouteWithSubRoutes {...route} />)}</Switch>
  </div>
)

export default AppRoot
