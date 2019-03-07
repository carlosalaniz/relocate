import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './deviceItem.module.css'

interface IProps {
  id: string
  linked?: boolean
  name?: string
  avatar?: string
}

const DeviceItem: React.SFC<IProps> = props => {
  return (
    <div className={styles.container} key={props.id}>
      <NavLink to={`/device/${props.id}`} className={styles.header}>
        {props.id}
      </NavLink>
      {props.linked ? (
        <div className={styles.linked}>Linked</div>
      ) : (
        <div className={styles.unlinked}>Unlinked</div>
      )}
    </div>
  )
}

export default DeviceItem
