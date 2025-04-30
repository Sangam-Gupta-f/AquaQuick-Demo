import React from 'react'

function Card({user}) {
  return (
    <div className=' md:flex md:justify-around  justify-between items-center border-4 rounded mt-2 mb-2 border-blue-100'>
      <div className='flex justify-center items-center'>
        <img className='w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-500'src={user.avatar} alt="pic" />
      </div>
      <div className='flex flex-col justify-center items-center'>
            <h3 className="text-2xl font-semibold text-gray-800">{user?.name}</h3>
            <p className="text-xl text-gray-600">{user?.email}</p>
            <p className="text-xl text-gray-500 capitalize">{user?.role}</p>
      </div>
    </div>
  )
}

export default Card