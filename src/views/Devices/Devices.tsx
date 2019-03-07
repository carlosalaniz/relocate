import React, {useState} from 'react'
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

const Devices = (props: any) =>  {
  const [modalStatus, setModalStatus] = useState(false)
  const [tabStatus, setTabStatus] = useState('all')
 
  const turnOnModal = () => setModalStatus(true)
  const turnOffModal = () => setModalStatus(false )
  const switchTab = (name: string) => setTabStatus( name )
  const filterDevices = (devices: Device[]) => {
    switch (tabStatus) {
      case 'linked':
        return devices.filter(device => device.linked === true)
      case 'unlinked':
        return devices.filter(device => device.linked === false)
      default:
        return devices
    }
  }
    const devices = filterDevices(props.devices)
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
        <DevicesNav
          activeTab={tabStatus}
          switchTab={switchTab}
          openModal={turnOnModal}
        />
        <DevicesList tabStatus={tabStatus} devices={devices} />
      </div>
    )
  
}

export default Devices
