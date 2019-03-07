import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import DeviceComponent from './Device'
import { ApplicationState } from '../../common/types'
import { deleteDevice } from '../../actions/devices'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ deleteDevice }, dispatch)
}

const mapStateToProps = (state: ApplicationState) => ({
  devices: state.devices.data
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceComponent)
