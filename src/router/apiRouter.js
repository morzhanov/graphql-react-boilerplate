import React from 'react'
import { Route, IndexRedirect, Redirect } from 'react-router'

const ApiRouter = (history, options) => (
  <Route path={URL.home.route} component={App}>
    <IndexRoute component={Home} />
    <Route
      onEnter={RouterHooks.requireBeingUnauth}
      mustBeRedirectedTo={URL.findProject.route}
      path={URL.signIn.route}
      component={Home}
    >
      <Route
        mustBeRedirectedTo={URL.findProject.route}
        onEnter={RouterHooks.requireBeingUnauth}
        path={URL.signIn.children.forgotPassword.route}
        component={Posts}
      />
    </Route>
    <Route
      mustBeRedirectedTo={URL.findProject.route}
      onEnter={RouterHooks.requireBeingUnauth}
      path={URL.signUp.route}
      component={Profile}
    />
    <Redirect from="*" to={URL.error.link} />
  </Route>
)

export default ApiRouter
