var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = [0];
cardsInPlay.push(cards[0]);

console.log("User flipped " + cardsInPlay);

var cardTwo = [2];

cardsInPlay.push(cards[2]);


console.log("User flipped " + cardsInPlay);


if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2]) {
alert('You found a match!');
} else (cardsInPlay[0] === cardsInPlay[1] || cardsInPlay[0] === cardsInPlay[3])
  alert('Sorry, try again.');
