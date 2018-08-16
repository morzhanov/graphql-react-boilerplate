import React from 'react'
import { Route, IndexRedirect, Redirect } from 'react-router'
import { Urls } from './routeUrls'
import Guards from '../utils/guards'
import Home from '../components/Home'
import Posts from '../components/Posts'
import Profile from '../components/Profile'
import NotFound from '../components/NotFound'

const ApiRouter = (history, options) => (
  <Route path={Urls.home.route} component={App}>
    <IndexRoute component={Home} />
    <Route
      onEnter={Guards.mustBeAuthorized}
      mustBeRedirectedTo={Urls.auth.children.login.route}
      path={URL.home.route}
      component={Home}
    >
      <Route
        onEnter={Guards.mustBeAuthorized}
        mustBeRedirectedTo={Urls.auth.children.login.route}
        path={Urls.home.children.posts.route}
        component={Posts}
      />
      <Route
        onEnter={Guards.mustBeAuthorized}
        mustBeRedirectedTo={Urls.auth.children.login.route}
        path={Urls.home.children.profile.route}
        component={Profile}
      />
    </Route>
    <Route path={URL.error.route} component={NotFound} />
    <Redirect from="*" to={Urls.error.link} />
  </Route>
)

export default ApiRouter
