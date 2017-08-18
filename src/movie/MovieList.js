import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies }) => {
  if (!movies) {
    return <p>No results found.</p>
  }

  return (
    <ul>
      {movies.map(movie =>
        <li key={movie.id}>
          <Movie title={movie.title} poster={movie.poster_path} id={movie.id} />
        </li>
      )}
    </ul>
  )
}

export default MovieList
