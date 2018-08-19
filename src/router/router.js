import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router'
import GuardRoute from '../components/common/GuardRoute'
import { Urls } from './routeUrls'
import Guards from '../utils/guards'
import Auth from '../components/Auth'
import Home from '../components/Home'
import Posts from '../components/Posts'
import Profile from '../components/Profile'
import NotFound from '../components/NotFound'

const ApiRouter = ({ history }) => (
  <Router history={history}>
    <Switch>
      <GuardRoute
        exact
        path={Urls.home}
        component={Home}
        guardFunction={Guards.mustBeAuthorized}
        redirectRoute={Urls.auth.login}
      />
      <GuardRoute
        path={Urls.auth.login}
        component={Auth}
        guardFunction={Guards.mustBeUnauthorized}
        redirectRoute={Urls.home}
      />
      <GuardRoute
        path={Urls.auth.register}
        component={Auth}
        guardFunction={Guards.mustBeUnauthorized}
        redirectRoute={Urls.home}
      />
      <GuardRoute
        path={Urls.posts}
        component={Posts}
        guardFunction={Guards.mustBeAuthorized}
        redirectRoute={Urls.auth.login}
      />
      <GuardRoute
        path={Urls.profile}
        component={Profile}
        guardFunction={Guards.mustBeAuthorized}
        redirectRoute={Urls.auth.login}
      />
      <Route path={Urls.error} component={NotFound} />
      <Redirect to={Urls.error} />
    </Switch>
  </Router>
)

export default ApiRouter
