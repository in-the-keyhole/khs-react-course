import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

const element = (
  <div>
    <App />
  </div>
)
ReactDOM.render(element, document.getElementById('root'))
