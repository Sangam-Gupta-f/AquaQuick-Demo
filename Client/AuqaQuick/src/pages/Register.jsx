import React from 'react'
import bottle from '../../public/bottlebg.png';
function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-4xl">
        {/* Left Image Section */}
        <div className="md:w-1/2 bg-blue-100 p-4 flex items-center justify-center">
          <img src={bottle} alt="Bottle" className="w-60 h-auto object-contain" />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">Register to AquaQuick</h1>

          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Sangam Gupta"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-gray-700 font-medium">Phone</label>
              <input
                name="phone"
                type="number"
                placeholder="9695152517"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="sangam@gmail.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



export default Register