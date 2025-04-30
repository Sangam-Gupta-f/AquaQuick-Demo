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
import AdminDashBoard from './pages/AdminDashBoard'
import GetAllUsers from './components/GetAllUsers'
import AdminOrderList from './components/AdminOrderList'
function App() {
  return (
    <div >
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
        <Route path='/allusers' element={<GetAllUsers/>}/>
        <Route path='/allorders' element={<AdminOrderList/>}/>
        <Route path='/orders' element={
          <ProtectedRoute>
            <Bookorder />
          </ProtectedRoute>
        }/>
        <Route path='/adminDash' element={
          <ProtectedRoute>
            <AdminDashBoard/>
          </ProtectedRoute>
        }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
