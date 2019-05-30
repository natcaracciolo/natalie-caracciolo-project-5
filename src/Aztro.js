import React, {Component} from 'react';
import axios from 'axios';

// state is place that we can use to store our data that the api gives us 
class Aztro extends Component {
    constructor() {
        super();
        this.state = {
            date: '',
            compatibility: '',
            luckynumber: '',
            color: '',
            mood:'',
            description:'',
        
            userInput:''
        }
    }

    // this method puts information in the state when the user types in their sign 
    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    //this method pulls information out of the state when the button is clicked 
    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.userInput)

        // axios API call 
        const URL = `https://aztro.sameerkumar.website`;
        axios({
            url: URL,
            method: 'POST',
            dataType: 'json',
            params: {
                sign: `${this.state.userInput}`,

            }
        }).then(response => {
            console.log(response)

            this.setState({
                date: response.data.date_range,
                compatibility: response.data.compatibility,
                luckynumber: response.data.lucky_number,
                color: response.data.color,
                mood: response.data.mood,
                description: response.data.description
            })
        });
    }

    render() {
        return (
            <div>
                <form action="submit">

                    <label htmlFor="newSign">Enter Your Sign</label>

                    { /* Attatch handle change method*/}
                    <input type="text" id="newSign" onChange={this.handleChange} value={this.state.userInput} />

                    { /* Attatch handleClick method*/}
                    <button onClick={this.handleClick}>Get Your Horoscope</button>

                </form>
            </div>
        );   
    }
}

export default Aztro;