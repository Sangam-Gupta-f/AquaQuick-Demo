import React from 'react'
import { useState , useEffect} from 'react'
import Card from './Card';
function GetAllUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      const fetchUsers=async()=>{
      const response= await fetch('http://localhost:3000/api/users/getAllUsers');
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