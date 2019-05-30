import React from 'react';

const Results = (props) => {
    return (
        <div>
            <p>date: {props.date}</p>
            <p>{props.compatibility}</p>
            <p>{props.luckynumber}</p>
            <p>{props.color}</p>
            <p>{props.mood}</p>
            <p>{props.description}</p>
        </div>
    )


}



export default Results