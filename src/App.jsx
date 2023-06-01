import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mycart from './components/Mycart'

function App() {
  
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/cart' element={<Mycart />} />
    <Route path='login' element={<Login />} />
    <Route path='signup' element={<Signup />} />
     <Route path='/' element={<Home />} />
     </Routes>
     </BrowserRouter>
  )
}

export default App
