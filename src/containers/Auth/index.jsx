import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Query, graphql } from 'react-apollo'
import Header from '../../components/Header'
import Container from '../../components/Container'
import { RootStore } from '../../stores/RootStore'
import AUTH_QUERY from '../../graphql/queries/auth.gql'

@inject('rootStore')
@observer
class Auth extends React.Component {
  render() {
    const { rootStore } = this.props
    return Auth
  }
}

export default Auth
