// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import  {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLpDuIu5nME370vyxnpKWTryFqIWH5BsQ",
  authDomain: "playgroundrp-ab732.firebaseapp.com",
  databaseURL: "https://playgroundrp-ab732-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "playgroundrp-ab732",
  storageBucket: "playgroundrp-ab732.firebasestorage.app",
  messagingSenderId: "401929966652",
  appId: "1:401929966652:web:bdde1cd02852bf77821f39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// inint getAuth with our this app...and exporting ...
export const auth=getAuth(app);
export const googleProvider=new  GoogleAuthProvider();
export const db=getFirestore(app);