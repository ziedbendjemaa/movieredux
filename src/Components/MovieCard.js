import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { handeldelete } from '../redux/action'
import EditMovie from './EditMovie'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
    const dispatch = useDispatch()

    return (
        <div className="movie-card">
             <StarRating rating={movie.rating}/>
            <img src={movie.image} alt="" width="100%" height="350px"/>
            <h3 style={{color:"white",fontSize:"20px",fontFamily:"sans-serif"}}>{movie.name}</h3>
            <h3 style={{color:"white",fontSize:"15px",fontFamily:"sans-serif"}}>{movie.type}</h3>
             <div style={{display:"flex"}}>
             <button style={{backgroundColor:"rgb(100, 15, 67)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}} onClick={()=>dispatch(handeldelete(movie.id))}>DELETE</button><EditMovie movie={movie}/>
            
             </div>
             <Link to={`/Info/${movie.id}`}>
            <button style={{backgroundColor:"rgb(100, 15, 67)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}}>Info</button>
            </Link>
        </div>
    )
}

export default MovieCard
