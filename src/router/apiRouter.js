import React from 'react'
import { Route, IndexRedirect, Redirect, Router } from 'react-router'
import { Urls } from './routeUrls'
import Guards from '../utils/guards'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Home from '../components/Home'
import Posts from '../components/Posts'
import Profile from '../components/Profile'
import NotFound from '../components/NotFound'

const ApiRouter = (history, options) => (
  <Router history={history}>
    <Route
      onEnter={Guards.mustBeUnauthorized}
      mustBeRedirectedTo={Urls.home.route}
      path={Urls.auth.login.route}
      component={Login}
    />
    <Route
      onEnter={Guards.mustBeUnauthorized}
      mustBeRedirectedTo={Urls.home.route}
      path={Urls.auth.register.route}
      component={Register}
    />
    <Route
      onEnter={Guards.mustBeAuthorized}
      mustBeRedirectedTo={Urls.auth.login.route}
      path={URL.home.route}
      component={Home}
    />
    <Route
      onEnter={Guards.mustBeAuthorized}
      mustBeRedirectedTo={Urls.auth.login.route}
      path={Urls.posts.route}
      component={Posts}
    />
    <Route
      onEnter={Guards.mustBeAuthorized}
      mustBeRedirectedTo={Urls.auth.login.route}
      path={Urls.profile.route}
      component={Profile}
    />
    <Route path={URL.error.route} component={NotFound} />
    <Redirect from="*" to={Urls.error.link} />
  </Router>
)

export default ApiRouter
