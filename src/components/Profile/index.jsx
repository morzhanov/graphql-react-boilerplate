import * as React from 'react'
import { inject, observer } from 'mobx-react'

const Profile = ({ rootStore }) => <></>

export default inject('rootStore')(observer(Profile))
