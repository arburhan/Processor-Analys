import React from 'react';
import image from './images/AMD.jpg'
import './Home.css';
import useReviews from '../Hooks/useReviews';
import Review from '../Reviews/Review/Review';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews, setREviews] = useReviews();
    // navigate
    let navigate = useNavigate();
    let location = useLocation();

    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-2 align-items-center justify-content-center my-5">
                <div className="order-1 order-md-0 text-center text-md-start">
                    <h1 style={{ color: '#126b71' }}>Highest-performing server<br /><span style={{ color: 'tomato' }} >Processors</span> is here</h1>
                    <p>
                        AMD EPYC™ 7003 Series processors with AMD 3D V-Cache™ technology accelerate simulations, boost engineering productivity, and speed the product development process.
                    </p>
                    <button className="watch-button">Watch Now</button>
                </div>
                <div className="order-0 order-md-1">
                    <img className='img-fluid' style={{ padding: '20px' }} src={image} alt="" />
                </div>
            </div>
            {/* review section */}
            <div>
                <h2 className='my-5'>Reviews</h2>
                <div className='row row-cols-1 row-cols-md-3 g-4 text-center justify-content-center'>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                    <button onClick={() => {
                        navigate("/reviews" + location.search)

                    }} className="watch-button">See All Review</button>
                </div>
            </div>
        </div>
    );
};

export default Home;