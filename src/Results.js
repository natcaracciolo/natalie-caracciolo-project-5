import React from 'react';

const Results = (props) => {
    return (
        <div className='body'>
            <p>Date Range: {props.date}</p>
            <p>Compatibility: {props.compatibility}</p>
            <p>Lucky Number: {props.luckynumber}</p>
            <p>Lucky Color:{props.color}</p>
            <p>Current Mood: {props.mood}</p>
            <p>A Lil' Advice: {props.description}</p>
        </div>
    )


}



export default Results