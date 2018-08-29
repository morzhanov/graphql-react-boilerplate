// import ApolloClient from 'apollo-boost'

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/api'
// })

// export default client
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { refreshTokens } from '../utils/heplers'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/api'
})

// we disabling local cache to rely on network requests only
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all'
  }
}

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('accessToken')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : null
    }
  }
})

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
      message.indexOf('AuthQueryType' >= 0) && refreshTokens()
    })
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = ApolloLink.from([errorLink, authLink, httpLink])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
})

export default client
