import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './theme.module.css'

const Navlink = (props:any) => (
  <NavLink 
    exact={props.exact}
    activeStyle={{color: '#333'}}
    className={styles.navlink}  
    to={props.to}>{props.children}
  </NavLink>
)

export default Navlink