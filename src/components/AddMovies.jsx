import React from 'react'
import { useState, useRef } from 'react';

import { addDoc } from 'firebase/firestore';
import { auth } from '../config/firebase';
function AddMovies({moviCollectionRef,getMovies }) {

     const[name, setName]=useState("")
      const[dateOfrelease, setDateOfrelease]=useState("")
      const[isGood, setIsGood]=useState(false);
  //Functionalities to clear input after adding adn Pointing Pointer to Input

    const  inputRef=useRef();
        const clear=()=>{
            setName("")
            setDateOfrelease("")
            setIsGood(false)
            inputRef.current.focus()
        }

        // Create Operation....
          const onSumbitMovie=async()=>{
                await addDoc(moviCollectionRef, {
                  isGoodMovie:isGood,
                  releaseDate: dateOfrelease,
                  title:name, 
                  userID: auth?.currentUser?.uid
                });
                getMovies();
                clear();
          }


  return (
    <div>
    <h2>Add Movies </h2>
    <input type='text' ref={inputRef} value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Movie title...'/>
    <input type='number'value={dateOfrelease} onChange={(e)=>{setDateOfrelease(Number(e.target.value))}} placeholder='Release Date...'/>
    <input id='check' checked={isGood} onChange={(e)=>{setIsGood(e.target.checked)}}type='checkbox'/>
    <label htmlFor="check">IsGood</label>
    <button onClick={onSumbitMovie} > ADD Movie</button>
  </div>
  )
}

export default AddMovies