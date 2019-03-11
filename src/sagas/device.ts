import { takeEvery, call, put } from 'redux-saga/effects'
import { DEVICE } from '../common/constants'
import { DeviceParams, IDParam } from '../common/types'
import { createDevice, getAllDevices, deleteDevice } from '../connectivity'
import store from '../store'
import {
  cretaDeviceSuccess,
  cretaDeviceFailed,
  getAllDevicesSuccess,
  getAllDevicesFailed
} from '../actions/devices'

function* handleDeviceCreate(action: any) {
  try {
    const device = yield call(createDevice, {
      id: action.id,
      name: action.name
    } as DeviceParams)
    yield put(cretaDeviceSuccess(device))
  } catch (error) {
    yield put(cretaDeviceFailed(error.toString()))
  }
}

function* handleDeviceGetAll() {
  try {
    const devices = yield call(getAllDevices)
    yield put(getAllDevicesSuccess(devices))
  } catch (error) {
    yield put(getAllDevicesFailed(error.toString()))
  }
}

function* handleDeviceDelete(action: any) {
  const state = store.getState()
  const devices = state.devices.data
  const nextDevices = devices.filter(device => device.id !== action.id)
  try {
    yield put(getAllDevicesSuccess(nextDevices))
    yield call(deleteDevice, { id: action.id } as IDParam)
  } catch (error) {
    console.log(error.toString())
  }
}

export default function* watchDeviceActions() {
  yield takeEvery(DEVICE.CREATE, handleDeviceCreate)
  yield takeEvery(DEVICE.GET_ALL, handleDeviceGetAll)
  yield takeEvery(DEVICE.DELETE, handleDeviceDelete)
}
