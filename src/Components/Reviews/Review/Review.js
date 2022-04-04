import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { id, name, image, review, rating } = props.review;
    return (
        <div>
            <CardGroup>
                <Card className=''>
                    <Card.Img className='card-image' style={{ borderRadius: '50%' }} src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {review}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="">{rating}</small>
                    </Card.Footer>
                </Card>

            </CardGroup>

        </div>
    );
};

export default Review;