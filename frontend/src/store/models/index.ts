import { userStore, UserStoreModel } from './user.store'

export interface Model {
  userStore: UserStoreModel
}

export const models: Model = {
  userStore
}
