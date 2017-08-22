import React from 'react'
import AuthButton from '../components/AuthButton'
const MovieHeader = ({ searchText, search }) =>
  <div>
    <h3>Now Playing</h3>
    <AuthButton />
    <input
      autoFocus
      value={searchText}
      onChange={search}
      type="text"
      placeholder="Search..."
    />
  </div>

export default MovieHeader
