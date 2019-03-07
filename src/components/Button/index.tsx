import React from 'react'
import classNames from 'classnames'

import styles from './theme.module.css'

interface ButtonProps {
  onClick: () => any
  label: string
  primary?: any
  secondary?: any
}

const Button: React.SFC<ButtonProps> = props => {
  const btnClass = classNames({
    [styles.button]: true,
    [styles.primary]: !!props.primary,
    [styles.secondary]: !!props.secondary
  })
  return (
    <button
      onClick={e => {
        e.preventDefault()
        props.onClick()
      }}
      className={btnClass}
    >
      {props.label}
    </button>
  )
}

export default Button
