// Start.js
import React from 'react';
import { Link } from 'react-router-dom';
import './start.css'; // Make sure to import the CSS file

function Start() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
        <div className="flex flex-col gap-4">
          <Link to="/admin">
            <button className="button bg-blue-500 hover:bg-blue-600">Admin</button>
          </Link>
          <Link to="/staff">
            <button className="button bg-green-500 hover:bg-green-600">Staff</button>
          </Link>
          <Link to="/student">
            <button className="button bg-purple-500 hover:bg-purple-600">Student</button>
          </Link>
          <Link to="/parent">
            <button className="button bg-yellow-500 hover:bg-yellow-600">Parent</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
