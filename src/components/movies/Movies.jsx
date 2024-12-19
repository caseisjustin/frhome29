import React, { memo } from 'react'
import MovieItem from './MovieItem'

const Movies = ({data}) => {
  
  return (
    <div>
      <h2>Movies</h2>
      <div className="flex gap-2 justify-center flex-wrap container">
        {
          data?.results?.map((movie)=> (
            <MovieItem key={movie.id} {...movie}/>
          ))
        }
      </div>
    </div>
  )
}
export default memo(Movies) 