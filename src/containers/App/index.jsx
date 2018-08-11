import * as React from 'react'
import { Route, Router, Switch } from 'react-router'
import { Provider } from 'mobx-react'
import styled from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import { createBrowserHistory, History } from 'history'
import { createStores } from '../../stores/createStore'
import { UserModel } from '../../models/UserModel'
import Home from '../Home'
import Profile from '../Profile'
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
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </Container>
    </Provider>
  </ApolloProvider>
)

export default App
