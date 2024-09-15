//Creating a Deck Of cards problem



function makeDeck(){
    // This function creates and returns a deck of cards

    // Define arrays for suits and values
    const suits = ['hearts','diamonds','spades','clubs'];
    const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

    // Initialize an empty array to store the deck
    const deck = [];

    // Nested loops to create each card
    for(let value of values){
        // Outer loop iterates through each value
        for(let suit of suits){
            // Inner loop iterates through each suit
            // For each combination, create a card object and add it to the deck
            deck.push({value, suit})
        }
    }

    // Return the completed deck
    return deck;
}

// Call the function and log the result to the console
console.log(makeDeck());
// make the values split where we can get the maximum number of combinations of each of them.
function makeMaxCombinations() {
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const colors = ['red', 'black'];
    const specialAttributes = ['wild', 'reverse', 'skip', 'draw two', 'draw four'];

    const combinations = [];

    for (let value of values) {
        for (let suit of suits) {
            for (let color of colors) {
                for (let attribute of specialAttributes) {
                    combinations.push({ value, suit, color, attribute });
                }
                combinations.push({ value, suit, color }); // Regular card without special attribute
            }
        }
    }

    // Add Jokers
    combinations.push({ value: 'Joker', color: 'red' });
    combinations.push({ value: 'Joker', color: 'black' });

    return combinations;
}

console.log(makeMaxCombinations());

function deck(){
    const Suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const Values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const deck = [];
    for(let value of Values){
        for(let suit of Suits){
            deck.push({value,suit});
        }
    }
    return deck;
}

console.log(deck());

function drawCard(deck){
    return deck.pop();
}
// Storing in a variable
const myDeck = deck();
const myCard = drawCard(myDeck);
console.log(card);
