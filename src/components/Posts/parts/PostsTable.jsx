import React from 'react'
import styled from 'styled-components'
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@material-ui/core'

const TableWrapper = styled.div`
  width: 100%;
  height: 70%;
  overflow-y: scroll;
`

export const PostsTable = ({ posts }) => (
  <TableWrapper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Owner</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {posts.map(post => (
          <TableRow key={post.id}>
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.content}</TableCell>
            <TableCell>{post.owner}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableWrapper>
)
