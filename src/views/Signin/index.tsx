import SigninComponent from './Signin'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { signinUser } from '../../actions/user'
import { ApplicationState } from '../../common/types'
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ signinUser }, dispatch)
}

const mapStateToProps = (state: ApplicationState) => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninComponent)
