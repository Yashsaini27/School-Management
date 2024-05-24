// Student.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './student.css';

function Student() {
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
      const response = await axios.post('https://school-management-server-d308.onrender.com/stud/login', {
        email: loginEmail,
        password: loginPassword
      });
      console.log('Logged in as student:', response.data);
      navigate('/dashboard');
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
      const response = await axios.post('https://school-management-server-d308.onrender.com/stud/register', {
        email: registerEmail,
        password: registerPassword,
        confirmpassword:confirmPassword,
        contact_number: contactNumber
      });
      console.log('Registered student:', response.data);
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
    <div className="StudentContainer">
      <div className="FormContainer">
        {!showRegister ? (
          <>
            <h2 className="FormTitle">Student Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="FormInput" />
              <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="FormInput" />
              <button type="submit" className="FormButton">Login</button>
            </form>
            <p>
              Don't have an account? <button onClick={toggleRegister} className="ToggleButton">Click here to register</button>
            </p>
          </>
        ) : (
          <>
            <h2 className="FormTitle">Student Registration</h2>
            <form onSubmit={handleRegister}>
              <input type="email" placeholder="Email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} className="FormInput" />
              <input type="password" placeholder="Password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} className="FormInput" />
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="FormInput" />
              <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} className="FormInput" />
              <button type="submit" className="FormButton">Register</button>
            </form>
            <p>
              Already have an account? <button onClick={toggleRegister} className="ToggleButton">Click here to login</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Student;
