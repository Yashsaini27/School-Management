import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SchoolsPage = () => {
    return (
        <div>
            <h1>Schools</h1>
            <Institutions />
        </div>
    );
};

const Institutions = () => {
    const [institutions, setInstitutions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSchools();
    }, []);

    const fetchSchools = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`https://school-management-server-d308.onrender.com/home/institutions?type=schools`);
            setInstitutions(res.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const renderInstitutions = (institutions) => (
        institutions.map((institution) => (
            <tr key={institution.id}>
                <td>{institution.name}</td>
                <td>{institution.rating}</td>
                <td>{institution.reviews}</td>
                <td>{institution.awards}</td>
            </tr>
        ))
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data.</p>;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Reviews</th>
                        <th>Awards</th>
                    </tr>
                </thead>
                <tbody>
                    {renderInstitutions(institutions)}
                </tbody>
            </table>
        </div>
    );
};

export default SchoolsPage;
