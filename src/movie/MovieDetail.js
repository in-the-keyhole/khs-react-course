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
      this.setState(() => ({ error: true, loading: false }))
    }
  }

  render() {
    // object destructuring thanks to ES6
    const { movie, loading, error } = this.state
    const { history } = this.props // react-router-dom provides us with history in props

    if (loading) {
      return <h1>Loading...</h1>
    }

    if (error) {
      return (
        <h4>
          Oops! Movie details couldn't be loaded.{' '}
          <a style={{ cursor: 'pointer' }} onClick={() => history.goBack()}>
            Go back.
          </a>
        </h4>
      )
    }

    return (
      <div className="movie-detail">
        <h3>
          {movie.title}
        </h3>
        <h4>
          {movie.overview}
        </h4>
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
