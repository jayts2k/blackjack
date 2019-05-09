/* 
    Title: Blackjack
    Author: Johnny Smith
    Date: 09/05/2019
*/

let deck = [
    'Ace of Spades',
    'Two of Spades',
    'Three of Spades'
];

let playerCards = [deck[0], deck[1]]

let totalChips = 1000,
    totalBet = [20, 40, 60, 80, 100];

console.log('Welcome to Blackjack!');

console.log('You are dealt: ');
console.log(' ' + playerCards[0]);
console.log(' ' + playerCards[1]);