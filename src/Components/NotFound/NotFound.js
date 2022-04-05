import React from 'react';
import image from './images/resultNotFound.gif';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 className='my-5'>Result Not found</h1>
            <img width={800} height={400} src={image} alt="" />
        </div>
    );
};

export default NotFound;