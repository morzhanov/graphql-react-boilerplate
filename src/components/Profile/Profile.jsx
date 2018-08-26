import * as React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Button, Paper } from '@material-ui/core'
import { Query } from 'react-apollo'
import { GET_USER } from '../../graphql/queries/user'
import { PaperWrapper } from '../common/PaperWrapper'
import Header from '../common/Header'
import { Heading } from '../common/Heading'
import { Id } from './parts/Id'
import { Email } from './parts/Email'

const paperStyles = {
  width: '80%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

@inject('rootStore')
@observer
class Profile extends React.Component {
  state = { email: '', id: '' }

  render() {
    const { rootStore } = this.props
    const email = rootStore.user.email
    return (
      <PaperWrapper>
        <Header />
        <Paper style={paperStyles}>
          <Heading>User data</Heading>
          <Query query={GET_USER}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>
              if (error) return <div>An error occured: {error.message}</div>
              if (data)
                return (
                  <div>
                    <Id className="name">
                      <b>id</b>: {data.user.id}
                    </Id>
                    <Email className="name">
                      <b>Email</b>: {data.user.email}
                    </Email>
                  </div>
                )
            }}
          </Query>
        </Paper>
      </PaperWrapper>
    )
  }
}

export default Profile
