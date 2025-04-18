import React from 'react'
import { useState, useEffect } from 'react' 

function OrderHistroy() {
  const [history, setHistory] = useState([]);
  
 useEffect(() => {
  // Fetch order history from API
 const fetchOrderHistory=async()=>{
    try {
      const user=JSON.parse(localStorage.getItem('user'));
      //console.log(user._id);
      const response = await fetch(`http://localhost:3000/api/orders/getUserOrders/${user._id}`)
    const data = await response.json();
    setHistory(data)
    } catch (error) {
      console.error('Failed to fetch order history:', err);
    }  
  };
  fetchOrderHistory();
 }, []); 
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Order History</h2>
      <table className='w-full table-auto  '>
        <thead>
          <tr className="bg-blue-100 text-blue-900">
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Bottle Quantity</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {history.map((order, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{new Date(order.createdAt).toLocaleDateString()}</td>
              <td className="px-4 py-2">{order.bottleQuantity}</td>
              <td className="px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderHistroy