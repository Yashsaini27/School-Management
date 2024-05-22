// AdminDashboard.js
import './admindash.css'
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

import Attendance from './Attendance';
import Review from './Review';
import Query from './Query';
import { Sidebar } from 'lucide-react';

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h1 className="sidebar h1">Admin Dashboard</h1>
        <ul className="sidebar ul">
          <li className="sidebar li">
            <Link to="/student/dashboard/home" className="sidebar a">Home</Link>
          </li>
          <li className="sidebar li">
            <Link to="/student/dashboard/about-us" className="sidebar a">About Us</Link>
          </li>
          <li className="sidebar li">
            <Link to="/student/dashboard/contact-us" className="sidebar a">Contact Us</Link>
          </li>
        
          <li className="sidebar li">
            <Link to="/staff/dashboard/attendance" className="sidebar a">Student Attendance</Link>
          </li>
          <li className="sidebar li">
            <Link to="/student/dashboard/review" className="sidebar a">Review</Link>
          </li>
          <li className="sidebar li">
            <Link to="/student/dashboard/query" className="sidebar a">Query</Link>
          </li>
        </ul>
      </div>
      {/* Content */}
      <div className="content">
        <Routes>
          <Route path="/student/dashboard/home" element={<Home />} />
          <Route path="/student/dashboard/about-us" element={<AboutUs />} />
          <Route path="/studnet/dashboard/contact-us" element={<ContactUs />} />
         
          <Route path="/staff/dashboard/attendance" element={<Attendance />} />
          <Route path="/student/dashboard/review" element={<Review />} />
          <Route path="/student/dashboard/query" element={<Query />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
