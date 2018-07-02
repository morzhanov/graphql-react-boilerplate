import * as React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { RootStore } from '../../stores/RootStore';

const Wrapper = styled.div`
  display: flex;
  height: calc(100% - 64px);
  width: 100%;
  color: #348599;
  font-size: 16px;
  font-weight: bold;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Container = ({
  rootStore,
  content
}: {
  // we should mark this as optional because ts
  // currently not supports mobx injects
  rootStore?: RootStore;
  content: string;
}) => (
  <Wrapper>
    {content}
    {rootStore && rootStore.user && rootStore.user.name}
  </Wrapper>
);

export default inject('rootStore')(observer(Container));
