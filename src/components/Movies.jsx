import React, { useState } from 'react'
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
function Movies({elem, deleteMovie, getMovies}) {
    const[isUpdate, setIsUpdate]=useState(false);
    const[newTitle, setNewTitle]=useState("")
    const[newReleaseDate, setnewReleaseDate]=useState("")
    const[newIsGood, setnewIsGood]=useState(false)
    const onUpdate=async(id)=>{
        try{
                    const movieId=doc(db, "movies", id);
                    await updateDoc(movieId, {
                        title:newTitle,
                        releaseDate:newReleaseDate,
                        isGoodMovie: newIsGood
                    })
        }
        catch(err){
            console.error(err);
        }
        getMovies();
        setIsUpdate(prev=>!prev)
    }
  return (
    <>
    {!isUpdate?
      <><p>{elem.title}</p>
      <h5>{elem.releaseDate}</h5>
      <h4>{elem.isGoodMovie ? "Good" : "bad"}</h4>
      <button onClick={()=>deleteMovie(elem.id)} >Delete </button>
      <button onClick={()=>{setIsUpdate(prev=>!prev)}} >Update </button>

      </>
      :
      <>
    <h2>Update Movie </h2>
    <input type='text' value={newTitle} onChange={(e)=>{setNewTitle(e.target.value)}} placeholder='Movie Title...'/>
    <input type='number'value={newReleaseDate} onChange={(e)=>{setnewReleaseDate(Number(e.target.value))}} placeholder='Release Date...'/>
    <input id='check' checked={newIsGood} onChange={(e)=>{setnewIsGood(e.target.checked)}}type='checkbox'/>
    <label htmlFor="check">IsGood</label>
    <button onClick={()=>{onUpdate(elem.id)}} > Update Movie</button>
      </>
    }
      </>
  )
}

export default Movies