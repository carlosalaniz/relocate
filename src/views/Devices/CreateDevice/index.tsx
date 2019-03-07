import React, { useState } from 'react'
import { Input, Button } from '../../../components'
import { DeviceParams } from '../../../common/types'
import styles from './theme.module.css'

interface IProps {
  createDevice: ({ id, name }: DeviceParams) => any
  closeModal: () => any
}

const AddVehicle: React.SFC<IProps> = props => {
  const desc =
    'Type here the name of the vehicle. This value will be showed up as identifier for the vehicle over the map.'
  let [id, setId] = useState('')
  let [name, setName] = useState('')
  const createDevice = () => props.createDevice({ id, name })
  return (
    <form className={styles.container}>
      <div className={styles.header}>Add Device</div>
      <div className={styles.fields}>
        <Input label="ID" type="text" onChange={setId} />
        <Input label="Name" type="text" onChange={setName} />
      </div>
      <div className={styles.description}>{desc}</div>
      <div className={styles.footer}>
        <Button label="Cancel" onClick={props.closeModal} />
        <Button primary label="Complete" onClick={createDevice} />
      </div>
    </form>
  )
}
export default AddVehicle
