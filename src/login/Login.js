import React, { Component } from 'react'
import LoginForm from './LoginForm'

import './login-styles.css'

export default class Login extends Component {
  render() {
    return (
      <div>
        <div id="page-wrap">
          <LoginForm user={{ username: 'react', password: 'course' }} />
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
