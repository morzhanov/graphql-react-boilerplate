import * as React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import {
  Paper,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@material-ui/core'
import Header from '../common/Header'

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const paperStyles = {
  width: '80%',
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

@inject('rootStore')
@observer
class Posts extends React.Component {
  constructor(props) {
    super(props)
    // TODO remove mocks
    this.rows = [
      {
        id: 0,
        content: 'content 0',
        owner: 1
      },
      {
        id: 1,
        content: 'content 1',
        owner: 1
      },
      {
        id: 2,
        content: 'content 2',
        owner: 2
      },
      {
        id: 3,
        content: 'content 3',
        owner: 3
      },
      {
        id: 4,
        content: 'content 4',
        owner: 4
      }
    ]
  }

  logOut = () => {}

  render() {
    const { rootStore } = this.props
    const email = rootStore.user.email
    return (
      <ProfileWrapper>
        <Header />
        <Paper style={paperStyles}>
          <h1>Posts</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Owner</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.content}</TableCell>
                    <TableCell>{row.owner}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </ProfileWrapper>
    )
  }
}

export default Posts
