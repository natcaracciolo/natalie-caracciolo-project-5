import React, {Component} from 'react';
import Alert from 'sweetalert-react';


class Titles extends Component {
    render() {
        return(

            <div>
                <h1>Daily Horoscope</h1>
                <p>enter your astrological sign below to get some advice on your day! </p>
                <p> not sure what your sign is? no problem. <button id='alert' onClick={this.props.showAlert}>click here </button>to find out. </p>
            </div>

            

        );
    }
}


export default Titles;
