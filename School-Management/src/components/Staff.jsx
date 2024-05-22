// Staff.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './staff.css'; // Import the CSS file

function Staff() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/staff/login1', {
        email: loginEmail,
        password: loginPassword
      });
      console.log('Logged in as student:', response.data);
      // Redirect to dashboard or perform other actions after successful login
      navigate('/dashboard1');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid email or password');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/staff/register1', {
        email: registerEmail,
        password: registerPassword,
        confirmpassword: confirmPassword,
        contact_number: contactNumber
      });
      console.log('Registered student:', response.data);
      // You can redirect to dashboard or perform other actions after successful registration
      // For now, let's just log in the registered user automatically
      setLoginEmail(registerEmail);
      setLoginPassword(registerPassword);
      handleLogin(e);
    } catch (error) {
      console.error('Error registering:', error);
      alert('Failed to register. Please try again later.');
    }
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      {!showRegister && (
        <div className="max-w-md w-full mx-auto p-8 bg-white shadow-md">
          <h2 className="text-2xl font-bold mb-4">Staff Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Email" 
                value={loginEmail} 
                onChange={(e) => setLoginEmail(e.target.value)} 
                className="input" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="password" 
                placeholder="Password" 
                value={loginPassword} 
                onChange={(e) => setLoginPassword(e.target.value)} 
                className="input" 
              />
            </div>
            <button type="submit" className="button">Login</button>
          </form>
          <p className="mt-4">
            Don't have an account? <button onClick={toggleRegister} className="text-blue-500">Click here to register</button>
          </p>
        </div>
      )}

      {showRegister && (
        <div className="max-w-md w-full mx-auto p-8 bg-white shadow-md">
          <h2 className="text-2xl font-bold mb-4">Staff Registration</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Email" 
                value={registerEmail} 
                onChange={(e) => setRegisterEmail(e.target.value)} 
                className="input" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="password" 
                placeholder="Password" 
                value={registerPassword} 
                onChange={(e) => setRegisterPassword(e.target.value)} 
                className="input" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                className="input" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Contact Number" 
                value={contactNumber} 
                onChange={(e) => setContactNumber(e.target.value)} 
                className="input" 
              />
            </div>
            <button type="submit" className="button">Register</button>
          </form>
          <p className="mt-4">
            Already have an account? <button onClick={toggleRegister} className="text-blue-500">Click here to login</button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Staff;
