import React from 'react'
import { MapBox } from 'gomap'
import opts from './opts'
import { Device } from '../../common/types'
import Sidebar from './Sidebar'
import Marker from './Marker'
import './index.css'

interface MapProps {
  devices: Device[]
}

const Map: React.SFC<MapProps> = props => {
  return (
    <div className="MapBox__container">
      <Sidebar devices={props.devices} />
      {props.devices.map((device: any) => (
        <Marker
          name={device.name}
          key={device.id}
          avatar={device.avatar}
          id={device.id}
          position={device.position}
        />
      ))}
      <MapBox
        language="es"
        opts={opts}
        apiKey={'AIzaSyBBc8fYj94LhVxUGye7GStSP2E3lWCIgP4'}
        className="MapBox"
      />
    </div>
  )
}

export default Map
