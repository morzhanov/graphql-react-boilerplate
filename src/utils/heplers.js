import * as graphql from 'graphql'
import ApolloClient from '../graphql/client'
import { REFRESH_TOKEN } from '../graphql/mutations/auth'

export const graphqlRequestConfig = context => ({
  options: {
    context: {
      headers: {
        Authorization: 'Token'
      },
      ...context
    }
  }
})

export const gqlWithContext = (gql, context) => {
  return graphql(gql, graphqlRequestConfig(context))
}

export const saveTokens = ({ accessToken, refreshToken }) => {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
}

export const logout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export const refreshTokens = () => {
  const refreshToken = localStorage.getItem('refreshToken')
  ApolloClient.mutate({
    mutation: REFRESH_TOKEN,
    variables: {
      refreshToken: refreshToken
    }
  }).then(({ data: { refreshToken } }) => {
    saveTokens(refreshToken)
    window.location.reload()
  })
}
