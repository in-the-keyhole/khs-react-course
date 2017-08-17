import React, { Component } from 'react'
import '../App.css'
import Header from './MovieHeader.js'
import MovieList from './MovieList'
import api from '../api/instance'
class Movies extends Component {
  static searchText = 'a'

  static state = { movies: null }

  componentDidMount() {
    this.movieList()
  }

  search = e => {
    if (e.key === 'Enter') {
      Movies.searchText = e.target.value
      this.movieList()
    }
  }

  movieList = async () => {
    try {
      const response = await api.get('nowPlaying')
      const { results: movies } = response.data
      this.setState(() => {
        return { movies }
      })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    if (this.state && this.state.movies) {
      // Return HTML Display Header and Items
      // movies are passed as props to movielist because it doesn't handle any state
      // it can be functional and also handle when no results are displayed (i.e. !movies)
      return (
        <div className="movie-container" onKeyUp={this.search}>
          <Header searchText={Movies.searchText} />
          <MovieList movies={this.state.movies} />
        </div>
      )
    }
    return <div>Nothing for now.</div>
  }
}

export default Movies
