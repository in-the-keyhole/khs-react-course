import React from 'react'
import { Link } from 'react-router-dom'

const Movie = props =>
  <div className="movie-detail">
    <Link to={`/about/${props.id}`}>
      <img
        src={`${process.env.PUBLIC_URL}/images/posters${props.poster}`}
        alt={`Poster for ${props.title}`}
      />
    </Link>
  </div>

export default Movie
