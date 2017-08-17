import React from 'react'
import '../App.css'

import { Link } from 'react-router-dom'

const Movie = props => {
  console.log(props)
  const link = '/about/' + props.id

  return (
    <div className="movie-detail">
      <Link to={link}>
        <img src={`images/posters${props.poster}`} alt="Poster" />
      </Link>
    </div>
  )
}

export default Movie
