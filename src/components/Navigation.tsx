import React from 'react'
import { Link, NavLink, Route } from 'react-router-dom'

import * as routes from '~/pages/routes'
import './Navigation.css'

export default function Navigation() {
  return (
    <nav>
      <NavLink to={routes.LANDING} exact>Landing</NavLink>
      <NavLink to={routes.DASHBOARD} exact>Dashboard</NavLink>
      <NavLink to={routes.ACCOUNT} exact>Account</NavLink>
      <NavLink to={routes.PLAYGROUND.INDEX} exact>Playground</NavLink>
      <Route
        path={routes.PLAYGROUND.INDEX}
        render={() => (
          <NavLink to={routes.PLAYGROUND.FONTS} exact>Fonts</NavLink>
        )}
      />
      {
        <NavLink to={routes.SIGN_IN} exact>Sign In</NavLink>
      }
    </nav>
  )
}
