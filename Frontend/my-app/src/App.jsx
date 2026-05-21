import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import Protected from '../src/Protection/Protected'
import Login from './Pages/Login'

function App() {
  

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
       <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
     </Routes>
    </>
  )
}

export default App
