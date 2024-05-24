import React, { useState } from 'react';
import axios from 'axios';
import './query.css'

const Query = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        date:''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://school-management-server-d308.onrender.com/querry/student-query', formData); // Corrected endpoint URL
            alert('Query submitted successfully!');
            setFormData({ name: '', email: '', message: '', date:'' });
        } catch (error) {
            console.error('Error submitting query:', error);
            alert('Failed to submit query. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Query Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Query;
