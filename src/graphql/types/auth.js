import type from 'react-apollo'

export type LoginType = {
  email: String!,
  password: String!
}

export type RegisterType = {
  email: String!,
  password: String!
}

export type AuthResponseType = {
  accessToken: String!,
  refreshToken: String!
}
