import * as React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Paper } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Header from '../common/Header'
import { Urls } from '../../router/routeUrls'
import { PaperWrapper } from '../common/PaperWrapper'
import { Heading } from '../common/Heading'
import { Textarea } from './parts/Textarea'
import { Mutation } from 'react-apollo'
import { ADD_POST } from '../../graphql/mutations/post'

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
class CreatePost extends React.Component {
  state = { value: '' }

  onContentChanged = e => this.setState({ value: e.target.value })

  onAdded = () => {
    window.alert('Successfully added new post')
    this.props.routerStore.push(Urls.posts.all)
  }

  onError = e => window.alert(e)

  render() {
    const { rootStore } = this.props
    const email = rootStore.user.email
    return (
      <Mutation
        mutation={ADD_POST}
        onCompleted={this.onAdded}
        onError={this.onError}
      >
        {(addPost, { data }) => (
          <PaperWrapper>
            <Header />
            <Paper style={paperStyles}>
              <Heading>Add new post</Heading>
              <Textarea
                onChange={this.onContentChanged}
                value={this.state.value}
              />
              <Button
                style={newPostButtonStyles}
                onClick={() =>
                  addPost({ variables: { content: this.state.value } })
                }
              >
                Add
              </Button>
            </Paper>
          </PaperWrapper>
        )}
      </Mutation>
    )
  }
}

export default CreatePost
