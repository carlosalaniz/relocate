import socketio from 'socket.io-client'
import { Dispatch } from 'redux'
import { devicePositionUpdate } from '../actions/devices'
import { API_URI } from '../common/constants'

const setupSocket = (dispatch: Dispatch) => {
  const io = socketio.connect(API_URI).connect()
  io.on('positions:update', (data: any) => {
    dispatch(devicePositionUpdate(data))
  })
  return io
}

export default setupSocket
