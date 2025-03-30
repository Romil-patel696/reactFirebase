import { useEffect, useState, useRef } from 'react';
import './App.css'
import SignIN from './components/auth';
import { db } from './config/firebase';
import { getDocs, collection , addDoc, doc, deleteDoc } from 'firebase/firestore';
import Movies from './components/Movies';
import AddMovies from './components/AddMovies';
function App() {
  const [movies, setMovies]=useState([]);

//creating reference to the collection
const moviCollectionRef=collection(db, "movies");
//Read Operation
const getMovies=async ()=>{
  try{
    const res=await getDocs(moviCollectionRef);
    const data=res.docs.map((d)=>({...d.data(), id:d.id}));
    setMovies(data);
  }
  catch(err){
    console.log(err)
  }
}
useEffect(()=>{
  getMovies();
  }, []);

// delete operation...

const deleteMovie=async(id)=>{
  const movieDoc=doc(db, "movies", id);
  await deleteDoc(movieDoc);
  getMovies();
}


  return (
    <>
    <h3>Firebase </h3>
    <SignIN/>
    {movies.map(elem=>(
      <Movies elem={elem} deleteMovie={deleteMovie} getMovies={getMovies}></Movies>
  ))}
    <AddMovies moviCollectionRef={moviCollectionRef} getMovies={getMovies}/>
    </>
  )
}

export default App
