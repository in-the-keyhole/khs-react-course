import React, { Component } from 'react'
import '../App.css'
import Header from './MovieHeader.js'
import MovieList from './MovieList'
import api from '../api/instance'

class Movies extends Component {
  constructor(props) {
    super(props)

    this.state = { movies: null, searchText: '', loading: true }
  }

  componentDidMount() {
    this.movieList()
  }

  search = e => {
    const searchText = e.target.value
    this.setState(() => ({
      searchText,
      filteredMovies: this.state.movies.filter(
        movie =>
          movie.title.toLowerCase().match(searchText.toLowerCase()) != null
      )
    }))
  }

  /**
   * find movie and update rating on server
   */
  ratingChanged = async (movie, rating) => {
    // save copy of movie in case update fails
    const oldMovie = movie

    //update rating
    movie.rating = rating

    const { movies } = this.state

    // optimistic update
    this.setState(() => ({
      movies: [
        ...movies.slice(0, movies.indexOf(movie)), // take everything up to (but not including) the target person
        movie, // shove in the update in place
        ...movies.slice(movies.indexOf(movie) + 1) // spread (...) everything after
      ]
    }))

    try {
      let body = JSON.stringify(movie)
      await api.put(`movies/${movie.id}`, body)
    } catch (e) {
      // didn't work, change it back
      this.setState(() => ({
        movies: [
          ...movies.slice(0, movies.indexOf(movie)), // take everything up to (but not including) the target person
          oldMovie, // shove in the update in place
          ...movies.slice(movies.indexOf(movie) + 1) // spread (...) everything after
        ]
      }))
      console.error(e)
    }
  }

  movieList = async () => {
    try {
      const response = await api.get('nowPlaying')
      const { results: movies } = response.data
      this.setState(() => ({ movies, filteredMovies: movies, loading: false }))
    } catch (e) {
      console.error(e)
      this.setState(() => ({ error: 'Cannot fetch movies', loading: false }))
    }
  }

  render() {
    const { loading, error, filteredMovies, searchText } = this.state
    if (loading) return <div>Loading movies...</div>

    if (error)
      return (
        <div>
          {error}
        </div>
      )

    // Return HTML Display Header and Items
    // movies are passed as props to movielist because it doesn't handle any state
    // it can be functional and also handle when no results are displayed (i.e. !movies)
    return (
      <div className="movie-container">
        <Header searchText={searchText} search={this.search} />
        <MovieList movies={filteredMovies} ratingChanged={this.ratingChanged} />
      </div>
    )
  }
}

export default Movies
