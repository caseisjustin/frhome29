import React, { useState } from 'react'

const Genre = ({data, setSelectedGenre}) => {
  return (
    <div className='flex gap-3 overflow-auto p-2 container'>
        {
            data?.map((item)=>(
                <div onClick={()=> setSelectedGenre(item.id)} className='whitespace-nowrap p-1 bg-slate-200 rounded-md cursor-pointer select-none' key={item.id}>{item.name}</div>
            ))
        }
    </div>
  )
}

export default Genre