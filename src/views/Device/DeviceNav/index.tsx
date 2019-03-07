import React from 'react'
import styles from './theme.module.css'

interface IProps {
  deleteDevice: () => any
}

const DeviveNav: React.SFC<IProps> = props => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <div className={styles.activeTabLink}>Information</div>
        <div className={styles.tablink}>Positions</div>
        <div className={styles.tablink}>Settings</div>
      </div>
      <div className={styles.group}>
        <div className={styles.tablink} onClick={() => props.deleteDevice()}>
          Delete
        </div>
      </div>
    </div>
  )
}

export default DeviveNav
