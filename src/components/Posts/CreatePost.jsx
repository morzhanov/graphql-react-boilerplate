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

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const paperStyles = {
  width: '80%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: 24
}

const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
  font-weight: bold;
`

const Textarea = styled.textarea`
  width: 70%;
  height: 70%;
  padding: 24px;
  font-size: 24px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  resize: none;
`

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
      <ProfileWrapper>
        <Header />
        <Paper style={paperStyles}>
          <Heading>Add new post</Heading>
          <Textarea onChange={this.onContentChanged} value={this.state.value} />

          <Button style={newPostButtonStyles} onClick={this.add}>
            Add
          </Button>
        </Paper>
      </ProfileWrapper>
    )
  }
}

export default Posts
