import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import Header from '../../components/Header';
import Container from '../../components/Container';
import { RootStore } from 'stores/RootStore';

export interface MainProps extends RouteComponentProps<any> {}
export interface MainState {}

const Home = ({ rootStore }: { rootStore: RootStore }) => (
  <>
    <Header title="Home" />
    <Container content="Home page content" />
    {(rootStore && rootStore.user && rootStore.user.name) || ''}
  </>
);

export default inject('rootStore')(observer(Home));
