import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Header from '../../components/Header';
import Container from '../../components/Container';
import { RootStore } from 'stores/RootStore';
import { Query } from 'react-apollo';
import { LOGGED_IN_USER_QUERY } from 'graphql/queries';

export interface HomeProps {
  rootStore: RootStore;
}

const Home: React.SFC<HomeProps> = ({
  rootStore
}: {
  rootStore: RootStore;
}) => (
  <Query query={LOGGED_IN_USER_QUERY}>
    <Header title="Home" />
    <Container content="Home page content" />
    {(rootStore && rootStore.user && rootStore.user.name) || ''}
  </Query>
);

export default inject('rootStore')(
  observer(
    graphql(LOGGED_IN_USER_QUERY, {
      name: 'loggedInUserQuery',
      options: { fetchPolicy: 'network-only' }
    })(Home)
  )
);
