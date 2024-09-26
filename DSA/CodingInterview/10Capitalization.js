// Sentence Captilazation

function capitalize(sentence) {
    return sentence
        .split(" ") // Splits the sentence into an array of words
        .map((word) => word[0].toUpperCase() + word.slice(1)) // Capitalizes the first letter of each word
        .join(" "); // Joins the words back into a sentence
}
console.log(capitalize("hello world")); // "Hello World"
// Write a function that accepts a string. The function should capitalize the first letter of each word in the string and return the result.

// Examples:

// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working!') --> 'Look, It Is Working!'

function Capitalize(str){
    const words = [];
    
    for(let Word of str.split(' ')){
        words.push(Word[0].toUpperCase() + Word.slice(1));
    }

    return words.join(' ');

}
console.log(Capitalize('a short sentence')); // "A Short Sentence"

// Alternative solution
function SentenceCap(str){
    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++){
        if(str[i - 1] === ' '){
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(SentenceCap('a short sentence')); // "A Short Sentence"