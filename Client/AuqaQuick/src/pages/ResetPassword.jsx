import React, {use, useState} from 'react'
import bottle from '../../public/bottlebg.png'
function ResetPassword() {
    const [formEmail, setFormEmail] = useState({  email: ''});
    const [formData, setFormData]= useState({  email: '', otp: '', newPassword: ''});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [errorData, setErrorData] = useState('');
    const [successData, setSuccessData] = useState('');
    const handleEmailChange=(e)=>{
        setFormEmail({...formEmail, [e.target.name]: e.target.value });
    }
    const handleEmailSubmit=async(e)=> {
       e.preventDefault();
        try {
            const response= await fetch("http://localhost:3000/api/users/generateOTP", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formEmail),
        })
        const data=response.json;
        console.log(data);
        if (!response.ok) {
            setError(data.message);
        } else {
            setError("");
            setSuccess("OTP sent successfully");
        }
        } catch (error) {
            setError(` ${error} 'An error occurred while sending otp'`);
        }
        

    }
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleFormSubmit=async(e)=> {
      e.preventDefault();
        try {
            const response= await fetch("http://localhost:3000/api/users/resetPassword", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
        const data=response.json;
        console.log(data);
        if (!response.ok) {
            setErrorData(data.message);
        } else {
            setErrorData("");
            setSuccessData("Password reset successfully");
        }
        } catch (error) {
            setErrorData(` ${error} 'An error occurred while resetting password'`);
        }
        setFormData({  email: '', otp: '', newPassword: ''});
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
              <h1 className="text-3xl font-bold text-blue-800 mb-6">Reset Password</h1>
    
              <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="text-gray-700 font-medium">Enter Register Email</label>
                  <input
                    name="email"
                    value={formEmail.email}
                    onChange={handleEmailChange}
                    type="email"
                    placeholder="sangam@gmail.com"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
    
                <button
                  type="submit"
                  className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition duration-300"
                >
                  Get OTP
                </button>
              </form> 
              {error && <p className="text-red-600 mt-3">{error}</p>}
              {success && <p className="text-green-600 mt-3">{success}</p>} 
                
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="text-gray-700 font-medium">Enter Register Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="sangam@gmail.com"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="otp" className="text-gray-700 font-medium">Enter OTP</label>
                  <input
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    type="text"
                    placeholder="******"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="newPassword" className="text-gray-700 font-medium">Enter New Password</label>
                  <input
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    type="text"
                    placeholder="######"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
    
                <button
                  type="submit"
                  className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition duration-300"
                >
                  Reset Password
                </button>
              </form>
              
              {errorData && <p className="text-red-600 mt-3">{errorData}</p>}
              {successData && <p className="text-green-600 mt-3">{successData}</p>}
            </div>
          </div>
        </div>
  )
}

export default ResetPassword