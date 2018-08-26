import * as React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { Button, Paper } from '@material-ui/core'
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
  justifyContent: 'center'
}

const Id = styled.p`
  margin-top: 10px;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: #ffffff;
`

const Email = styled.p`
  margin-top: 10px;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: #ffffff;
`

const logoutButtonStyles = {
  fontSize: 16,
  background: '#aaa',
  padding: '0 8',
  height: 40,
  width: 120
}

@inject('rootStore')
@observer
class Profile extends React.Component {
  logOut = () => {}

  render() {
    const { rootStore } = this.props
    const email = rootStore.user.email
    return (
      <ProfileWrapper>
        <Header />
        <Paper style={paperStyles}>
          <Id className="name">{email}</Id>
          <Email className="name">{email}</Email>
          <Button style={logoutButtonStyles} onClick={this.logOut}>
            Log out
          </Button>
        </Paper>
      </ProfileWrapper>
    )
  }
}

export default Profile
