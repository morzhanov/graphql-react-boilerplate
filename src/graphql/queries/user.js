import gql from 'graphql-tag'
import { UserType } from '../types/user'

export const GET_USER = gql`
  mutation GetUser() {
    getUser(): UserType
  }
`
