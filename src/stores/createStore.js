import { History } from 'history'
import { RootStore } from './RootStore'
import { RouterStore } from './RouterStore'
import { UserModel } from '../models/UserModel'

export function createStores(history) {
  const user = UserModel.create({ email: '', id: 0 })
  const rootStore = RootStore.create({ user: user, posts: [] })
  const routerStore = new RouterStore(history)
  return {
    rootStore,
    routerStore
  }
}
