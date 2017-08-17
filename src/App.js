import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Movies from './movie/Movies.js'
import MovieDetail from './movie/MovieDetail.js'

class App extends Component {
  render() {
    const Main = () =>
      <div>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/about/:id" component={MovieDetail} />
          <Route component={Movies} />
        </Switch>
      </div>

    return (
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
