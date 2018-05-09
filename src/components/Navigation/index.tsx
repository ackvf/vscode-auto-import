import React, { ReactNode } from 'react'
import { Link, Route } from 'react-router-dom'

import * as routes from '~/pages/routes'
import './style.css'

/* Compare importing on line 20 by ctrl+space and ctrl+. */

// import NavLink from '~/components/links/NavLink'; // this import is desired


interface HeaderNavLinkProps {
  children: ReactNode,
  exact?: boolean,
  to: string
}

function HeaderNavLink({children, ...linkProps}: HeaderNavLinkProps) {
  return (
    <NavLink {...linkProps}>
      {({active}) => (
        <Link to={linkProps.to} className={`headerNavLink ${active ? 'active' : ''}`}>
          {children}
        </Link>
      )}
    </NavLink>
  )
}


export default function Navigation() {
  return (
    <nav>
      <HeaderNavLink to={routes.LANDING} exact>Landing</HeaderNavLink>
      <HeaderNavLink to={routes.DASHBOARD} exact>Dashboard</HeaderNavLink>
      <HeaderNavLink to={routes.ACCOUNT} exact>Account</HeaderNavLink>
      <HeaderNavLink to={routes.PLAYGROUND.INDEX} exact>Playground</HeaderNavLink>
      <Route
        path={routes.PLAYGROUND.INDEX}
        render={() => (
          <HeaderNavLink to={routes.PLAYGROUND.FONTS} exact>Fonts</HeaderNavLink>
        )}
      />
      {
        <HeaderNavLink to={routes.SIGN_IN} exact>Sign In</HeaderNavLink>
      }
    </nav>
  )
}
