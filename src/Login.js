import React, { useState } from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
import { auth } from './Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = (event)=>{
        event.preventDefault() // to prevent default submission
        try{
          signInWithEmailAndPassword(auth,email,password);
          console.log("Login Sucessfully")
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">
            Email:
            <input type="text" onChange={(event)=>setEmail(event.target.value)}/>
        </label>
        <label htmlFor="password">
            Password:
            <input type="password" onChange={(event)=>setPassword(event.target.value)} />
        </label>
        <button type='submit'>Login</button>
        <p>Don't have Account? <Link to="/signup">Register</Link></p>
      </form>
    </div>
  )
}

export default Login
