import React, { useState } from 'react'
import Modal from 'react-modal'
import DevicesList from './DevicesList'
import { Device } from '../../common/types'
import CreateDevice from './CreateDevice'
import DevicesNav from './DevicesNav'
import './index.css'

interface IProps {
  devices: Device[]
  createDevice: (device: Device) => any
}
interface IState {
  modalStatus: boolean
  tabStatus: string
}

const Devices = (props: any) => {
  const [modalStatus, setModalStatus] = useState(false)

  const turnOnModal = () => setModalStatus(true)
  const turnOffModal = () => setModalStatus(false)

  return (
    <div>
      <Modal
        className="Modal"
        overlayClassName="Overlay"
        onRequestClose={() => turnOffModal()}
        isOpen={modalStatus}
        ariaHideApp={false}
      >
        <CreateDevice
          closeModal={turnOffModal}
          createDevice={props.createDevice}
        />
      </Modal>
      <DevicesList openModal={turnOnModal} devices={props.devices} />
    </div>
  )
}

export default Devices
