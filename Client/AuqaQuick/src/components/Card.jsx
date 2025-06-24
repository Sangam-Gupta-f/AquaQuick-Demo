import React from 'react'

function Card({ user }) {
  return (
    <div className="shadow-md bg-blue-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-4xl mx-auto mt-4">
      
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
          src={user.avatar}
          alt="User avatar"
        />
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center md:items-start text-center md:text-right ">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-right">{user?.name}</h3>
        <p className="text-xl text-gray-600 dark:text-white md:text-right">{user?.email}</p>
        <p className="text-xl text-gray-500 dark:text-white capitalize md:text-right">{user?.role}</p>
      </div>
    </div>
  )
}

export default Card
