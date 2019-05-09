/* 
    Title: Blackjack
    Author: Johnny Smith
    Date: 09/05/2019
*/

let suits = ['Hearts','Clubs','Diamonds','Spades'],
    values = ['Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace']


function createDeck() {
    let deck = [];
    for (let suitIdx=0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx=0; valueIdx < values.length; valueIdx++) {
            deck.push(values[valueIdx] + ' of ' + suits[suitIdx])
        }
    }
    return deck;
}

function getNextCard() {
    return deck.shift();
}

let deck = createDeck();
let playerCards = [getNextCard(), getNextCard()];
let totalChips = 1000,
    totalBet = [20, 40, 60, 80, 100];

console.log('Welcome to Blackjack!');
console.log('You are dealt: ');
console.log(' ' + playerCards[0]);
console.log(' ' + playerCards[1]);
console.log(deck);