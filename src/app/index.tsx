import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import AppComponent from './App'
import { ApplicationState } from '../common/types'
import { getAllDevices } from '../actions/devices'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ getAllDevices }, dispatch)
}

const mapStateToProps = (state: ApplicationState) => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
