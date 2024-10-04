//Check if a number is greate than another number:

let num1 = 1;
let num2 = 2;

if (num1 > num2) { // inside this a block of code
    console.log("num1 is greater than num2");
} else {
    console.log("num2 is greater than num1");
}
// Output: num2 is greater than num1

// Challenge 2: Write a program that checks if a string is even to equal string:

let username = "Nadeem";
let anotherUsername = "Rohini";

if (username === anotherUsername) {
    console.log("username and anotherUsername are equal");
}else{
    console.log("username and anotherUsername are not equal");
}

//Checking is a variable is a number or not:

let balance = [];

if (typeof balance === "number") {
    console.log("balance is a number");
} else {
    console.log("balance is not a number");
}
// Output: balance is a number

//Challenge 4: Checking if a Boolean value is true or false:

let isRaining = true;

if (isRaining) {
    console.log(`Its raining today`);
} else {
    console.log("Its not raining today");
}
// Output: It's raining today

//Challenge 5: checking if a array is empty or not:

let emptyArray = [1, 2, 3];

console.log(emptyArray.length)
if (emptyArray.length === 0) {
    console.log("The array is empty");
} else {
    console.log("The array is not empty");
}
// Output: The array is empty