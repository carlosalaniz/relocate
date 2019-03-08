import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { Device } from '../../../common/types'
import { DeviceItem } from '../../../components'

interface IProps {
  devices: Device[]
  tabStatus: string
}
const Posed = posed.div({
  transition: {
    duration: 400,
    ease: 'linear'
  }
})

const Devices: React.SFC<IProps> = props => {
  if (props.devices.length === 0 && props.tabStatus === 'all') {
    return (
      <div className="listdevices__empty">
        <div className="listdevices__empty-content">
          No items found. Click on add to add new elements.
        </div>
      </div>
    )
  }
  return (
    <div className="listdevices">
      <PoseGroup>
        {props.devices.map((device: Device) => (
          <Posed key={device.id}>
            <DeviceItem
              key={device.id}
              id={device.id}
              name={device.name}
              linked={device.linked}
            />
          </Posed>
        ))}
      </PoseGroup>
    </div>
  )
}

export default Devices