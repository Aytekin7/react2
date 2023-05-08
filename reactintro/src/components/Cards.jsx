import React from 'react'
import CardMovie from './CardMovie'
function Cards({movies}) {
  return (
    <div className='cards'>
        <CardMovie movies={movies}/>
      
       
      
    </div>
  )
}

export default Cards