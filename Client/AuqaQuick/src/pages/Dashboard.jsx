import React from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import OrderHistory from '../components/OrderHistory'
function Dashboard() {
  const data=JSON.parse(localStorage.getItem('user'));
  console.log(data);
if(data.role==='admin'){
  return <Navigate to='/adminDash' replace />;
}
  return (
    <div className='min-h-screen bg-blue-50 dark:bg-gray-600 p-6'>
      <h1 className='text-3xl font-bold text-gray-800 dark:text-white text-center mb-6'>DASHBOARD</h1>
      <div className='bg-white dark:bg-gray-700 pt-10 pb-10 rounded-lg flex justify-around mb-8 items-center '>
        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{data?.name}</h3>
            <p className="text-gray-600 dark:text-white">{data?.email}</p>
            <p className="text-sm text-gray-500 dark:text-white capitalize">{data?.role}</p>
        </div>
        <div>
          <button className='bg-blue-700 hover:bg-blue-800 px-5 py-2 rounded-lg text-white font-medium transition'>
            <Link to='/orders'>Book Order</Link>
          </button>
        </div>
      </div>
      <OrderHistory />
    </div>
  )
}

export default Dashboard