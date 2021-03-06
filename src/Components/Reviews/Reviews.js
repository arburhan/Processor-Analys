import React, { useEffect, useState } from 'react';
import useReviews from '../Hooks/useReviews';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setREviews] = useReviews();
    return (
        <div className='container text-center'>
            <h2 className='my-5' style={{ color: 'blueviolet' }}>Customer Review</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 text-center justify-content-center'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;