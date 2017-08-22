import React from 'react'
import Movie from './Movie'
import RatingBar from '../components/rating/RatingBar'

const MovieList = ({ movies, ratingChanged }) =>
  !movies
    ? <p>No results found.</p>
    : <ul>
        {movies.map(movie =>
          <li key={movie.id}>
            <Movie
              title={movie.title}
              poster={movie.poster_path}
              id={movie.id}
            />
            <RatingBar
              stars={movie.rating}
              ratingChanged={rating => ratingChanged(movie, rating)}
            />
          </li>
        )}
      </ul>

export default MovieList
