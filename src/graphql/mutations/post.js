import gql from 'graphql-tag'

export const ADD_POST = gql`
  mutation AddPost($content: String!) {
    addPost(content: $content) {
      id
      content
      owner
    }
  }
`
