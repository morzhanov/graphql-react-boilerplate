import { types } from 'mobx-state-tree'

export const UserModel = types.model('UserModel', {
  name: types.maybe(types.string)
})
