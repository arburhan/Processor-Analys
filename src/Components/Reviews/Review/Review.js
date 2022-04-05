import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { id, name, image, review, rating } = props.review;
    const shortReview = review.slice(0, 200) + '...';
    return (
        <div>
            <CardGroup>
                <Card className=''>
                    <Card.Img className='card-image' style={{ borderRadius: '50%' }} src={image} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-4'>{name}</Card.Title>
                        <Card.Text title={review}>

                            {shortReview}

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="">Rating: {rating}</small>
                    </Card.Footer>
                </Card>

            </CardGroup>

        </div>
    );
};

export default Review;