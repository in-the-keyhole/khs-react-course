import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'
import './login-styles.css'
import { authenticate } from '../services/authService'

export default class Login extends Component {
  state = {
    redirectToReferrer: false,
    loginError: false
  }

  login = values => {
    authenticate(values)
      .then(() => {
        this.setState(() => ({ redirectToReferrer: true, loginError: false }))
      })
      .catch(() => this.setState(() => ({ loginError: true })))
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer, loginError } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/images/logo.gif`}
          alt=""
        />
        <div id="page-wrap">
          {loginError &&
            <p className="text-danger">Username or password is invalid.</p>}
          <LoginForm
            login={this.login}
            user={{ username: 'react', password: 'course' }}
          />
        </div>

        <div id="bg">
          <img
            src={`${process.env
              .PUBLIC_URL}/images/backdrops/login-backdrop.jpg`}
            alt=""
          />
        </div>
      </div>
    )
  }
}
