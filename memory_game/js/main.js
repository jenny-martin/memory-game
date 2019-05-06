const cards = [
    {
    rank: 'queen',
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: 'queen',
    suit: 'diamonds',
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: 'king',
    suit: 'hearts',
    cardImage: "images/king-of-hearts.png"
},
{
    rank: 'king',
    suit: 'diamonds',
    cardImage: "images/queen-of-diamonds.png"
}
];


const cardsInPlay = [];

const checkForMatch = function() {
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}

const flipCard = function(cards) {
console.log("User flipped " + cards.rank);
console.log(cards.cardImage);
console.log(cards.suit);
}


cardsInPlay.push(cards.rank);

flipCard(cards[0]);
flipCard(cards[2]);

checkForMatch();