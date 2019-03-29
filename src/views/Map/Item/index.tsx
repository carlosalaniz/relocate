import React from 'react'
import styles from './theme.module.css'

interface ItemProps {
  onClick: () => void
  avatar: string
  name: string
  id: string
}

const Item: React.SFC<ItemProps> = props => {
  return (
    <div onClick={props.onClick} className={styles.item}>
      <div className={styles.itemAvatar}>
        <img src={props.avatar} />
      </div>
      <div className={styles.itemDescription}>
        <div>
          <div className={styles.itemName}>{props.name}</div>
          <div className={styles.itemId}>{props.id}</div>
        </div>
      </div>
    </div>
  )
}

export default Item
