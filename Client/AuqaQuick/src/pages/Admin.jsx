import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../components/Card';
function Admin() {
    const [users, setUsers] = useState([]);
  const user=JSON.parse(localStorage.getItem('user'));

  

  return (
    <div className='min-h-screen flex flex-col'>
        <Card user={user}/>
    </div>
  )
}

export default Admin