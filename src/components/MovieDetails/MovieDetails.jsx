import React from 'react'
import MarkAsSeenBtn from '../MarkAsSeenBtn/MarkAsSeenBtn'

function MovieDetails() {
  return (
    <div>
    {/* fetch this https://api.themoviedb.org/3/movie/550?api_key=b59bf13feefaa44767fe3024e9db5376 */}
        <MarkAsSeenBtn />
    </div>
  )
}

export default MovieDetails