import React from 'react'
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@material-ui/core'

export const PostsTable = ({ posts }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>id</TableCell>
        <TableCell>Content</TableCell>
        <TableCell>Owner</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {posts.map(post => {
        return (
          <TableRow key={post.id}>
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.content}</TableCell>
            <TableCell>{post.owner}</TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  </Table>
)
