import gql from 'graphql-tag'

export const LOGIN = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`

export const REGISTER = gql`
  mutation RegisterUser($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`

export const LOG_OUT = gql`
  mutation LogoutUser($id: ID!) {
    logout(id: $id) {
      message
      error
    }
  }
`

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      accessToken
      refreshToken
    }
  }
`
