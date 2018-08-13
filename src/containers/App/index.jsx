import * as React from 'react'
import { Route, Router, Switch } from 'react-router'
import { Provider } from 'mobx-react'
import styled from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import { createBrowserHistory, History } from 'history'
import { createStores } from '../../stores/createStore'
import { UserModel } from '../../models/UserModel'
import Home from '../Home'
import Auth from '../Auth'
import Profile from '../Profile'
import Guards from '../../utils/guards'
import client from '../../graphql/setup'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const history = createBrowserHistory()
const defautlUser = UserModel.create({
  name: 'Default Name'
})
const stores = createStores(history, defautlUser)

const App = () => (
  <ApolloProvider client={client}>
    <Provider {...stores}>
      <Container>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              onEnter={Guards.mustBeAuthorized}
              mustBeRedirectedTo="/auth"
              component={Home}
            />
            <Route
              onEnter={Guards.mustBeUnauthorized}
              path="/auth"
              component={Auth}
            />
            <Route
              onEnter={Guards.mustBeAuthorized}
              mustBeRedirectedTo="/auth"
              path="/profile"
              component={Profile}
            />
          </Switch>
        </Router>
      </Container>
    </Provider>
  </ApolloProvider>
)

export default App
