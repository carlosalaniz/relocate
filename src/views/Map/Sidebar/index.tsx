import React, { useContext } from 'react'
import { GoogleMapContext } from 'gomap'
import Item from '../Item'
import { Device } from '../../../common/types'
import styles from './theme.module.css'

interface SidebarProps {
  devices: Device[]
}
const Sidebar: React.SFC<SidebarProps> = props => {
  const { state } = useContext(GoogleMapContext)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Devices</div>
      </div>
      <div>
        {props.devices.map((device: Device) => (
          <Item
            onClick={() => {
              state.map && state.map.setZoom(18)
              state.map && state.map.panTo(device.position)
            }}
            key={device.id}
            avatar={device.avatar}
            name={device.name}
            id={device.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
