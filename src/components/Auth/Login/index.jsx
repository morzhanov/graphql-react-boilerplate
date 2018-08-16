import * as React from 'react'
import { inject, observer } from 'mobx-react'

@inject('rootStore')
@observer
class Login extends React.Component {
  render() {
    const { rootStore } = this.props
    return <div />
  }
}

export default Login
