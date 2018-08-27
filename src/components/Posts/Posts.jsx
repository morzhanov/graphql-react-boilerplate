import * as React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Query } from 'react-apollo'
import { Paper } from '@material-ui/core'
import { Urls } from '../../router/routeUrls'
import { Button } from '@material-ui/core'
import Header from '../common/Header'
import { PaperWrapper } from '../common/PaperWrapper'
import { Heading } from '../common/Heading'
import { GET_POSTS } from '../../graphql/queries/post'
import { PostsTable } from './parts/PostsTable'

const paperStyles = {
  width: '80%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: 24
}

const newPostButtonStyles = {
  marginTop: 40,
  width: 200,
  fontWeight: 'bold'
}

@inject('rootStore')
@inject('routerStore')
@observer
class Posts extends React.Component {
  addNew = () => this.props.routerStore.push(Urls.posts.new)

  render() {
    const { rootStore } = this.props
    const email = rootStore.user.email
    return (
      <PaperWrapper>
        <Header />
        <Paper style={paperStyles}>
          <Heading>Posts</Heading>
          <Query query={GET_POSTS}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>
              if (error) return <div>An error occured: {error.message}</div>
              if (data)
                return (
                  <>
                    <PostsTable posts={data.posts} />
                    <Button style={newPostButtonStyles} onClick={this.addNew}>
                      Add new Post
                    </Button>
                  </>
                )
            }}
          </Query>
        </Paper>
      </PaperWrapper>
    )
  }
}

export default Posts
