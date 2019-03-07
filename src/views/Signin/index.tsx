import SigninComponent from './Signin'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { signinUser } from '../../actions/user'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ signinUser }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(SigninComponent)
