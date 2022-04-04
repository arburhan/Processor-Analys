import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setREviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setREviews(data))
    }, [])
    return (
        <div>
            <h2>Review page</h2>
            {
                reviews.map(review => console.log(review))
            }
        </div>
    );
};

export default Reviews;