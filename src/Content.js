import React from 'react';
import _ from 'lodash';
import './Content.css';
import Card from './Card.js';

const Content = React.createClass({
  displayName: 'Content',

propTypes: {
  cards: React.PropTypes.object,
  numberOfCards: React.PropTypes.number,
  flipCard: React.PropTypes.func,
},

renderCards(){
  const cards = _.map(this.props.cards, (card) => {
      return (
      <Card 
          key={card.id}
          id={card.id}
          image={card.image}
          isFlipped={card.isFlipped}
          flipCard={this.props.flipCard} 
        /> 
          )
   })

  return cards
},

  render() {
    return (
      <div className="Content">
      {this.renderCards()}
      <div className="Score">
      </div>

      </div>
    );
  }
})

export default Content;