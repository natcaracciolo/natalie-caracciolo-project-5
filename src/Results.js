import React, {Component} from 'react';


class Results extends Component{
    render(){
        return(
            <div>
                <p>{this.props.date}</p>
                <p>{this.props.compatibility}</p>
                <p>{this.props.luckynumber}</p>
                <p>{this.props.color}</p>
                <p>{this.props.mood}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}



export default Results