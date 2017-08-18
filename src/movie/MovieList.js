import React from 'react'
import Movie from './Movie'
import RatingBar from '../components/rating/RatingBar'

const MovieList = ({ movies, ratingChanged }) => {
  if (!movies) {
    return <p>No results found.</p>
  }

  // console.log(movies)

  return (
    <ul>
      {movies.map(movie =>
        <li key={movie.id}>
          <Movie title={movie.title} poster={movie.poster_path} id={movie.id} />
          <RatingBar stars={movie.vote_average} ratingChanged={ratingChanged} />
        </li>
      )}
    </ul>
  )
}

export default MovieList
