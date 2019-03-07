import { connect } from 'react-redux'
import MapComponent from './Map'
import { ApplicationState } from '../../common/types'

const mapStateToProps = (state: ApplicationState) => ({
  devices: state.devices.data
})

export default connect(mapStateToProps)(MapComponent)
