console.table({city: "New York", country: "USA"});

// Variables
let greeting = "Hello, World!";
const PI = 3.14159;

let getGreeting = (greeting) => {
    return greeting;
}
console.log(getGreeting(greeting));

//Operations
let a = 10;
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Comparison Operators
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// Logical Operators
console.log(a && b);
console.log(a || b);
console.log(!a);

// example of credit card
let islooged = true;
let hasCreditCard = false;
let isStudent = true;
let isSenior = false;
let isPaid = true;
let isActive = true;

let canApplyForCreditCard = islooged && hasCreditCard && isStudent && isSenior && isPaid && isActive;

console.log(canApplyForCreditCard);

console.log(islooged && hasCreditCard);
console.log(islooged || hasCreditCard);
console.log(!islooged);

//Authenitication operation logic with email and password
let email = "test@gmail.com";
let password = "123456";

let isEmailValid = email === "test@gmail.com";
let isPasswordValid = password === "123456";

console.log(isEmailValid && isPasswordValid);

//Assignment Operators
let x = 10;
x += 5;
console.log(x);

x -= 5;
console.log(x);

//Operator Precedence
let y = 5;
let z = 10;
console.log(y + z * 2);
//example of operator precedence with complex mathematical expression
let t = 5;
let u = 10;
let v = 15;

console.log(t + u * v);

//Types of Data types- Primitive and Non-Primitive
//Primitive Data Types- String, Number, Boolean, Null, Undefined, Symbol, BigInt
//Non-Primitive Data Types- Object, Array, Function, Date, RegExp, Error, Map, Set, WeakMap, WeakSet

let str = "Hello";
let num = 10;
let bool = true;
let nullVar = null;
let undefinedVar = undefined;
let symbolVar = Symbol("Hello");
let bigintVar = 10n;

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof nullVar);
console.log(typeof undefinedVar);
console.log(typeof symbolVar);
console.log(typeof bigintVar);



// Nullish Coalescing Operator
let user = {
    name: "John",
    age: 30
};

let userName = user.name ?? "Guest";
console.log(userName);

// Ternary Operator
let Age = 18;
let canVote = Age >= 18 ? "Yes" : "No";
console.log(canVote);


// Function declaration
function displayGreeting(name) {
    return `${greeting} My name is ${name}.`;
}

// Object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Array
let fruits = ["Apple", "Banana", "Orange"];

// Conditional statement
let time = new Date().getHours();
let message;

if (time < 12) {
    message = "Good morning!";
} else if (time < 18) {
    message = "Good afternoon!";
} else {
    message = "Good evening!";
}

// Loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// DOM manipulation
document.getElementById("output").innerHTML = displayGreeting(person.fullName());

// Event handling
document.getElementById("button").addEventListener("click", function() {
    alert("Button clicked!");
});

// AJAX
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();

// Error handling
xhr.onerror = function() {
    console.error("Error occurred while making the request.");
};

// Asynchronous programming
function fetchData(callback) {
    setTimeout(function() {
        callback("Data fetched successfully!");
    }, 2000);
}

fetchData(function(result) {
    console.log(result);
});

// Module pattern
let module1 = function() {
    let privateVariable = "I am private";

    function privateMethod() {
        console.log(privateVariable);
    }


    return {
        publicMethod: function() {
            privateMethod();
        }
    };
}();

module1.publicMethod();

// ES6 features

// Arrow functions
let sum = (a, b) => a + b;

// Template literals
let name = "John";
let greetingMessage = `Hello, ${name}!`;

// Default parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// Spread operator
let numbers = [1, 2, 3];
let combinedNumbers = [...numbers, 4, 5, 6];

// Destructuring
let personDetails = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

let { firstName, lastName, age } = personDetails;

// Async/await
async function fetchDataAsync() {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    return data;
}

fetchDataAsync().then(data => console.log(data));

// Promises
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 2000);
});

promise.then(result => console.log(result));

// Classes

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog("Buddy");
dog.speak();

