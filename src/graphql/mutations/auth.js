import gql from 'graphql-tag'

export const LOGIN = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`

export const REGISTER = gql`
  mutation RegisterUser($email: String!, $password: String!) {
    registerUser(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`

export const LOG_OUT = gql`
  mutation LogoutUser($accessToken: String!) {
    logoutUser(accessToken: $accessToken) {
      message
      error
    }
  }
`

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshTOken: String!) {
    refreshToken(refreshTOken: $refreshTOken) {
      accessToken
      refreshToken
    }
  }
`
