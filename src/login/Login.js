import React, { Component } from 'react'
import LoginForm from './LoginForm'

import './login-styles.css'

export default class Login extends Component {
  render() {
    return (
      <div>
        <img class="logo" src={`${process.env.PUBLIC_URL}/images/logo.gif`} />
        <div className="login-body">
          <div className="login-content">
            <LoginForm user={{ username: '', password: '' }} />
          </div>
        </div>
      </div>
    )
  }
}
