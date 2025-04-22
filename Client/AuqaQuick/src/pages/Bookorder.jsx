import React from 'react'
import bottle from "../../public/bottlebg.png"
import { useState } from'react';
import { useNavigate } from'react-router-dom';
function Bookorder() {
  const [formData, setFormData] = useState({  bottleQuantity: ''});

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, bottleQuantity: parseInt(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    // TODO: Send login request to server
    try {
      const response = await fetch('https://aquaquick-backend.onrender.com/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: user._id,
          bottleQuantity: parseInt(formData.bottleQuantity),
        })
      });
      const data = await response.json();
   
      if (!response.ok) {
        setError(data.message);

      }else{
        setError('');
        setSuccess('Order Placed successfully');
        setTimeout(() => {
          navigate('/dashboard' , { replace: true });
        }, 2000);
      }
    } catch (error) {
      setError(` ${error} 'An error occurred while logging in'`);
    }
    setFormData({bottleQuantity: ''});
    console.log(formData);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-4xl">
        {/* Left Image Section */}
        <div className="md:w-1/2 bg-blue-100 p-4 flex items-center justify-center">
          <img src={bottle} alt="Bottle" className="w-60 h-auto object-contain" />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">How Many Bottles Do You Want?</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="bottleQuantity" className="text-gray-700 font-medium">Enter No.</label>
              <input
                name="bottleQuantity"
                value={formData.bottleQuantity}
                onChange={handleChange}
                type="number"
                placeholder="1"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition duration-300"
            >
              Place Order
            </button>
          </form>
          
          {error && <p className="text-red-600 mt-3">{error}</p>}
          {success && <p className="text-green-600 mt-3">{success}</p>}
        </div>
      </div>
    </div>  
  )
}

export default Bookorder