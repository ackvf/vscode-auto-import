import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Account, Dashboard, LandingPage, SignIn } from '~/pages'
import Navigation from '~/components/Navigation'
import PrivateRoute from '~/HOC/PrivateRoute';
import * as routes from '~/pages/routes'
import '~/fonts/fonts.css'
import '~/App.css'

const logo = require('~/logo.svg')
const logoFuture = require('~/logo-future.png')


export default class App extends React.Component {

  render() {
    return (
      <Router>
        <>
        <header className="App-header">
          <img src={logo} className="App-logo spin" alt="logo" />
          <img src={logoFuture} className="App-logo" alt="logo" />
          <h1 className="App-title">future cloud mining</h1>
        </header>
        <Navigation/>
        <main>
          <PrivateRoute
            exact path={routes.ACCOUNT}
            component={Account}
          />
          <PrivateRoute
            exact path={routes.DASHBOARD}
            component={Dashboard}
          />
          <Route
            exact path={routes.LANDING}
            component={LandingPage}
          />
          <Route
            exact path={routes.PLAYGROUND.FONTS}
            render={() => "blank"}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={SignIn}
          />
        </main>
        </>
      </Router>
    )
  }
}
