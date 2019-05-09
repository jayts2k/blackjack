/* 
    Title: Blackjack
    Author: Johnny Smith
    Date: 09/05/2019
*/

let suits = ['Hearts','Clubs','Diamonds','Spades'],
    values = ['Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace']

let textArea = document.getElementById('text-area'),
    newButton = document.getElementById('new-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button')

// Hide other buttons
hitButton.style.display = 'none';
stayButton.style.display = 'none';

newButton.addEventListener('click', function() {
    textArea.innerText = 'Started...';
    newButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';

});

function createDeck() {
    let deck = [];
    for (let suitIdx=0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx=0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            }
            deck.push(card)
        }
    }
    return deck;
}

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

function getNextCard() {
    return deck.shift();
}

let result = Math.floor(Math.random()*52);
let deck = createDeck();
let playerCards = [getNextCard(), getNextCard()];
let totalChips = 1000,
    totalBet = [20, 40, 60, 80, 100];

console.log('Welcome to Blackjack!');
console.log('You are dealt: ');
console.log(result);
console.log(' ' + getCardString(playerCards[0]));
console.log(' ' + getCardString(playerCards[1]));
console.log(deck);