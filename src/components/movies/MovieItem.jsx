import React, { memo } from 'react'

const MovieItem = ({title, poster_path, vote_average}) => {
  return (
    <div className='w-56 border'>
        <img src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`} alt="" />
        <h3>{title}</h3>
        <p>{vote_average}</p>
    </div>
  )
}

export default memo(MovieItem)