import React from 'react';
import SweetAlert from 'sweetalert-react';




class Alert extends React.Component {
    render() {
        return (
            
                
                <SweetAlert
                    show={this.props.showAlert}
                    title="Sign Guide"
                    text="Aries (March 21 - April 19)
Taurus(April 20 - May20)
Gemini (May 21 - June 20)
Cancer (June 21 - July 22)
Leo (July 23 - August 22)
Virgo (August 23 - September 22)
Libra (September 23 - October 22)
Scorpio (October 23 - November 21)
Sagittarius (November 22 - December 21)
Capricorn (December 22 - January 19)
Aquarius (January 20 - February 18)
Pisces (February 19 - March 20)
"

                    value="none"
                    onConfirm={this.props.closeAlert}
                />
            
        );
    }
}

export default Alert;