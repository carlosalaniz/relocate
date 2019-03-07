import React from 'react'
import styles from './theme.module.css'

interface InfoBoxProps {
  position: google.maps.LatLngLiteral
  avatar: string
  name: string
}

const InfoBox: React.SFC<InfoBoxProps> = props => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img className={styles.avatar} src={props.avatar} />
          <div className={styles.name}>{props.name}</div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.data}>
          <span>Lat: </span> {props.position.lat}
        </div>
        <div className={styles.data}>
          <span>Lng: </span> {props.position.lng}
        </div>
      </div>
    </div>
  )
}

export default InfoBox
