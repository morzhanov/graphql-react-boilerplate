import gql from 'graphql-tag'
import { LoginType, RegisterType, AuthResponseType } from '../types/auth'
import { graphqlRequestConfig } from '../../utils/heplers'

export const LOGIN = gql`
  mutation LoginUser($credentials: LoginType) {
    loginUser(credentials: $credentials): AuthResponseType
  }
`

export const REGISTER = gql`
  mutation RegisterUser($credentials: RegisterType!) {
    registerUser(credentials: $credentials): AuthResponseType
  }
`

export const LOG_OUT = gql`
  mutation LogoutUser() {
    logoutUser(): SimpleResponse
  }
`

export const REFRESH_TOKEN = gql`
  mutation RefreshToken() {
    refreshToken(): SimpleResponse
  }
`
