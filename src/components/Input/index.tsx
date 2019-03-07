import React from 'react'
import styles from './theme.module.css'

interface InputProps {
  onChange: (value: string) => any
  placeholder?: string
  type: string
  label?: string
}

const Input: React.SFC<InputProps> = props => {
  if (props.label) {
    return (
      <div className={styles.inputGroup}>
        <div className={styles.label}>{props.label}:</div>
        <input
          onChange={e => props.onChange(e.target.value)}
          className={styles.input}
          placeholder={props.placeholder}
          type={props.type}
        />
      </div>
    )
  }
  return (
    <input
      onChange={e => props.onChange(e.target.value)}
      className={styles.input}
      placeholder={props.placeholder}
      type={props.type}
    />
  )
}

export default Input
