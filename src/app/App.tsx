import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserState, DevicesState } from '../common/types'
import { Signin } from '../views'
import { Loader } from '../components'
import Authenticated from './Authenticated'

interface AppProps {
  user: UserState
  devices: DevicesState
  getAllDevices: () => void
}

const App: React.SFC<AppProps> = props => {
  const logged = props.user.logged || !!localStorage.getItem('user')
  const userLoading = props.user.loading
  return (
    <>
      {logged ? (
        <Authenticated {...props} />
      ) : userLoading ? (
        <Loader />
      ) : (
        <div>
          <Switch>
            <Route path="/" component={Signin} />
          </Switch>
        </div>
      )}
    </>
  )
}

export default App
