import React, { useState } from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
import { auth } from './Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpForm = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = (event)=>{
        event.preventDefault() // to prevent default submission
        try{
           createUserWithEmailAndPassword(auth,email,password);
          console.log("Account Created")
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="email">
            Email:
            <input type="text" onChange={(event)=>setEmail(event.target.value)}/>
        </label>
        <label htmlFor="password">
            Password:
            <input type="password" onChange={(event)=>setPassword(event.target.value)} />
        </label>
        <button type='submit'>Sign Up</button>
        <p>Already Registered? <Link to="/">Login</Link></p>
      </form>
    </div>
  )
}

export default SignUpForm
