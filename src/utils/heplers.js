import * as graphql from 'graphql'

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
