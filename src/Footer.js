import React from 'react';
import './Footer.css';


const Footer = React.createClass({
  displayName: 'Footer',

propTypes: {
	handleStartNewGame: React.PropTypes.func,

},



  render() {
    return (
      <div className="Footer">
     
      <button onClick={this.props.handleStartNewGame}>
	Start new game!
	</button>    
      </div>
    );
  }
})

export default Footer;