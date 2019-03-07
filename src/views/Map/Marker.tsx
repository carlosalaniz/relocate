import React, { useState } from 'react'
import { InfoWindow, OverlayView } from 'gomap'
import { InfoBox, Pin } from '../../components'

interface MarkerProps {
  id: string
  position: google.maps.LatLngLiteral
  avatar: string
  name: string
}

const Marker: React.SFC<MarkerProps> = props => {
  const { position } = props
  const [infoDisplay, setInfoDisplay] = useState(false)
  const changeInfoDisplay = () => setInfoDisplay(display => !display)

  return (
    <>
      <OverlayView
        position={position}
        onClick={changeInfoDisplay}
        disableMapHitsAndGestures={true}
      >
        <Pin avatar={props.avatar} />
      </OverlayView>
      <InfoWindow
        id={props.id}
        opts={{ position }}
        visible={infoDisplay}
        onCloseClick={() => setInfoDisplay(false)}
      >
        <InfoBox name={props.name} avatar={props.avatar} position={position} />
      </InfoWindow>
    </>
  )
}

export default Marker
