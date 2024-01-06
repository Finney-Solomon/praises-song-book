import React from 'react'
import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

export const Login = () => {

const signInWithGoogle = async ()=>{
    try{
        await signInWithPopup(auth,googleProvider)
       // console.log(auth?.currentUser?.displayName,"Log In Account ")
    }
    catch(err){
        console.log(err,"Errors in signInWithGoogle()")
    }
}

const logoutAccount = async ()=>{
  try{
      await signOut(auth)
     // console.log(auth?.currentUser?.displayName,"Log out Account ")
  }
  catch(err){
      console.log(err,"Errors in logoutAccount()")
  }
}
//console.log(auth?.currentUser?.displayName)
  return (
    <div><button onClick={()=>signInWithGoogle()}>Sign in with google</button>
    
    <button onClick={()=>logoutAccount()}>Logout</button></div>
  )
}
