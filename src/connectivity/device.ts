import axios from 'axios'
import { DeviceParams, IDParam } from '../common/types'
import { API_URI } from '../common/constants'

export async function createDevice(props: DeviceParams) {
  const { id, name } = props
  const { data }: any = await axios.post(`${API_URI}/devices`, {
    id,
    name
  })
  if (data.error) {
    throw new Error(data.message)
  }
  return data.device
}

export async function getAllDevices() {
  const { data } = await axios.get(`${API_URI}/devices`)
  if (data.error) {
    throw new Error(data.message)
  }
  return data.devices
}

export async function deleteDevice(props: IDParam) {
  const { id } = props
  const { data }: any = await axios.delete(`${API_URI}/devices/${id}`)
  if (data.error) {
    throw new Error('Something went wrong removing device')
  }
  return
}
