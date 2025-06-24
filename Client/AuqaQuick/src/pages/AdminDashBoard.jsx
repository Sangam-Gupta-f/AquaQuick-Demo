import React, { useEffect } from 'react'
import { useState } from 'react'
import AdminOrderList from '../components/AdminOrderList'
import GetAllUsers from '../components/GetAllUsers'
// import  { Dashboard, Orders, Users } from './components'

import { FiCheck, FiHome, FiUser, FiChevronLeft , FiChevronRight  } from "react-icons/fi";
import Admin from './Admin'
const routes=[
  {path:'/adminDash', component:<Admin/>, icon: <FiHome/>, text:'Admin Dashboard'},
  {path:'/allusers', component:<GetAllUsers/>, icon: <FiUser/>, text:'All Users'},
  {path:'/allorders', component:<AdminOrderList/>, icon: <FiCheck/>, text:'Orders'}
 // {path:'/admin/orders/:id', component:OrderDetails},
]


function AdminDashBoard() {
  const [isSideBarOpen, setIsSidebarOpen] = useState(()=>{ const saved=JSON.parse(localStorage.getItem('sidebarOpen'));
    return saved!== null? saved : true;
  } );

  const [updateContent, setUpdateContent] = useState(routes[0].component);

  useEffect(()=>{
    localStorage.setItem('sidebarOpen', JSON.stringify(isSideBarOpen) );
},[isSideBarOpen])

const toggleSidebar = () => {
  setIsSidebarOpen(!isSideBarOpen);
};

const handleNavigation = (component) => {
  setUpdateContent(component);
};
  return (
    <div className="flex h-screen bg-gray-100 drak:bg-gray-700">
        {/* Sidebar */}
        <div className={`bg-indigo-800 drak:bg-gray-700 text-white transition-all duration-300 ease-in-out flex flex-col
          ${isSideBarOpen ? 'w-64' : 'w-20'} fixed md:relative h-full z-10`}>
          
          <div className="flex items-center justify-between p-4 border-b border-indigo-700 drak:bg-gray-700">
            {isSideBarOpen && (
              <h1 className="text-xl font-bold whitespace-nowrap">Admin</h1>
            )}
            <button 
              onClick={toggleSidebar}
              className="p-1 rounded-lg hover:bg-indigo-700 transition-colors"
              aria-label={isSideBarOpen ? 'Close sidebar' : 'Open sidebar'}
            >
              {isSideBarOpen ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto drak:bg-gray-700">
            {routes.map((route, index) => (
              <NavItem 
                key={index}
                icon={route.icon}
                onClick={() => handleNavigation(route.component)}
                isOpen={isSideBarOpen}
                text={route.text}
                isActive={updateContent === route.component}
              />
            ))}
          </nav>
        </div>
        
        {/* Main Content */}
        <div className={` flex-1 overflow-auto transition-all duration-300 bg-blue-50 dark:bg-gray-600`}>
          <div className="p-4 md:p-8 bg-blue-50 dark:bg-gray-600 ">
            {updateContent}
          </div>
        </div>
      </div>
  )
}
function NavItem({ icon, text, isOpen, onClick, isActive }) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center px-6 py-3 cursor-pointer transition-colors
        ${isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
    >
      <span className="text-xl">{icon}</span>
      {isOpen && (
        <span className="ml-4 whitespace-nowrap">{text}</span>
      )}
    </div>
  );
}

export default AdminDashBoard