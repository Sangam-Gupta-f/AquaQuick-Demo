import React from 'react'
import { useState, useEffect } from 'react';
function Admin() {
    const [users, setUsers] = useState([]);
  const adminName=JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://aquaquick-backend.onrender.com/api/orders/getAllOrders');
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

  return (
    <div className='min-h-screen flex flex-col'>
        <h1 className='text-3xl font-bold text-center p-4'>Walcome {adminName.name}</h1>
        <table className='w-full table-auto  rounded-2xl p-6'>
            <thead className='bg-blue-300 '>
                <tr>
                    <th className="p-2">User Name</th>
                    <th className="p-2">Quantity</th>
                    <th className="p-2">Phone No</th>
                    <th className="p-2">Status</th>
                </tr>
            </thead>
            <tbody className=''>
                {users.map((user,index) => (
                <tr key={index} className='text-center '>
                    <td className="p-2">{user.user?.name}</td>
                    <td className="p-2">{user.bottleQuantity}</td>
                    <td className="p-2">{user.user?.phone}</td>
                    <td className="p-2 "><button className='rounded bg-yellow-100 p-2 font-bold border' >{user.status}</button></td>
                </tr>
            ))}   
            </tbody>
        </table>
    </div>
  )
}

export default Admin