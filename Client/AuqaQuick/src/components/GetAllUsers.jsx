import React from 'react'
import { useState , useEffect} from 'react'
import Card from './Card';
function GetAllUsers() {
    const [users, setUsers] = useState([]);
    // API call to fetch users data
    //...
    useEffect(() => {
      const fetchUsers=async()=>{
      const response= await fetch('https://aquaquick-backend.onrender.com/api/users/getAllUsers');
      const data= await response.json();
      setUsers(data);
      }
      fetchUsers();
    }, []);
  return (
    <div className=' '>
        {users.map((user,index) => (
        <Card user={user} key={index}/>
         ) )}
    </div>
  )
}

export default GetAllUsers