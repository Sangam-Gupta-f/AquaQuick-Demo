import React from 'react'
import { useState, useEffect } from 'react';
function AdminOrderList() {
    const [users, setUsers] = useState([]);
  const adminName=JSON.parse(localStorage.getItem('user'));

  const updateStatusHandler = async (orderId, newStatus) => {
    const response = await fetch(`https://aquaquick-backend.onrender.com/api/orders/update/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus})
    });
    if(response.ok) {
        fetchUsers();
    }
  }

  const fetchUsers = async () => {
    const response = await fetch('https://aquaquick-backend.onrender.com/api/orders/getAllOrders');
    const data = await response.json();
    const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setUsers(sortedData);
};


    useEffect(() => {  
        fetchUsers();
    }, []);

  return (
    <div className='min-h-screen flex flex-col rounded border-2 bg-blue-100'>
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
                {users.map((order,index) => (
                <tr key={index} className='text-center '>
                    <td className="p-2">{order.user?.name}</td>
                    <td className="p-2">{order.bottleQuantity}</td>
                    <td className="p-2">{order.user?.phone}</td>
                    <td className="p-2 ">
                    <select
                      value={order.status}
                       onChange={(e) => updateStatusHandler(order._id, e.target.value)}
                      className={`px-3 py-1 rounded border font-medium ${
                       order.status === 'Delivered' ? 'bg-green-100 text-green-700': order.status === 'Pending'? 'bg-yellow-100 text-yellow-700': 'bg-gray-100 text-gray-700'
                          }`}
                           >
                        <option value="Pending">Pending</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Dispatched">Dispatched</option>
                    </select>
                    </td>
                </tr>
            ))}   
            </tbody>
        </table>
    </div>
  )
}

export default AdminOrderList