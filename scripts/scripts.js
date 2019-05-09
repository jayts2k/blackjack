/* 
    Title: Blackjack
    Author: Johnny Smith
    Date: 09/05/2019
*/

let suits = ['Hearts','Clubs','Diamonds','Spades'],
    values = ['Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace'],
    deck = []

for (let suitIdx=0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx=0; valueIdx < values.length; valueIdx++) {
        deck.push(values[valueIdx] + ' of ' + suits[suitIdx])
    }
}

let playerCards = [deck[0], deck[1]]

let totalChips = 1000,
    totalBet = [20, 40, 60, 80, 100];

console.log('Welcome to Blackjack!');

console.log('You are dealt: ');
console.log(' ' + playerCards[0]);
console.log(' ' + playerCards[1]);
console.log(deck);