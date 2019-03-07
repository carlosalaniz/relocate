import { takeEvery, call, put } from 'redux-saga/effects'
import { signinUser } from '../connectivity'
import { USER } from '../common/constants'
import { AuthParams } from '../common/types'
import { signinUserSuccess, signinUserFailed } from '../actions/user'

function* handleUserSignin(action: any) {
  try {
    const profile = yield call(signinUser, {
      username: action.username,
      password: action.password
    } as AuthParams)
    yield put(signinUserSuccess(profile))
  } catch (error) {
    yield put(signinUserFailed(error.toString()))
  }
}

export default function* watchUserActions() {
  yield takeEvery(USER.SIGNIN, handleUserSignin)
}
