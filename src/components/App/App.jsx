import * as React from 'react'
import styled from 'styled-components'
import { Provider } from 'mobx-react'
import { ApolloProvider } from 'react-apollo'
import { createBrowserHistory, History } from 'history'
import { createStores } from '../../stores/createStore'
import ApolloClient from '../../graphql/setup'
import ApiRouter from '../../router/router'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const history = createBrowserHistory()
const stores = createStores(history)

const App = () => {
  return (
    <Provider {...stores}>
      <Container>
        <ApolloProvider client={ApolloClient}>
          <ApiRouter history={history} />
        </ApolloProvider>
      </Container>
    </Provider>
  )
}

export default App
