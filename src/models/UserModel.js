import { types } from 'mobx-state-tree'

export const UserModel = types.model('UserModel', {
  id: types.number,
  email: types.string
})
