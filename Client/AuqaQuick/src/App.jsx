import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from "./pages/Dashboard"
import { Routes, Route } from'react-router-dom'
import Register from './pages/Register'
import Bookorder from './pages/Bookorder'
import Footer from './pages/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './pages/Admin'
function App() {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/orders' element={
          <ProtectedRoute>
            <Bookorder />
          </ProtectedRoute>
        }/>
        <Route path='/admin' element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
