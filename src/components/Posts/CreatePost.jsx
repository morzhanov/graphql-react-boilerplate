import * as React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import {
  Paper,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@material-ui/core'
import { Button } from '@material-ui/core'
import Header from '../common/Header'
import { Urls } from '../../router/routeUrls'
import { PaperWrapper } from '../common/PaperWrapper'
import { Heading } from '../common/Heading'
import { Textarea } from './parts/Textarea'

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
  fontWeight: 'bold',
  width: 200
}

@inject('rootStore')
@inject('routerStore')
@observer
class Posts extends React.Component {
  state = { value: '' }

  onContentChanged = e => this.setState({ value: e.target.value })

  add = () => this.props.routerStore.push(Urls.posts.new)

  render() {
    const { rootStore } = this.props
    const email = rootStore.user.email
    return (
      <PaperWrapper>
        <Header />
        <Paper style={paperStyles}>
          <Heading>Add new post</Heading>
          <Textarea onChange={this.onContentChanged} value={this.state.value} />

          <Button style={newPostButtonStyles} onClick={this.add}>
            Add
          </Button>
        </Paper>
      </PaperWrapper>
    )
  }
}

export default Posts
