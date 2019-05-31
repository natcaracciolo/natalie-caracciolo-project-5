import React, {Component} from 'react';


// state is place that we can use to store our data that the api gives us 
class Aztro extends Component {

    render() {
        return (
            <div>
                <form action="submit">

                    <label htmlFor="newSign">Enter Your Sign:</label>

                    { /* Attatch handle change method*/}
                    <input type="text" id="newSign" onChange={this.props.onChange} value={this.props.userInput} />

                    { /* Attatch handleClick method*/}
                    <button onClick={this.props.onClick}>Get Your Horoscope</button>

                </form>
            </div>
        );   
    }
}

export default Aztro;