import { userStore, UserModel } from './auth.store'

export interface Model {
  userStore: UserModel
}

export const models: Model = {
  userStore
}
