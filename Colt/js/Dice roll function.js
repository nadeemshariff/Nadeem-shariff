// Dice Roll Function
function rollDie() {
    let roll = Math.ceil(Math.random() * 6) + 1;
    console.log(`You got a ${roll}`);
}

rollDie();
// the throwDice function takes an array as an argument
// and calls the rollDie function once for each element in the array
function throwDice(array) {
    array.forEach(() => {
        rollDie();
    });
}

// we call the throwDice function with an array [1,2,3,4,5,6]
// which results in the rollDie function being called 6 times
throwDice([1, 2, 3, 4, 5, 6]);


function greet(name){
    console.log(`HI, ${name}`);
    console.log('HI');
}

greet('Mansha');

function Square(num){
    return num * num;
}
console.log(Square(5));

// Write a isValidPassword function
// It accepts 2 arguments: Password and username
// Password must:
// -be at least 8 characters
// - cannot contain spaces
// - cannot contain username
// - If all requriments are met , Return True. Otherwise false
// isValidPassword('89Fjj1nms','dogLuvr)-True
// isValidPassword('dogLuvr123!','dogLuvr)-false
// function isValidPassword(password, username) {
//     const minPasswordLength = 8;
//     const spaceInPassword = password.indexOf(' ') !== -1;
//     const usernameInPassword = password.indexOf(username) !== -1;

//     return (
//         password.length >= minPasswordLength &&
//         !spaceInPassword &&
//         !usernameInPassword
//     )
// }

// if (process.argv[2] && process.argv[3]) {
//     console.log(isValidPassword(process.argv[2], process.argv[3]));
// } else {
//     console.log('Please provide a password and a username');
// }

function isValidPassword(password, username){
    const minPasswordLength = 8;
    const spaceInPassword = password.indexOf(' ') !== -1;
    const usernameInPassword = password.indexOf(username) !== -1;
    
    if(minPasswordLength && spaceInPassword && usernameInPassword){
        return false;
    }
    
    return true;
}
console.log(isValidPassword("chk123rt","Username"))

//Avg numbers
function avg(arr){
    let total = 0;
    for(let num of arr){
        total += num;
    }
    return total / arr.length;
}
console.log(avg([1,2,3,4,5,6,7,8,]));

// // isPangram
// function isPangram(pangramString){
//     pangramString = pangramString.toUpperCase();
//     for(let charNum = 65; charNum <= 90; ++charNum){
//         let char = String.fromCharCode(charNum);
//         if(pangramString.indexOf(char) === -1){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// function IsPangram(sentence){
//     return (new Set(sentence.replace(/[^\w]/g, "").toLowerCase())).size == 26
//     }

//     console.log(IsPangram("The quick brown fox jumps over the lazy dog"))

    function isPanGram(str){
        let lowerCase = str.toLowerCase();
        let string = 'abcdefghijklmnopqrstuvwxyz';
        for (const char of string) {
            // if (str.indexOf(char) === -1) {
            //     return
            // }
            if (!lowerCase.includes(char)) {
                return false
            }
        }

        return true
    }

        console.log(isPanGram("The quick brown fox jumps over the lazy dog "));

// Playing cards game
// Write a getCard() function which returns a random playing card object, like:
// { value: 'K', suit: 'clubs'}
// Pick a random value from:
// 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// Pick a random suit from: clubs, diamonds, hearts, spades
// Return both in an object
// and add Storage remembrance of previous cards.
function pick(arr){
    //pick random element from arr
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
    
}

function getCard(){
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    // let value = values[Math.floor(Math.random()*values.length)];// random value 
    // let suit = suits[Math.floor(Math.random()*suits.length)];// 
    return {value: pick(values), suit: pick(suits)};
    // return {value: value, suit:suit};
}
console.log(getCard());
let previousCards = [];
console.log(getCard())