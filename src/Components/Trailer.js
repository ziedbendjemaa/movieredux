import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Trailer = ({list,match}) => {
    let object=list.find(el=>el.id==match.params.id)
   
    return (
        <div >
             <div>
                 <NavBar/>
        <div className="movie-trailer" style={{marginLeft:"100px"}}>
            <h1 style={{color:"white",fontSize:"20px",fontFamily:"sans-serif"}}>{object.name}</h1>
            <img src={object.image} alt="" width="100%" height="500px" />
            <h3 style={{color:"white",fontSize:"15px",fontFamily:"sans-serif"}}>{object.description}</h3>
        </div>
    
        <iframe width="1280" height="720" src={object.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Link to="/">
        <button style={{backgroundColor:"rgb(100, 15, 67)",color:"white", width: "100px",height: "40px", marginTop: "150px",borderRadius:"4px"}}>Back</button>
        </Link>
        
        </div>
        </div>
    )
}

export default Trailer
