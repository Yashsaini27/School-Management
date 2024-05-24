// AdminLoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './admin.css'

function Admin() {
  
  const[values,setValues]=useState({
    email:'',
    password: '',
    })
    const[error,setError]=useState('')
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Using useNavigate hook for navigation

  const handleSubmit = (e) => {
     event.preventDefault()
     axios.post('https://school-management-server-d308.onrender.com/auth/adminlogin',values)
     .then(result=>{
      if(result.data.loginStatus)
        {
          navigate('/admin/dashboard');
        }else{
          setError(result.data.error);
        }
     })

     
    
   
  }

  return (
    <div className="admin-login-page">
      <div className="login-container">
        <h2 className="login-title">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" placeholder="Username"  onChange={(e) => setValues({...values,email:e.target.value})} className="input-field input-focus" />
          </div>
          <div className="input-field input">
            <input type="password" placeholder="Password" onChange={(e) => setValues({...values,password:e.target.value})} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="submit-button">
            <button type="submit" className="submit-button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
