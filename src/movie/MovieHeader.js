import React from 'react'
import { Link } from 'react-router-dom'

const MovieHeader = ({ searchText, search }) => {
  return (
    <div>
      <h2>Now Playing</h2>
      <Link to={`/login`}>
        <button>Login</button>
      </Link>
      <input
        autoFocus
        value={searchText}
        onChange={search}
        type="text"
        placeholder="Search..."
      />
    </div>
  )
}

export default MovieHeader
