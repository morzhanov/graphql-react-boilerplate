import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { Urls } from '../../router/routeUrls'
import { Button, Input, Link } from '@material-ui/core'
import AuthHeader from './parts/AuthHeader'
import AuthWrapper from './parts/AuthWrapper'
import ChangeTypeLink from './parts/ChangeTypeLink'
import AuthForm from './parts/AuthForm'
import { Mutation } from 'react-apollo'
import { LOGIN, REGISTER } from '../../graphql/mutations/auth'
import { Validator } from '../../utils/heplers'

export const AUTH_TYPE_LOGIN = 0
export const AUTH_TYPE_REGISTER = 1

@inject('rootStore')
@inject('routerStore')
@observer
class Auth extends React.Component {
  constructor(props) {
    super(props)
    const { location } = this.props
    const type =
      location.pathname.indexOf('login') >= 0
        ? AUTH_TYPE_LOGIN
        : AUTH_TYPE_REGISTER
    this.state = {
      email: '',
      password: '',
      type: type
    }
  }

  onAuthorized = ({ login }) => {
    console.log('data  = ', login)
    localStorage.setItem('accessToken', login.accessToken)
    localStorage.setItem('refreshToken', login.refreshToken)
    this.props.routerStore.push(Urls.home)
  }

  onAuthorizationError = error => {
    window.alert(error)
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  handlePwdChange = e => {
    this.setState({ pwd: e.target.value })
  }

  render() {
    const { rootStore } = this.props
    return (
      <AuthWrapper>
        <Mutation
          mutation={this.state.type === AUTH_TYPE_LOGIN ? LOGIN : REGISTER}
          onCompleted={this.onAuthorized}
          onError={this.onAuthorizationError}
        >
          {(auth, { data }) => (
            <>
              <AuthHeader>
                <h1>Auth</h1>
              </AuthHeader>
              <AuthForm>
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  placeholder="Enter email*"
                />
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handlePwdChange}
                  placeholder="Enter password*"
                />
                <Button
                  style={{
                    marginTop: 24,
                    background: '#4877bf',
                    height: 40,
                    color: '#fff'
                  }}
                  onClick={() =>
                    auth({
                      variables: {
                        email: this.state.email,
                        password: this.state.password
                      }
                    })
                  }
                >
                  Sign {this.state.type === AUTH_TYPE_LOGIN ? ' In' : ' Up'}
                </Button>
                <ChangeTypeLink
                  href={
                    this.state.type === AUTH_TYPE_LOGIN
                      ? Urls.auth.register
                      : Urls.auth.login
                  }
                >
                  Go to Sign{this.state.type === AUTH_TYPE_LOGIN ? 'Up' : ' In'}
                </ChangeTypeLink>
              </AuthForm>
            </>
          )}
        </Mutation>
      </AuthWrapper>
    )
  }
}

export default Auth
