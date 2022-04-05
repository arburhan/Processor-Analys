import React, { useEffect, useState } from 'react';
import QAAccordion from './QAAccordion/QAAccordion';

const Blogs = () => {
    const [qas, setQa] = useState([]);
    useEffect(() => {
        fetch('QA.json')
            .then(res => res.json())
            .then(data => setQa(data))

    }, [])
    return (
        <div>
            <h2 className='text-center my-5' style={{ color: 'blueviolet' }}>This is blog section</h2>
            <p>Question & answer is here :)</p>
            <div>
                {
                    qas.map(qa => <QAAccordion key={qa.id} qa={qa}></QAAccordion>)

                }
            </div>
        </div>
    );
};
/* 
<i class="bi bi-star"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-half"></i>
*/
export default Blogs;
