import React from 'react';
import { Link } from 'react-router-dom';
import bottle from '../../public/bottlebg.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate=useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Send login request to server
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
   
      if (!response.ok) {
        setError(data.message);

      }else{
        setError('');
        setSuccess('Logged in successfully');
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setTimeout(() => {
          navigate('/dashboard');
        }, 200);
        
      }
    } catch (error) {
      setError(` ${error} 'An error occurred while logging in'`);
    }
    console.log(formData);
    setFormData({ email: '', password: '' });
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
          <h1 className="text-3xl font-bold text-blue-800 mb-6">Login to AquaQuick</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="sangam@123"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition duration-300"
            >
              Login
            </button>
          </form>
          
          {error && <p className="text-red-600 mt-3">{error}</p>}
          {success && <p className="text-green-600 mt-3">{success}</p>}
          <p className="mt-4 text-sm text-gray-600">
            Don&apos;t have an account?
            <Link to='/register' className="text-blue-700 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;














































// import React from 'react'
// import { Link } from 'react-router-dom'
// import bottle from '../../public/bottlebg.png'
// function Login() {
//   return (
//     <div className='flex mt-20  justify-around'>
//       <section>
//         <img src={bottle} alt='Logo' />
//       </section>
//       <section className='flex flex-col justify-between'>
//         <h1 className='font-bold text-3xl text-gray-800'>Login</h1>
//         <form className='flex flex-col '>
//           <label for='email'>Email</label>
//           <input className="border-2 rounded" name='email' type='email' placeholder='sangam@123' />
//           <label for='password'>Password</label>
//           <input className="border-2 rounded" name='password'type='password' placeholder='******' />
//           <button className='bg-blue-700 rounded-2xl px-5 py-2 text-white text-xl font-bold' type='submit'>Login</button>
//         </form>
//         <p>Don't have an account? <Link to='/register'>Register</Link></p></section>
      
//     </div>
//   )
// }

// export default Login