import { USER } from '../common/constants'
import { UserState } from '../common/types'

const initialState: UserState = {
  logged: false,
  loading: false
}

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case USER.SIGNIN:
      return { ...state, loading: true }
    case USER.SIGNIN_SUCCESS: {
      localStorage.setItem('user', action.payload)
      return { ...state, logged: true, profile: action.payload, loading: false }
    }
    case USER.SIGNIN_FAILED:
      return { ...state, error: action.payload, loading: false }
    case USER.SIGNOUT: {
      localStorage.removeItem('user')
      return { ...state, logged: false }
    }

    default:
      return state
  }
}

export default user
