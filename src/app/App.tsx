import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserState } from '../common/types'
import { Navbar } from '../components'
import { Signin } from '../views'
import { Map, Devices, Vehicles, Device } from '../views'

interface AppProps {
  user: UserState
  getAllDevices: () => any
}

const App: React.SFC<AppProps> = props => {
  const logged = props.user.logged
  useEffect(() => {
    props.getAllDevices()
  }, [])
  return (
    <>
      {logged ? (
        <div>
          <Navbar />
          <Switch>
            <Route path="/device/:id" component={Device} />
            <Route path="/devices" component={Devices} />
            <Route path="/vehicles" component={Vehicles} />
            <Route path="/" component={Map} exact />
          </Switch>
        </div>
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
