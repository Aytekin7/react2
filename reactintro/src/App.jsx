import React, { useEffect, useState }  from 'react'
import "./App.css"
import Hedaer from './components/Hedaer'
import Cards from './components/Cards'
function App() {

  const [movies,setMovies]=useState([])
  
 useEffect(()=>{
  fetch("https://www.omdbapi.com/?s=harry&apikey=9dad6aee")
  .then(res=>res.json())
  .then(data=>{
    setMovies(data.Search)
    console.log(data)
  })
 },[])


  return (
    


    <>
 <Hedaer/>
 <Cards movies={movies}/>
    </>
  )
}

export default App
