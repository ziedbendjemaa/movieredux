import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import NavBar from './NavBar'

const MovieList = () => {
   const {moviedata} = useSelector(state => state)
   const [text, setText] = useState("")
   const [stars, setStars] = useState(1)
    return (
        <div>
        <NavBar text={text} setText={setText} stars={stars} setStars={setStars}/>
        <div className="movie-list">
            {
                moviedata.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&(el.rating>=stars)).map((el,i)=> <MovieCard movie={el} key={i}/>)
            }
        </div>
        </div>
    )
}

export default MovieList
