import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../components/Card';
function Admin() {
    const [users, setUsers] = useState([]);
  const user=JSON.parse(localStorage.getItem('user'));
  const [summary, setSummary] = useState({ total: 0, pending: 0, delivered: 0 });
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('https://aquaquick-backend.onrender.com/api/orders/getAllOrders');
      const data = await response.json();

      // Calculate summary
      const total = data.length;
      const pending = data.filter(order => order.status === 'pending').length;
      const delivered = data.filter(order => order.status === 'delivered').length;

      setSummary({ total, pending, delivered });
    };

    fetchOrders();
  }, []);
  

  return (
    <div className='min-h-screen flex flex-col'>
        <Card user={user}/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-4">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-bold text-gray-700">Total Orders</h2>
          <p className="text-2xl font-extrabold text-blue-700">{summary.total}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-bold text-gray-700">Pending Orders</h2>
          <p className="text-2xl font-extrabold text-yellow-600">{summary.pending}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-bold text-gray-700">Delivered Orders</h2>
          <p className="text-2xl font-extrabold text-green-600">{summary.delivered}</p>
        </div>
      </div>
    </div>
  )
}

export default Admin