import React from 'react'
import { Route } from 'react-router-dom'

/**
 * Custom NavLink implementation to use provided render function.
 * Default NavLink from react-router-dom renders only an `<a class="active">` tag.
 *
 * Passes active:bool to the render function.
 * Passes linkProps back for DRY convenience.
 *
 * Example:
 *//*

  <NavLink to='my/path' exact className='my-link'>
    {(active, linkProps) => (
      <div className={`myWrapper ${active ? 'active-class' : ''}`}>
        <Link {...linkProps}>My Link</Link>
      </div>
    )}
  </NavLink>

 */

export interface NavLinkProps {
  children: Function,
  exact?: boolean,
  to: string
}

export default function NavLink({children, ...linkProps}: NavLinkProps): JSX.Element {
  return (
    <Route
      path={linkProps.to}
      exact={linkProps.exact}
      children={({match}) => children({active: !!match, linkProps})}
    />
  )
}

