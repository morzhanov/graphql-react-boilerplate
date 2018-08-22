import gql from 'graphql-tag'

export const UPDATE_USER = gql`
  mutation UpdateUser($email: String!) {
    updateUser(email: $email) {
      id
      email
    }
  }
`
