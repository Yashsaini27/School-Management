import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './App.css';
import './attendance.css'

function Attendance() {
    const [attendances, setAttendances] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        class: '',
        attendance_status: 'Present',
        date: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        fetchAttendances();
    }, []);

    const fetchAttendances = async () => {
        const res = await axios.get('https://school-management-server-d308.onrender.com/atten/attendance');
        setAttendances(res.data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await axios.put(`https://school-management-server-d308.onrender.com/atten/attendance/${currentId}`, formData);
            setIsEditing(false);
            setCurrentId(null);
        } else {
            await axios.post('https://school-management-server-d308.onrender.com/atten/attendance', formData);
        }
        setFormData({ name: '', class: '', attendance_status: 'Present', date: '' });
        fetchAttendances();
    };

    const handleEdit = (attendance) => {
        setFormData(attendance);
        setIsEditing(true);
        setCurrentId(attendance.id);
    };

    const handleDelete = async (id) => {
        await axios.delete(`https://school-management-server-d308.onrender.com/atten/attendance/${id}`);
        fetchAttendances();
    };

    return (
        <div className="App">
            <h1>Attendance Records</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="class"
                    placeholder="Class"
                    value={formData.class}
                    onChange={handleChange}
                />
                <select
                    name="attendance_status"
                    value={formData.attendance_status}
                    onChange={handleChange}
                >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
                <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {attendances.map((attendance) => (
                        <tr key={attendance.id}>
                            <td>{attendance.name}</td>
                            <td>{attendance.class}</td>
                            <td>{attendance.attendance_status}</td>
                            <td>{attendance.date}</td>
                            <td>
                                <button onClick={() => handleEdit(attendance)}>Edit</button>
                                <button  onClick={() => handleDelete(attendance.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Attendance;
