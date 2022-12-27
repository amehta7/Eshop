import React from 'react'
import './common/home.css'
import NavBar from './components/navbar/NavBar'
import Nomatch from './components/nomatch/NoMatch'
import Login from './components/login/Login'
import Signup from './components/signup/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Nomatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
