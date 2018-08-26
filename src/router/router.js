import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router'
import GuardRoute from '../components/common/GuardRoute'
import { Urls } from './routeUrls'
import Guards from '../utils/guards'
import Auth from '../components/Auth/Auth'
import Home from '../components/Home/Home'
import Posts from '../components/Posts/Posts'
import CreatePost from '../components/Posts/CreatePost'
import Profile from '../components/Profile/Profile'
import NotFound from '../components/NotFound/NotFound'

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
        exact
        path={Urls.posts.all}
        component={Posts}
        guardFunction={Guards.mustBeAuthorized}
        redirectRoute={Urls.auth.login}
      />
      <GuardRoute
        exact
        path={Urls.posts.new}
        component={CreatePost}
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
