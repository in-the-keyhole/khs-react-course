import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from '../services/authService'

// component taken from https://reacttraining.com/react-router/web/example/auth-workflow
const PrivateRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      isLoggedIn()
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />}
  />

export default PrivateRoute
