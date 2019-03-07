import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import DeviceNav from './DeviceNav'
import { Device as IDevice, IDParam } from '../../common/types'
import styles from './theme.module.css'

interface MatchParams {
  id: string
}

interface DeviceProps extends RouteComponentProps<MatchParams> {
  devices: IDevice[]
  deleteDevice: ({ id }: IDParam) => any
}

const Device: React.SFC<DeviceProps> = props => {
  const id: string = props.match.params.id
  const devicesMatch = props.devices.filter(device => device.id === id)
  const device: IDevice = devicesMatch[0]
  const deleteDevice = () => {
    props.deleteDevice({ id })
    props.history.push('/devices')
  }
  return (
    <div>
      <div className={styles.portada}>
        <div>
          <img className={styles.avatar} src={device.avatar} />
          <div className={styles.name}>{device.name}</div>
          <div className={styles.id}>{device.id}</div>
        </div>
      </div>
      <DeviceNav deleteDevice={deleteDevice} />
    </div>
  )
}

export default withRouter(Device)
