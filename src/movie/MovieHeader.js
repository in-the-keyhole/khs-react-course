import React from 'react'

const MovieHeader = ({ searchText }) => {
  return (
    <div>
      <h2>Now Playing</h2>
      <button>Logout</button>
      <input autoFocus type="text" placeholder={searchText} />
    </div>
  )
}

export default MovieHeader
