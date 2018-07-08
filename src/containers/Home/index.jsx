import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import { RootStore } from 'stores/RootStore'
import { Query } from 'react-apollo'
import { LOGGED_IN_USER_QUERY } from 'graphql/queries'

const Home = ({ rootStore }) => (
  <Query query={LOGGED_IN_USER_QUERY}>
    <Header title="Home" />
    <Container content="Home page content" />
    {rootStore.user.name || ''}
  </Query>
)

export default inject('rootStore')(
  observer(
    graphql(LOGGED_IN_USER_QUERY, {
      name: 'loggedInUserQuery',
      options: { fetchPolicy: 'network-only' }
    })(Home)
  )
)
