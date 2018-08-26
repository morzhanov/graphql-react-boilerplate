import * as React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Query } from 'react-apollo'
import {
  Paper,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@material-ui/core'
import { Urls } from '../../router/routeUrls'
import { Button } from '@material-ui/core'
import Header from '../common/Header'
import { PaperWrapper } from '../common/PaperWrapper'
import { Heading } from './parts/Heading'
import { GET_POSTS } from '../../graphql/queries/post'

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
  constructor(props) {
    super(props)
    // TODO remove mocks
    this.rows = [
      {
        id: 0,
        content: 'content 0',
        owner: 1
      },
      {
        id: 1,
        content: 'content 1',
        owner: 1
      },
      {
        id: 2,
        content: 'content 2',
        owner: 2
      },
      {
        id: 3,
        content: 'content 3',
        owner: 3
      },
      {
        id: 4,
        content: 'content 4',
        owner: 4
      }
    ]
  }

  addNew = () => this.props.routerStore.push(Urls.posts.new)

  renderTable = posts => (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map(post => {
            return (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.content}</TableCell>
                <TableCell>{post.owner}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <Button style={newPostButtonStyles} onClick={this.addNew}>
        Add new Post
      </Button>
    </>
  )

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
              if (data) return this.renderTable(data.posts)
            }}
          </Query>
        </Paper>
      </PaperWrapper>
    )
  }
}

export default Posts
