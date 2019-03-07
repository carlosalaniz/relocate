import React from 'react'
import { Device } from '../../common/types'

interface IProps {
  devices: Device[]
}
const Sidebar: React.SFC<IProps> = props => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__header">
        <div>Devices</div>
      </div>
      <div>
        {props.devices.map(device => (
          <div className="Sidebar__item" key={device.id}>
            <div className="Sidebar__avatar">
              <img src={device.avatar} />
            </div>
            <div className="Sidebar__description">
              <div>
                <div className="Sidebar__name">{device.name}</div>
                <div className="Sidebar_id">{device.id}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
