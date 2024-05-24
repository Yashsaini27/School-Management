// StaffQueries.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './staffquery.css'; // Import the CSS file

const StaffQuery = () => {
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        fetchStudentQueries();
    }, []);

    const fetchStudentQueries = async () => {
        try {
            const response = await axios.get('https://school-management-server-d308.onrender.com/staff1/student-queries');
            setQueries(response.data);
        } catch (error) {
            console.error('Error fetching student queries:', error);
        }
    };

    return (
        <div className="StaffQueryContainer"> {/* Apply the container class */}
            <h2>Student Queries</h2>
            <ul>
                {queries.map((query, index) => (
                    <li key={index} className="QueryItem"> {/* Apply the query item class */}
                        <h3>Student: {query.name}</h3>
                        <p>Email: {query.email}</p>
                        <p>Query: {query.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StaffQuery;
