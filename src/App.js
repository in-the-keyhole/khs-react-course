import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Movies from './movie/Movies'
import MovieDetail from './movie/MovieDetail'
import Login from './login/Login'

class App extends Component {
  render() {
    const Main = () =>
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/about/:id" component={MovieDetail} />
        <Route path="/login" component={Login} />
        <Route component={Movies} />
      </Switch>

    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  }
}

export default App
