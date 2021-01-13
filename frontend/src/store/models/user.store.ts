import { Action, action } from 'easy-peasy'

type User = {
  code: string
  intership: string
  photo: string | null
  status: string
  username: string
}

interface UserState {
  user: User
}

interface UserAction {
  setUser: Action<UserState, User>
}

export interface UserStoreModel extends UserState, UserAction {}

const userState: UserState = {
  user: JSON.parse(localStorage.getItem('user')!) || null
}

const userAction: UserAction = {
  setUser: action((state, payload) => {
    state.user = payload
  })
}

export const userStore: UserStoreModel = {
  ...userState,
  ...userAction
}
