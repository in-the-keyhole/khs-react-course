import React from 'react'
import { isLoggedIn, logout } from '../services/authService'
import { Link, withRouter } from 'react-router-dom'

const AuthButton = withRouter(({ history }) => {
  console.log(history)
  return isLoggedIn()
    ? <button onClick={() => logout(() => history.push('/'))}>Logout</button>
    : <Link to={`/login`}>
        <button>Login</button>
      </Link>
})

export default AuthButton
