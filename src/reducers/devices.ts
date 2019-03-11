import { DevicesState } from '../common/types'
import { DEVICE } from '../common/constants'

const initialState: DevicesState = {
  data: [],
  loading: true
}

const devices = (state = initialState, action: any) => {
  switch (action.type) {
    case DEVICE.GET_ALL:
      return { ...state, loading: true }
    case DEVICE.CREATE_SUCCESS:
      return { ...state, data: state.data.concat(action.payload) }
    case DEVICE.POSITION_UPDATE: {
      try {
        const { lat, lng, id } = action
        const position = { lat, lng }
        return {
          ...state,
          data: state.data.map(device => {
            if (device.id === id) {
              return { ...device, position }
            }
            return device
          })
        }
      } catch {
        return state
      }
    }
    case DEVICE.GET_ALL_SUCCESS:
      return { ...state, data: action.payload, loading: false }
    default:
      return state
  }
}

export default devices
