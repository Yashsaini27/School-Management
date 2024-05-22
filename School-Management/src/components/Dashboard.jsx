// StudentDashboard.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Review from './Review';
import Query from './Query';

function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 py-6 px-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <ul className="mt-6">
          <li className="mb-4">
            <Link to="/student/dashboard/home" className="text-blue-500 hover:text-blue-400">Home</Link>
          </li>
          <li className="mb-4">
            <Link to="/student/dashboard/about-us" className="text-blue-500 hover:text-blue-400">About Us</Link>
          </li>
          <li className="mb-4">
            <Link to="/student/dashboard/contact-us" className="text-blue-500 hover:text-blue-400">Contact Us</Link>
          </li>
          <li className="mb-4">
            <Link to="/student/dashboard/review" className="text-blue-500 hover:text-blue-400">Review</Link>
          </li>
          <li>
            <Link to="/student/dashboard/query" className="text-blue-500 hover:text-blue-400">Query</Link>
          </li>
        </ul>
      </div>
      {/* Content */}
      <div className="flex-grow p-8">
        <Routes>
          <Route path="/student/dashboard/home" element={<Home />} />
          <Route path="/student/dashboard/about-us" element={<AboutUs />} />
          <Route path="/student/dashboard/contact-us" element={<ContactUs />} />
          <Route path="/student/dashboard/review" element={<Review />} />
          <Route path="/student/dashboard/query" element={<Query />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
