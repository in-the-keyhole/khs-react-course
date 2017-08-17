import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Movies from './movie/Movies.js'
import MovieDetail from './movie/MovieDetail.js'

class App extends Component {
  render() {
    const Main = () =>
      <main>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/about/:id" component={MovieDetail} />
        </Switch>
      </main>

    return (
      <div>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
