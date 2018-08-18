import gql from 'graphql-tag'
import { UserType } from '../types/user'

export const UPDATE_USER = gql`
  mutation UpdateUser($user: UserType) {
    updateUser(user: $user): UserType
  }
`
