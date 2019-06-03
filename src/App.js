import React, {Component} from 'react';
import Aztro from './Aztro.js';
import './App.css';
import axios from 'axios';
import Titles from './Titles.js';
import Results from './Results.js';
import Particles from 'react-particles-js';
import Alert from './Alert';


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
      userInput: '',
      showResults: false,
      error: false,
      showAlert: false
    }
  }
  // this method puts information in the state when the user types in their sign 
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }


  handleAlertChange = (e) => {
    this.setState ({
      showAlert: !(this.state.showAlert)
    })
  }
  //this method pulls information out of the state when the button is clicked 
  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      error:false
    })
   
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
        userInput: '',

        //when info comes back from api, then 
        showResults: true
      })
    }).catch((error ) => {

      this.setState({
        error:true
      })

      
    })
  }

  render() {
    return (
      <div className="App" id="particles">

      <Alert
        showAlert={this.state.showAlert}
        closeAlert={this.handleAlertChange}
      />

      <Particles 
          params={{
            "particles": {
              "number": {
                "value": 60,
                "density": {
                  "enable": true,
                  "value_area": 600
                }

              },
              "line_linked": {
                "enable": true,
                "opacity": 0.04
              },
              "move": {
                "direction": "rotate",
                "speed": .5
              },
              "size": {
                "value": 1.9
              },
              "opacity": {
                "anim": {
                  "enable": true,
                  "speed": 1.5,
                  "opacity_min": 0.06
                }
              }
            },
            "interactivity": {
              "events": {
                "onclick": {
                  "enable": true,
                  "mode": "push"
                }
              },
              "modes": {
                "push": {
                  "particles_nb": 1.5
                }
              }
            },
            "retina_detect": true
          }}
      
    
      
      /> 

         <Titles 
            showAlert={this.handleAlertChange}
          
         /> 

          <Aztro 
            onChange={this.handleChange}
            onClick={this.handleClick}
            userInput={this.state.userInput}
          /> 

          {
            this.state.error ? <p>uh oh! looks like theres a spelling error. please make sure evrything is spelled correctly :)</p>: ''  
          }

          {
            
          this.state.showResults === true && <Results
            date={this.state.date}
            compatibility={this.state.compatibility}
            luckynumber={this.state.luckynumber}
            color={this.state.color}
            mood={this.state.mood}
            description={this.state.description}

          />
          }

      


        
      </div>
    );
  }
}



export default App;
