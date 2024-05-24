import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get('https://school-management-server-d308.onrender.com/querry/reviews');
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    return (
        <div>
            <h2>Reviews & Ratings</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <strong>{review.user}</strong>: {review.comment} (Rating: {review.rating})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Review;
