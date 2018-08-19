import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { Urls } from '../../router/routeUrls'
import { Button, Input, Link } from '@material-ui/core'
import AuthHeader from './common/AuthHeader'
import AuthWrapper from './common/AuthWrapper'
import ChangeTypeLink from './common/ChangeTypeLink'
import AuthForm from './common/AuthForm'

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

  performAuth = () => {
    if (!EmailValidator.validate(this.state.email)) {
      return MessageManager.addMessage('Please provide valid email address.')
    }

    if (this.state.pwd.length < 5) {
      return MessageManager.addMessage(
        'Password must be at least 5 characters long.'
      )
    }

    this.props.dispatch(loginRequest(this.state.email, this.state.pwd))
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
            onClick={this.performAuth}
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
      </AuthWrapper>
    )
  }
}

export default Auth
