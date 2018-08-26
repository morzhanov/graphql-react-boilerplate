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
