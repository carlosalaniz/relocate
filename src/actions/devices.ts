import { DeviceParams, Device, IDParam } from '../common/types'
import { DEVICE } from '../common/constants'

export const createDevice = ({ id, name }: DeviceParams) => ({
  type: DEVICE.CREATE,
  id,
  name
})

export const cretaDeviceSuccess = (device: Device) => ({
  type: DEVICE.CREATE_SUCCESS,
  payload: device
})

export const cretaDeviceFailed = (data: string) => {
  return {
    type: DEVICE.CREATE_FAILED,
    payload: data
  }
}

export const getAllDevices = () => ({
  type: DEVICE.GET_ALL
})

export const getAllDevicesSuccess = (data: Device[]) => ({
  type: DEVICE.GET_ALL_SUCCESS,
  payload: data
})

export const getAllDevicesFailed = (data: string) => {
  return {
    type: DEVICE.GET_ALL_FAILED,
    payload: data
  }
}

export const deleteDevice = ({ id }: IDParam) => ({
  type: DEVICE.DELETE,
  id
})

export const devicePositionUpdate = (data: any) => ({
  type: DEVICE.POSITION_UPDATE,
  id: data.device_id,
  lat: data.lat,
  lng: data.lng
})
