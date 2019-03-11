import React, { useEffect } from 'react'
import { Map, Devices, Vehicles, Device, Me } from '../views'
import { Navbar } from '../components'
import { Switch, Route } from 'react-router-dom'
import { DevicesState } from '../common/types'

import { Loader } from '../components'

interface AuthenticatedProps {
  getAllDevices: () => any
  devices: DevicesState
}

const Authenticated: React.SFC<AuthenticatedProps> = props => {
  useEffect(() => {
    props.getAllDevices()
  }, [])
  if (props.devices.loading) {
    return <Loader />
  }
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/device/:id" component={Device} />
        <Route path="/devices" component={Devices} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/me" component={Me} />
        <Route path="/" component={Map} exact />
      </Switch>
    </div>
  )
}

export default Authenticated
