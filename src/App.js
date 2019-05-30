import React, {Component} from 'react';
import Aztro from './Aztro.js';
import './App.css';
import Titles from './Titles.js';
import Results from './Results.js';



class App extends Component {

  render() {
    return (
      <div className="App">
      
      <Titles /> 
      <Aztro /> 
      {/* <Results /> */}


      </div>
    );
  }
}



export default App;
