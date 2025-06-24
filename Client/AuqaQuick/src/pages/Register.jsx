import React from 'react'
import bottle from '../../public/bottlebg.png';
import { useState } from'react';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '' });
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add API call to register user here
    try {
      const response = await fetch('https://aquaquick-backend.onrender.com/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }else{
        setErrors("");
        setSuccess("Registration successful! You can now login.");
        setTimeout(()=>{
          navigate('/login');
        }, 2000);
      }
      const data = await response.json();
      console.log(data);
      // Redirect to login page
      // Add success message

    } catch (error) {
      setErrors(`Registeration failed || : ${error.message}`);
    }
    console.log(formData);
    // Reset form
    setFormData({ name: '', phone: '', email: '', password: '' });
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-gray-600 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-4xl">
        {/* Left Image Section */}
        <div className="md:w-1/2 bg-blue-100 p-4 flex items-center justify-center">
          <img src={bottle} alt="Bottle" className="w-60 h-auto object-contain" />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">Register to AquaQuick</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
              <input
                name="name"
                onChange={handleChange}
                value={formData.name}
                type="text"
                placeholder="Sangam Gupta"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-gray-700 font-medium">Phone</label>
              <input
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                type="number"
                placeholder="9695152517"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
              <input
                name="email"
                onChange={handleChange}
                value={formData.email}
                type="email"
                placeholder="sangam@gmail.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
              <input
                name="password"
                onChange={handleChange}
                value={formData.password}
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
          {errors && <p className="text-red-500">{errors}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </div>
      </div>
    </div>
  );
}



export default Register