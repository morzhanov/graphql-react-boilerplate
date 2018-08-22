import gql from 'graphql-tag'

export const GET_USER = gql`
  mutation GetUser() {
    getUser() {
      id
      email
    }
  }
`
