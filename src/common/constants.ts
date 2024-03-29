export const API_URI = 'https://trackerapi.lapscorp.ml'

export const PE_LATLNG: google.maps.LatLngLiteral = {
  lat: -11.97912,
  lng: -76.98811
}

export const DEVICE = {
  UPDATE: 'DEVICE_UPDATE',
  DELETE: 'DEVICE_DELETE',
  CREATE: 'DEVICE_CREATE',
  CREATE_SUCCESS: 'DEVICE_CREATE_SUCCESS',
  CREATE_FAILED: 'DEVICE_CREATE_FAILED',
  GET_ALL: 'DEVICE_GET',
  GET_ALL_SUCCESS: 'DEVICE_GET_ALL_SUCCESS',
  GET_ALL_FAILED: 'DEVICE_GET_ALL_FAILED',
  POSITION_UPDATE: 'DEVICE_POSITION_UPDATE'
}

export const USER = {
  SIGNIN: 'USER_SIGNIN',
  SIGNIN_SUCCESS: 'USER_SIGNIN_SUCCESS',
  SIGNIN_FAILED: 'SIGNIN_FAILED',
  SIGNUP: 'USER_SIGNUP',
  SIGNOUT: 'USER_SIGNOUT'
}
