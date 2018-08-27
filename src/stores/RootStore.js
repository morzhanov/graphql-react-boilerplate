import { types } from 'mobx-state-tree'
import { UserModel } from '../models/UserModel'
import { PostModel } from '../models/PostModel'
import { find } from 'lodash'

export const RootStore = types
  .model('RootStore', {
    user: types.optional(types.maybe(UserModel), null),
    posts: types.optional(types.array(PostModel), [])
  })
  .views(self => ({
    getPost(id) {
      return find(self.posts, { id: id })
    },
    getUser() {
      return self.user
    }
  }))
  .actions(self => {
    const setPosts = posts => (self.posts = posts)

    const addPost = post => {
      self.posts.push(post)
    }

    const updateUser = user => {
      user.email && (self.user.email = user.email)
      user.id && (self.user.id = +user.id)
    }

    return { setPosts, addPost, updateUser }
  })
