import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { SIGN_IN } from '~/pages/routes'
import { SignIn } from '~/pages'


export default function PrivateRoute({component, ...rest}: RouteProps) {
  const routeProps:any = {}

  routeProps.component = component
  return <Route {...routeProps} {...rest}/>
}
