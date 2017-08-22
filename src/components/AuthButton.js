import React from 'react'
import { isLoggedIn, logout } from '../services/authService'
import { Link, withRouter } from 'react-router-dom'

// withRouter lets you decorate components with context
const AuthButton = withRouter(
  ({ history }) =>
    isLoggedIn()
      ? <button onClick={() => logout(() => history.push('/'))}>Logout</button>
      : <Link to={`/login`}>
          <button>Login</button>
        </Link>
)

export default AuthButton
