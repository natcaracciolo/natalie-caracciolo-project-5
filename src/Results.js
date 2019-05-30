import React, {Component} from 'react';


class Results extends Component {
    render() {
        // console.log(this.props)

        
        return (
            <div>
                <p>your compatibility is {this.state.compatibility}</p>
                <p>your lucky number is {this.state.number}</p>
                <p>your lucky color is {this.state.color}</p>
                <p>your mood is {this.state.mood}</p>
                <p>your description is {this.state.description}</p>
            </div>
        )
    }
}

export default Results