import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { ApplicationState } from '../../common/types'
import { createDevice } from '../../actions/devices'
import DevicesComponent from './Devices'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      createDevice
    },
    dispatch
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  devices: state.devices.data
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DevicesComponent)
