import gql from 'graphql-tag'

export const GET_POST = gql`
  mutation GetPost() {
    getPost() {
      id
      content
      owner
    }
  }
`

export const GET_POSTS = gql`
  mutation GetPosts($id: number) {
    getPosts(id: $id) {
      posts {
        id
        content
        owner
      }
    }
  }
`
