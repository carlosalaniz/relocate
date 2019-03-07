import { USER } from '../common/constants'
import { AuthParams, Profile } from '../common/types'

export const signinUser = ({ username, password }: AuthParams) => ({
  type: USER.SIGNIN,
  username: username,
  password: password
})

export const signinUserSuccess = (profile: Profile) => ({
  type: USER.SIGNIN_SUCCESS,
  payload: profile
})

export const signinUserFailed = (data: string) => {
  return {
    type: USER.SIGNIN_FAILED,
    payload: data
  }
}
