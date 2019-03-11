export interface Device {
  id: string
  name: string
  linked?: boolean
  avatar?: string
  position?: google.maps.LatLngLiteral
}

export interface DeviceParams {
  id: string
  name: string
}

export interface ApplicationState {
  devices: DevicesState
  user: UserState
}

export interface DevicesState {
  data: Device[]
  loading?: boolean
}

export interface UserState {
  logged: boolean
  error?: string
  profile?: Profile
  loading?: boolean
}

export interface Profile {
  id?: string
  username: string
  avatar: string
}

export interface AuthParams {
  username: string
  password: string
}

export interface IDParam {
  id: string
}
