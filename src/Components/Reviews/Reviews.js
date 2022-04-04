import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setREviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setREviews(data))
    }, [])
    return (
        <div className='container text-center'>
            <h2 className='my-5'>Review page</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 text-center justify-content-center'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;