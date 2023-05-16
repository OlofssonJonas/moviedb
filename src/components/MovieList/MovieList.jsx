import React from 'react'
import FilterDropdown from '../FilterDropdown/FilterDropdown'
import MovieCard from '../MovieCard/MovieCard'


function MovieList() {
  return (
    <div>
        <FilterDropdown />
        <MovieCard />
    </div>
  )
}

export default MovieList