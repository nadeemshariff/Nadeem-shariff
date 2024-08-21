// Control Flow

//>,<,>=,<=,!=,===,== ,!==

const temp = 39.5;

// if else
if (temp > 40) {
    console.log("it's too hot outside")
} else if (temp < 39) {
    console.log("it's too cold outside")
} else {
    console.log("it's just right outside")
}


const score = 200;

// if else

if (score > 100) {
    const power = "Hulk"
    console.log(`User got ${power}`);
}

// if
let x = 90;
if (x < 10) {
    console.log("x is less than 10")
} else if (x > 10) {
    console.log("x is greater than 10")
} else {
    console.log("x is equal to 10")
}

// switch
switch (x) {
    case 10:
        let x= "Goioioioi"
        console.log(`${x} is equal to 10`)
        break
    case 20:
        console.log("x is equal to 20")
        break
    default:
        console.log("x is neither 10 nor 20")
}
// switch with multiple cases
switch (x) {
    case 10:
        console.log("x is equal to 10")
    case 20:
        console.log("x is equal to 20")
    default:
        console.log("x is neither 10 nor 20")
}
// switch with no break
switch (x) {
    case 10:
    case 20:
        console.log("x is equal to 10 or 20")
    default:
        console.log("x is neither 10 nor 20")
}

const bal = 1000;

if (bal > 500) {
    if (bal > 1000) {
        console.log("you are rich")
    } else {
        console.log("you are average")
    }
}

const userLoggedIn = true;
const debitCard = true;
const loggedInGoogle = false;
const loggedInEmail = true;

if (loggedInGoogle || loggedInEmail) {
    console.log("User is logged in with Google or Email");
    
}
if (userLoggedIn && debitCard ) {
    console.log("User is logged in and has a debit card");
}

let age = 45;
let gender = 'female';
let finalDiscount;

if (gender === 'female') {
    finalDiscount = 50;
} else if (age <= 5) {
    finalDiscount = 100;
} else if (age <= 8) {
    finalDiscount = 5;
} else if (age >= 65) {
    finalDiscount = 70;
} else {
    finalDiscount = 0;
}

console.log(`Your final discount is ${finalDiscount}`);

let userEmail = "N@mail.com";

if (userEmail.endsWith("@gmail.com")) {
    console.log("User is logged in with Google or Email");
}
if (userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (???) null undefined

let val;
// val1 = 5 ?? 10
// val1 = null ?? 10;
val1 = undefined ?? 15; 

console.log(val1);

// terinary Operator

const num = 10;
const result = num > 0 ? "positive" : "negative";
console.log(result);

//FizzBuzz Challenge

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Loops

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(i);
}
// console.log(element);

for (let i = 0; i <=10; i++) {
    console.log(`Outerloop value: ${i}`)
    // const element = array[i];
    for (let j = 0; j <= 10; j++) {
        // const element = array[j];
        console.log(i + "*" + j + " = " + i*j)
        
    }
}

for (let i = 1; i <= 20 ; i++) {

    if (i == 5) {
        console.log(`Detected ${i}`);
        continue;
    }
    console.log(`value of i is ${i}`);
    
}


// While

let arr = ['a','b','c']

let newArr = 0;

while (newArr < arr.length) {
    console.log(`value is ${arr[newArr]}`);
    newArr = newArr + 1
}


// For in

const person = {
    name: "rohini",
    age: 24
}

for (const key in person) {
    console.log(key);
    console.log(person[key]);
}

// For of

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const element of arr1) {
    console.log(element);
}