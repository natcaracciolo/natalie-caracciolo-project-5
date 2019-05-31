import React from 'react';

const Results = (props) => {
    return (
        <div className='body'>
            <p>date range: {props.date}</p>
            <p>compatibility: {props.compatibility}</p>
            <p>lucky number: {props.luckynumber}</p>
            <p>lucky color: {props.color}</p>
            <p>current mood: {props.mood}</p>
            <p>a lil' advice: {props.description}</p>
        </div>
    )


}



export default Results