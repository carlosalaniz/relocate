import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/tracker.svg'
import logoWhite from '../../assets/images/logo-white.svg'
import logoColor from '../../assets/images/logo-color.svg'
import { Input, Button } from '../../components'
import './index.css'
import { AuthParams, UserState } from '../../common/types'
import user from '../../reducers/user'

interface SigninProps {
  user: UserState
  signinUser: ({ username, password }: AuthParams) => void
}

const Signin: React.SFC<SigninProps> = props => {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  const [showError, setShowError] = useState(!!props.user.error)
  const signinUser = () => props.signinUser({ username, password })
  useEffect(() => {
    showError &&
      setTimeout(() => {
        setShowError(false)
      }, 3000)
  })
  return (
    <div className="Signin">
      <div className="Signin__left">
        <img src={logoWhite} alt="logo" />
      </div>
      <div className="Signin__right">
        <img src={logoColor} alt="logo" />
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
        {showError && <div className="errormsg">{props.user.error}</div>}
        <div className="Signin__description">Forgot password?</div>
      </div>
    </div>
  )
}

export default Signin
