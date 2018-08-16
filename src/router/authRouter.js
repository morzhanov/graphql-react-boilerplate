import React from 'react'
import { Route, IndexRedirect, Redirect } from 'react-router'
import { Urls } from './routeUrls'
import Guards from '../utils/guards'
import Auth from '../components/Auth'
import Login from '../components/Login'
import Register from '../components/Register'
import NotFound from '../components/NotFound'

const AuthRouter = (history, options) => (
  <Route path={Urls.auth.route} component={Auth}>
    <Route
      onEnter={Guards.mustBeUnauthorized}
      mustBeRedirectedTo={URL.home.route}
      path={Urls.auth.children.login.route}
      component={SignIn}
    />
    <Route
      onEnter={Guards.mustBeUnauthorized}
      mustBeRedirectedTo={Urls.home.route}
      path={Urls.auth.children.register.route}
      component={ResetPassword}
    />
    <Route path={URL.error.route} component={NotFound} />
    <Redirect from="*" to={URL.error.link} />
  </Route>
)

export default AuthRouter
