import React from 'react'
import {Link} from "react-router"
import { useNavigate } from 'react-router'
function Navbar() {
  const navigate=useNavigate();

  const user=JSON.parse(localStorage.getItem('user'));
  
  const handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  }
  return (
    <nav className='bg-blue-600 flex p-4 justify-between items-center text-white'>
        <Link to='/' className='font-bold text-xl'>AquaQuick</Link>
        <div className='space-x-4'>
            <Link to='/' className='hover:underline'>Home</Link>
            {user ? (
          <>
            <Link to={user.role === 'admin' ? '/adminDash' : '/dashboard'}>Dashboard</Link>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded ml-2">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        </div>
    </nav>
  )
}

export default Navbar