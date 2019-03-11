import React from 'react'
import styles from './theme.module.css'

interface MeProps {
  signoutUser: () => any
}
const Me: React.SFC<MeProps> = props => {
  return (
    <div className={styles.container}>
      <div onClick={props.signoutUser} className={styles.signout}>
        Sign out
      </div>
    </div>
  )
}

export default Me
