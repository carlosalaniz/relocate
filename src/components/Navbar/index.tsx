import React from 'react'
import Navlink from '../Navlink'
import logo from '../../assets/images/tracker.svg'
import user from '../../assets/images/user3.png'
import styles from './theme.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Navlink to="/">
          <div className={styles.brand}>
            <img src={logo} alt="logo" />
          </div>
        </Navlink>
      </div>
      <div className={styles.center}>
        <Navlink exact to="/">
          Home
        </Navlink>
        <Navlink to="/devices">Devices</Navlink>
        <Navlink to="/vehicles">Vehicles</Navlink>
      </div>
      <div className={styles.right}>
        <Navlink to="/me">
          <div className={styles.user}>
            <img src={user} alt="avatar" />
            <div className={styles.username}>xorb</div>
          </div>
        </Navlink>
      </div>
    </div>
  )
}

export default Navbar
