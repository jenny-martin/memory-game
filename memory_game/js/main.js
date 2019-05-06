var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

const checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

const flipCard = function(cards) {
// if (cardsInPlay.length === 2) {
console.log("User flipped " + cards);
}
// }

cardsInPlay.push(cards[0]);

flipCard(cards[0]);
flipCard(cards[2]);

checkForMatch();
