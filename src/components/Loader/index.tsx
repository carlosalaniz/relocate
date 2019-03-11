import React from 'react'
import styles from './theme.module.css'

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.bounce1} />
        <div className={styles.bounce2} />
      </div>
    </div>
  )
}

export default Loader
