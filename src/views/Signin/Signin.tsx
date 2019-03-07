import React, { useState } from 'react'
import logo from '../../assets/images/tracker.svg'
import { Input, Button } from '../../components'
import './index.css'
import { AuthParams } from '../../common/types'

interface SigninProps {
  devices: any
  signinUser: ({ username, password }: AuthParams) => void
}

const Signin: React.SFC<SigninProps> = props => {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  const signinUser = () => props.signinUser({ username, password })

  return (
    <div className="Signin">
      <div className="Signin__left">Je</div>
      <div className="Signin__right">
        <img src={logo} alt="logo" />
        <form
          onSubmit={() => props.signinUser({ username, password })}
          className="Signin__form"
        >
          <Input placeholder="username" type="text" onChange={setUsername} />
          <Input
            onChange={setPassword}
            placeholder="password"
            type="password"
          />
          <Button secondary label="Sign In" onClick={signinUser} />
        </form>
        <div className="Signin__description">Forgot password?</div>
      </div>
    </div>
  )
}

export default Signin
