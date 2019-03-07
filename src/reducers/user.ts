import { USER } from '../common/constants'
import { UserState } from '../common/types'

const initialState: UserState = {
  logged: false
}

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case USER.SIGNIN_SUCCESS:
      return { ...state, logged: true, profile: action.payload }
    case USER.SIGNIN_FAILED:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default user
