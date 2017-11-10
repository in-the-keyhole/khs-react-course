import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'
import './login-styles.css'
import { authenticate } from '../services/authService'

/**
 * this is a container component, as it 
 * handles state and merely passes props down to its children
 */
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectToReferrer: false,
      loginError: false
    }
  }

  // hooray for async/await
  login = async values => {
    try {
      await authenticate(values)
      this.setState(() => ({ redirectToReferrer: true, loginError: false }))
    } catch (e) {
      this.setState(() => ({ loginError: e }))
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer, loginError } = this.state

    // prefer ternaries - they require you to handle else
    // in react, this is preferred so you explicity return
    // what react is expecting (components/objects)
    return redirectToReferrer
      ? <Redirect to={from} />
      : <div>
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/images/logo.gif`}
            alt=""
          />
          <div id="page-wrap">
            {loginError &&
              <div>
                <p className="text-danger">Username or password is invalid.</p>
                <p className="text-info">
                  Hint: username/password => jdoe/password
                </p>
              </div>}
            <LoginForm
              login={this.login}
              user={{ username: 'jdoe', password: 'password' }}
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
  }
}
