import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Institutions = ({ type }) => {
    const [institutions, setInstitutions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterByType, setFilterByType] = useState(type);
    const [filterBy, setFilterBy] = useState('');
    const [sortBy, setSortBy] = useState('rating');

    useEffect(() => {
        fetchInstitutions();
    }, [filterByType, filterBy, sortBy]);

    const fetchInstitutions = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`https://school-management-server-d308.onrender.com/home/institutions?type=${filterByType}&filterBy=${filterBy}&sortBy=${sortBy}`);
            setInstitutions(res.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const handleFilterTypeChange = (e) => {
        setFilterByType(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilterBy(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
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
            <h2>Top Rated {filterByType.charAt(0).toUpperCase() + filterByType.slice(1)}</h2>
            <div>
                <label>Filter by Type: </label>
                <select value={filterByType} onChange={handleFilterTypeChange}>
                    <option value="schools">Schools</option>
                    <option value="colleges">Colleges</option>
                    <option value="universities">Universities</option>
                </select>
                <label>Filter by Name: </label>
                <input type="text" value={filterBy} onChange={handleFilterChange} />
                <label>Sort by: </label>
                <select value={sortBy} onChange={handleSortChange}>
                    <option value="rating">Rating</option>
                    <option value="reviews">Reviews</option>
                    <option value="awards">Awards</option>
                </select>
            </div>
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

export default Institutions;
