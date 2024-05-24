import React, { useState } from 'react';
import axios from 'axios';

const EnquiryForm = () => {
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
        await axios.post('https://school-management-server-d308.onrender.com/pare/enquiries', formData);
        setFormData({ name: '', email: '', message: '',date:'' });
    };

    return (
        <div>
            <h2>Enquiry Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                />
                 <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EnquiryForm;
