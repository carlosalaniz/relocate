import { all } from 'redux-saga/effects'
import userSaga from './user'
import deviceSage from './device'

function* sagas() {
  yield all([userSaga(), deviceSage()])
}

export default sagas
