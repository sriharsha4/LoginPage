import React from 'react'
import SignUpForm from './SignUpForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUpForm />}></Route>
        <Route path='/' element={<Login/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App
