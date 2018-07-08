import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink, NextLink, Operation } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { API_ENDPOINT } from 'utils/constants'

const httpLink = createHttpLink({ uri: API_ENDPOINT })

const nextLink = (operation, forward) => {
  const token = localStorage.getItem('graphcoolToken')
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
}

const middlewareLink = new ApolloLink(nextLink)

const httpLinkWithAuthToken = middlewareLink.concat(httpLink)

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})

export default client
