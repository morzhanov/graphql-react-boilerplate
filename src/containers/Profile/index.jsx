import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import { RootStore } from '../../stores/RootStore'

const Profile = ({ rootStore }) => (
  <>
    <Header title="Profile" />
    <Container content={rootStore.user.name || ''} />
  </>
)

export default inject('rootStore')(observer(Profile))
