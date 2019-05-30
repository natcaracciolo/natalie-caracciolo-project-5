import React, {Component} from 'react';
import Aztro from './Aztro.js';
import './App.css';
import axios from 'axios';
import Titles from './Titles.js';
import Results from './Results.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      compatibility: '',
      luckynumber: '',
      color: '',
      mood: '',
      description: '',
      userInput: ''
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

      // the api is called, then semd a response to to console 

    }).then(response => {
      console.log(response)

      // this is the information that is being sent to the state once the user enters their sign 
      this.setState({
        date: response.data.date_range,
        compatibility: response.data.compatibility,
        luckynumber: response.data.lucky_number,
        color: response.data.color,
        mood: response.data.mood,
        description: response.data.description,
        userInput: ''
      })
    });
  }

  render() {
    return (
      <div className="App">
      
          <Titles /> 

          <Aztro 
            onChange={this.handleChange}
            onClick={this.handleClick}
            userInput={this.state.userInput}
          /> 
          <Results
            date={this.state.date} 
            compatibility={this.state.compatibility} 
            luckynumber={this.state.luckynumber} 
            color={this.state.color}
            mood={this.state.mood}  
            description={this.state.description} 
      
          />
      </div>
    );
  }
}



export default App;
