import React from 'react'
import styles from './theme.module.css'

interface PinProps {
  avatar: string
}

const Pin: React.SFC<PinProps> = props => {
  return (
    <div>
      <div className={styles.pin}>
        <img className={styles.avatar} src={props.avatar} alt="avatar" />
      </div>
      <div className={styles.pulse} />
      <div className={styles.wave} />
    </div>
  )
}

export default Pin
