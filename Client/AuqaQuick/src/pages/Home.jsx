import React from 'react'
import bottle from '../../public/bottlebg.png'
import truck from '../../public/truck.png'
import login from '../../public/login.png'
import bottleicon from '../../public/bottle.png'
function Home() {
  return (
    <div className='min-h-screen bg-blue-50'>
        <section className='flex text-center mt-20 px-4 justify-around'>
           <div className='flex flex-col justify-center align-middle'>
             <h1  className="text-3xl font-bold text-gray-800">Get Fresh Water Delivered</h1>
             <p className="mt-4 text-gray-600">Order 20-liter water bottles online quickly and easily</p>
             <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow">Order 20L Bottle</button>
           </div>
           <div>
             <img src={bottle} alt="Water Bottle" />
           </div>
        </section>
        <section className="flex flex-col mt-16 px-6 justify-between">
            <div>
                <h1 className='text-3xl font-bold mb-4 text-gray-800'>How It Works</h1>
            </div>
            <div className='flex justify-between mt-5'>
                <div>
                    <img src={login} alt="log in" />
                    <p>Login or sign up</p>
                </div>
                <div>
                    <img src={bottleicon} alt="bottle" />
                    <p>Place your order</p>
                </div>
                <div>
                    <img src={truck} alt="van" />
                    <p>Get your delivery</p>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Home