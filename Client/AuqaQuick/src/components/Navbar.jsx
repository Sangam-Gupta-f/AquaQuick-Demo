import React from 'react'
import {Link} from "react-router"
function Navbar() {
  return (
    <nav className='bg-blue-600 flex p-4 justify-between items-center text-white'>
        <Link to='/' className='font-bold text-xl'>AquaQuick</Link>
        <div className='space-x-4'>
            <Link to='/' className='hover:underline'>Home</Link>
            <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/dashboard' className='hover:underline'>DashBoard</Link>
        </div>
    </nav>
  )
}

export default Navbar