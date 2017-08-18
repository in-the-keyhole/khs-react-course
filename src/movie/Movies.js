import React, { Component } from 'react'
import '../App.css'
import Header from './MovieHeader.js'
import MovieList from './MovieList'
import api from '../api/instance'
import { Grid, Row, Col } from 'react-bootstrap'

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
    console.log(searchText)
    this.setState(() => ({
      searchText,
      filteredMovies: this.state.movies.filter(
        movie =>
          movie.title.toLowerCase().match(searchText.toLowerCase()) != null
      )
    }))
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
      <Grid>
        <Row>
          <Col md={12}>
            <div className="movie-container">
              <Header searchText={searchText} search={this.search} />
              <MovieList movies={filteredMovies} />
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Movies
