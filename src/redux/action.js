import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE,  } from "./actionType"





export const handeladd=(newmovie)=>{
    return{
        type:ADD_MOVIE,
        payload:newmovie

    }

}
export const handeledit=(newnew)=>{
    return{
        type:EDIT_MOVIE,
        payload:newnew

    }
}
export const handeldelete=(id)=>{
    return{
        type:DELETE_MOVIE,
        payload:id
    }
}
