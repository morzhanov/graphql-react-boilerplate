import gql from 'graphql-tag'

export const APP_POST = gql`
  mutation AddPost($content: String!) {
    addPost(content: $content) {
      id
      content
      owner
    }
  }
`

export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $content: String!) {
    updatePost(id: $id, content: $content) {
      id
      content
      owner
    }
  }
`

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      message
      error
    }
  }
`
