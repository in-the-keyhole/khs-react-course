import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../api/instance'

class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { movie: null, loading: true }
  }

  componentDidMount = async () => {
    try {
      const response = await api.get(`movies/${this.props.match.params.id}`)
      const movie = response.data
      this.setState(() => ({ movie, loading: false }))
    } catch (e) {
      this.setState(() => ({ error: e, loading: false }))
    }
  }

  render() {
    const { movie, loading, error } = this.state

    if (movie) {
      console.log(movie)
      console.log(`images/posters${movie.poster_path}`)
    }

    if (loading) {
      return <h1>Loading...</h1>
    }

    if (error) {
      return (
        <p>
          {error}
        </p>
      )
    }

    return (
      <div className="movie-detail">
        <h2>
          {movie.title}
        </h2>
        <h3>
          {movie.overview}
        </h3>
        <Link to="/">
          <span className="close" />
        </Link>
        <img
          src={`${process.env
            .PUBLIC_URL}/images/backdrops${movie.backdrop_path}`}
          alt={`Backdrop for ${movie.backdrop_path}`}
        />
      </div>
    )
  }
}

export default MovieDetail
