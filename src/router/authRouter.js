import React from 'react'
import { Route, IndexRedirect, Redirect } from 'react-router'

const AuthRouter = (history, options) => (
  <Route path={URL.home.route} component={Auth}>
    <Route
      onEnter={Guards.requireBeingUnauth}
      mustBeRedirectedTo={URL.findProject.route}
      path={URL.signIn.route}
      component={SignIn}
    />
    <Route
      onEnter={Guards.requireBeingUnauth}
      mustBeRedirectedTo={URL.findProject.route}
      path={URL.signIn.children.forgotPassword.route}
      component={ResetPassword}
    />
    <Redirect from="*" to={URL.error.link} />
  </Route>
)

export default AuthRouter
