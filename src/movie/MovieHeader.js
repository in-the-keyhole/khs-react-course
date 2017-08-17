import React from 'react'

const MovieHeader = ({ searchText, search }) => {
  return (
    <div>
      <h2>Now Playing</h2>
      <button>Logout</button>
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
