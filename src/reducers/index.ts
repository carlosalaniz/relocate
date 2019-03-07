import { combineReducers } from 'redux'
import devicesReducer from './devices'
import { ApplicationState } from '../common/types'
import userReducer from './user'

const rootReducer = combineReducers<ApplicationState>({
  devices: devicesReducer,
  user: userReducer
})

export default rootReducer
