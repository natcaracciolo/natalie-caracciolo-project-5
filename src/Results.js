import React, {Component} from 'react';


class Results extends Component{
    render(){
        return(
    
            
            <div>
                {/* <p>date: {response.data.date_range}</p>
                <p>compatibility: {response.data.compatibility}</p>
                <p>luckynumber: {response.data.lucky_number}</p>
                <p>color: {response.data.color}</p>
                <p>mood: {response.data.mood}</p>
                <p>description: {response.data.description}</p> */}
                <p>{this.props.compatibility}</p>
    
            </div>
    
        )

    }
}

export default Results