import React from 'react';
import './Card.css';

const Card = React.createClass({
  displayName: 'Card',

propTypes: {
id: React.PropTypes.number,
image: React.PropTypes.object,
isFlipped: React.PropTypes.bool,
flipCard: React.PropTypes.func,

},

  render() {
    let image = null
    if (this.props.isFlipped) {
    	image = (
    		<img src={this.props.image.src} alt={this.props.image.src.alt}/>
    		)
    	}
    return (
      <div onClick={this.props.flipCard.bind(null, this.props.id)} className="Card">
      {image} 
      </div>
    );
  }
})

export default Card;