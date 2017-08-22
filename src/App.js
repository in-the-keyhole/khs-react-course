import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Movies from './movie/Movies'
import MovieDetail from './movie/MovieDetail'
import Login from './login/Login'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    const Main = () =>
      <Switch>
        <PrivateRoute exact path="/" component={Movies} />
        <PrivateRoute path="/about/:id" component={MovieDetail} />
        <Route path="/login" component={Login} />
        <PrivateRoute component={Movies} />
      </Switch>

    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  }
}

export default App
