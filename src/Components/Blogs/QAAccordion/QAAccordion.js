import React from 'react';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';


const Accordion = (props) => {
    const { question, answer } = props.qa;
    return (
        <div>
            <AccordionItem>
                <AccordionHeader>{question}</AccordionHeader>
                <AccordionBody>
                    {answer}
                </AccordionBody>
            </AccordionItem>
        </div>
    );
};

export default Accordion;