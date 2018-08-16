import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../common/Header'
import Container from '../common/Container'

const Profile = ({ rootStore }) => (
  <>
    <Header title="Profile" />
    <Container content={rootStore.user.name || ''} />
  </>
)

export default inject('rootStore')(observer(Profile))
