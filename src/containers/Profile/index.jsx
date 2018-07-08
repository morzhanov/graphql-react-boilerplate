import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Header from '../../components/Header';
import Container from '../../components/Container';
import { RootStore } from '../../stores/RootStore';

const Profile = ({ rootStore }: { rootStore: RootStore }) => (
  <>
    <Header title="Profile" />
    <Container
      content={(rootStore && rootStore.user && rootStore.user.name) || ''}
    />
  </>
);

export default inject('rootStore')(observer(Profile));
