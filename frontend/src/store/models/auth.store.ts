import { Action, action, Computed, computed } from 'easy-peasy'

type User = {
  code: string
  intership: string
  photo: string | null
  status: string
  username: string
}

interface UserState {
  isAuth: Computed<this>
  user: User
}

interface UserAction {
  setUser: Action<UserState, User>
}

export interface UserModel extends UserState, UserAction {}

const userState: UserState = {
  isAuth: computed(state => !!state.user),
  user: JSON.parse(localStorage.getItem('user')!) || null
}

const userAction: UserAction = {
  setUser: action((state, payload) => {
    state.user = payload
  })
}

export const userStore: UserModel = {
  ...userState,
  ...userAction
}
