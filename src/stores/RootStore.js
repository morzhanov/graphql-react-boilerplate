import { types } from 'mobx-state-tree';
import { UserModel } from '../models/UserModel';

export const RootStore = types.model('RootStore', {
  user: types.optional(types.maybe(UserModel), null)
});

export type RootStore = typeof RootStore.Type;
