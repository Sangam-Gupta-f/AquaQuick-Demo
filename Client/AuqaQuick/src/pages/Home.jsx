import React from 'react';
import bottle from '../../public/bottlebg.png';
import truck from '../../public/truck.png';
import login from '../../public/login.png';
import bottleicon from '../../public/bottle.png';
import { Link } from'react-router-dom';
function Home() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-600">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center text-center md:text-left px-6 py-10 gap-10 md:gap-0 justify-around">
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Get Fresh Water Delivered
          </h1>
          <p className="mt-4 text-gray-600 dark:text-white text-lg md:text-xl">
            Order 20-liter water bottles online quickly and easily
          </p>
          <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow font-bold">
            <Link to="/login">Order 20L Bottle</Link>
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={bottle} alt="Water Bottle" className="w-[200px] md:w-[300px] mx-auto" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white dark:bg-gray-700 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-10">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-15">
          <div className="flex flex-col items-center">
            <img src={login} alt="Login" className="w-20 md:w-24 mb-2" />
            <p className="text-gray-700 dark:text-white">Login or sign up</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={bottleicon} alt="Bottle" className="w-20 md:w-24 mb-2" />
            <p className="text-gray-700 dark:text-white">Place your order</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={truck} alt="Delivery" className="w-20 md:w-24 mb-2" />
            <p className="text-gray-700 dark:text-white">Get your delivery</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;





// import React from 'react'
// import bottle from '../../public/bottlebg.png'
// import truck from '../../public/truck.png'
// import login from '../../public/login.png'
// import bottleicon from '../../public/bottle.png'
// function Home() {
//   return (
//     <div className='min-h-screen bg-blue-50'>
//         <section className='flex text-center  px-4 justify-around'>
//            <div className='flex flex-col justify-center align-middle'>
//              <h1  className="text-4xl font-bold text-gray-800">Get Fresh Water Delivered</h1>
//              <p className="mt-4 text-gray-600 text-xl">Order 20-liter water bottles online quickly and easily</p>
//              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow font-bold">Order 20L Bottle</button>
//            </div>
//            <div>
//              <img src={bottle} alt="Water Bottle" />
//            </div>
//         </section>
//         <section className="flex flex-col pt-16 pb-10  justify-around items-center">
//             <div>
//                 <h1 className='text-3xl font-bold mb-4 text-gray-800'>How It Works</h1>
//             </div>
//             <div className='flex justify-around mt-5 w-full'>
//                 <div>
//                     <img src={login} alt="log in" />
//                     <p>Login or sign up</p>
//                 </div>
//                 <div>
//                     <img src={bottleicon} alt="bottle" />
//                     <p>Place your order</p>
//                 </div>
//                 <div>
//                     <img src={truck} alt="van" />
//                     <p>Get your delivery</p>
//                 </div>
//             </div>
//         </section>

//     </div>
//   )
// }

// export default Home