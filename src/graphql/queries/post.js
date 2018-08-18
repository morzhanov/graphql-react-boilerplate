import gql from 'graphql-tag'
import { PostType } from '../types/post'

export const GET_POST = gql`
  mutation GetPost() {
    getPost(): PostType
  }
`

export const GET_POSTS = gql`
  mutation GetPosts($id: number) {
    getPosts(id: $id): [PostType]
  }
`
