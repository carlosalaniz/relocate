import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { signoutUser } from '../../actions/user'
import MeComponent from './Me'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ signoutUser }, dispatch)
}
export default connect(
  null,
  mapDispatchToProps
)(MeComponent)
