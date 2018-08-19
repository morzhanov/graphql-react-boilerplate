import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import SignInButton from './common/SignInButton'
import AuthForm from './common/AuthForm'

const AuthWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AuthHeader = styled.div`
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  h1 {
    text-align: center;
    width: 100%;
    color: #4877bf;
    font-family: Helvetica, sans-serif;
  }
`

export const AUTH_TYPE_LOGIN = 0
export const AUTH_TYPE_REGISTER = 1

@inject('rootStore')
@inject('routerStore')
@observer
class Auth extends React.Component {
  constructor(props) {
    super(props)

    console.log(this.props)

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
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="Email: "
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={this.state.pwd}
            onChange={this.handlePwdChange}
            placeholder="Password: "
          />
          <SignInButton onClick={this.performAuth}>
            Sign {this.state.type === AUTH_TYPE_LOGIN ? ' In' : ' Up'}
          </SignInButton>
        </AuthForm>
      </AuthWrapper>
    )
  }
}

export default Auth
