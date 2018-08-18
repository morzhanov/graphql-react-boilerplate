import gql from 'graphql-tag'
import { PostType } from '../types/post'
import { SimpleResponse } from '../types/common'

export const APP_POST = gql`
  mutation AddPost($post: PostType) {
    addPost(post: $post): PostType
  }
`

export const UPDATE_POST = gql`
  mutation UpdatePost($post: PostType) {
    updatePost(post: $post): PostType
  }
`

export const DELETE_POST = gql`
  mutation DeletePost($id: number) {
    deletePost(id: $id): SimpleResponse
  }
`
