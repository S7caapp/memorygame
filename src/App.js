import React from 'react';
import _ from 'lodash';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import grumpyCat from '../images/grumpy-cat.jpg';
import rabbit from '../images/rabbit1.jpg';
import happyPug from '../images/happy-pug.jpg';
import hamster from '../images/hamster.jpg';
import chipmunk from '../images/chipmunk.jpg';
import guineaPig from '../images/guineapig.jpg';



const App = React.createClass({
  displayName: 'App',

  getInitialState(){
    return{
      numberOfCards:0,
      cards:{},
      images:[],
      flipped:[],

    }

  },

  handleStartNewGame()
  {
    const numberOfCards = 12
    let images = [
      {
        id: 1,
        src: grumpyCat,
        alt: '../images/grumpy-cat.jpg',
      },
      {
        id: 2,
        src: happyPug,
        alt: '../images/happy-pug.jpg',
      },
      {
        id: 3,
        src: rabbit,
        alt: '../images/rabbit1.jpg',
      },
      {
        id: 4,
        src: chipmunk,
        alt: '../images/chipmunk.jpg',
      },
      {
        id: 5,
        src: hamster,
        alt: '../images/hamster.jpg',
      },
      {
        id: 6,
        src: guineaPig,
        alt: '../images/guineapig.jpg',
      },]
    images = _.shuffle(_.concat([], images, images));
    let cards = {}
    for (let i = 0; i < numberOfCards; i++){
      cards[i]= {
        id: i,
        image: images[i],
        isFlipped: false,
      }
    }
    this.setState ({
      numberOfCards: numberOfCards,
      images: images,
      cards: cards,

    })
  },

    flipCard(cardID) {
      if (!this.state.cards){
        return
      };
     let cards = _.cloneDeep(this.state.cards);
      console.log("Ey!", cardID, cards[cardID]);
      cards[cardID].isFlipped = true;

     let flipped = _.cloneDeep(this.state.flipped);
     
     if (!_.isEqual(flipped[0], cards[cardID])){
      flipped.push(cards[cardID]);
      }
      console.log(flipped)

      this.setState ({
        cards: cards,
        flipped: flipped,
      }, 

      () => {
        if (flipped.length === 2) {
          this.compareCards(flipped, cards)
        }

      })
    },

compareCards(flipped, cards) {
  const cardOne = flipped[0]
  const cardTwo = flipped[1]
  if (cardOne.image.id === cardTwo.image.id) {
    delete cards[cardOne.id]
    delete cards[cardTwo.id]
  } else {
    cards[cardOne.id].isFlipped = false
    cards[cardTwo.id].isFlipped = false
  }
  
  setTimeout(() => {
    this.setState ({
      cards: cards,
      flipped: [],
      },

      () => {
      if (_.isEmpty(cards)) {
      alert("Du vann!!!")
      }
    }) 
      }, 
      1700)
    },





  render() {
    return (
      <div className="App">
      <Header /> 
      <Content 
        cards={this.state.cards} 
        numberOfCards={this.state.numberOfCards}
        flipCard={this.flipCard}
      />
      <Footer 
        handleStartNewGame={this.handleStartNewGame}/>    
      </div>
    );
  }
})



export default App;
