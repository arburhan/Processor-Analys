import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setREviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setREviews(data))
    }, [])
    return [reviews, setREviews];
};

export default useReviews;