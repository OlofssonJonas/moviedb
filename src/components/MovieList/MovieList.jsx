import React, { useEffect } from 'react'
import FilterDropdown from '../FilterDropdown/FilterDropdown'
import MovieCard from '../MovieCard/MovieCard'
import Axios from 'axios'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


function MovieList() {
  const [movie, setMovie] = useState([]);

  useEffect (() => {

    Axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=b59bf13feefaa44767fe3024e9db5376')
    .then((res) => {
      console.log(res.data.results)
      setMovie(res.data.results);
  })
  .catch ((error) => {
    console.log('Error')
  })
  
  }, []);

    return (
      <>
        <div>
       {movie.map((movieInfo) => (
        //console.log(movieInfo)
         <h3 key={movieInfo.id}>{movieInfo.title}</h3>
         ))},
        </div>,
        <div>
         <FilterDropdown />
         <MovieCard /> 
    </div>
         </>
  )
}

export default MovieList