import { types } from 'mobx-state-tree'

export const PostModel = types.model('PostModel', {
  id: types.string,
  content: types.string,
  owner: types.number
})
