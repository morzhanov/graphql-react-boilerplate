import * as React from 'react'
import { inject, observer } from 'mobx-react'

@inject('rootStore')
@observer
class Posts extends React.Component {
  render() {
    return <div />
  }
}

export default Posts
