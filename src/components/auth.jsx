import React, { useRef, useState } from 'react'
import { auth, googleProvider } from '../config/firebase.js';
import  {createUserWithEmailAndPassword} from 'firebase/auth'
import { signInWithPopup , signOut} from 'firebase/auth';
import { signInWithRedirect} from 'firebase/auth';
function SignIN() {
    const[email, setEmail]=useState("");
    const[pass, setPass]=useState("");
    // console.log(email, pass)
    const  inputRef=useRef();
    const clear=()=>{
        setEmail("")
        setPass("")
        inputRef.current.focus()
    }
    const sumbitAuth=async()=>{
        try{
            await createUserWithEmailAndPassword(auth, email, pass)
        }
        catch(err){
            console.log(err)

        }
        clear();
    }
    const logout=async()=>{
        try {
            await signOut(auth);
        } catch (error) {
            console.err(error);
        }
    }
    const signWighGoogle=async()=>{
        try{
            await signInWithPopup(auth, googleProvider);
        }
        catch(err){
            console.error(err)

        }
        clear();
    }


const whois=async()=>{
    auth? console.log(auth.currentUser): 'login first'
       
}


const signredirect = async () => {
    try{

        await signInWithRedirect(auth, googleProvider);
    }
    catch(err){
        console.error(err)

    }
  };


  return (
    <div>
        <label htmlFor="email">Email ID : </label>
        <input type="text" id='email' ref={inputRef}  placeholder='enter your email id' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label htmlFor="pass">Password : </label>
        <input type="password"  id='pass' placeholder='enter your password' value={pass}  onChange={(e)=>{setPass(e.target.value)}} />
        <button type='smbit' onClick={sumbitAuth}>Sumbit </button>
        <button  onClick={clear}>Reset  </button>
        <button  onClick={whois}>Who is logged in   </button>

        <button onClick={signWighGoogle}>LOGIN WITH GOOGLE</button>
        <button onClick={signredirect}>LOGIN WITH GOOGLE via redirect </button>
        <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default SignIN