import * as React from 'react'
import styled from 'styled-components'
import { Route, Router, Switch } from 'react-router'
import { Provider } from 'mobx-react'
import { ApolloProvider } from 'react-apollo'
import { createBrowserHistory, History } from 'history'
import { createStores } from '../../stores/createStore'
import { UserModel } from '../../models/UserModel'
import client from '../../graphql/setup'
import ApiRouter from '../../router/apiRouter'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const history = createBrowserHistory()
const defautlUser = UserModel.create({
  name: 'Default Name'
})
const stores = createStores(history, defautlUser)

const App = () => {
  return (
    <Provider {...stores}>
      <Container>
        <ApolloProvider client={client}>
          <ApiRouter history={history} />
        </ApolloProvider>
      </Container>
    </Provider>
  )
}

export default App
