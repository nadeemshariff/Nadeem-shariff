// Functions

// Defining a function
function myFunction() {
    console.log("Hello!")
}

// Calling a function
myFunction()

// Defining a function with parameters
function myFunctionWithParameters(x, y) {
    console.log(x + y)
}   

// Calling a function with parameters
myFunctionWithParameters(5, 10)

// Defining a function with return
function myFunctionWithReturn(x, y) {
    return x + y
}

// Calling a function with return
console.log(myFunctionWithReturn(5, 10))

// Defining a function with parameters and return

function add(n1,n2){
    let result = n1 + n2;
    return result;
}
const result = add(4, 5);
console.log("Result: ", result);


function loginUser(username = 'mansha'){
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just Logged In.`
}

const message = loginUser('Rohini');

console.log(message);

function calculateCartPrice(val1,val2, ...num1){
    return num1;

}

console.log(calculateCartPrice(100,400,500,2000));

const user = {
    username: "mansha",
    price: 100
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username } and price of ${anyobject.username} is ${anyobject.price}`)
}

// handleObject(user);
handleObject({username: "mansha", price: 100});

const myNewArray = [200,400,500];

function returnSecondVal(getArrat){
    return getArrat[1];
}

// console.log(returnSecondVal(myNewArray))
console.log(returnSecondVal([200,400,500]));


//Scope

let x = 10;
let y = 20;

function myFunction() {
    let x = 30;
    let y = 40;
    console.log(x);
    console.log(y);
}

myFunction();
console.log(x);
console.log(y);

//Nested scope
function one(){
    const username = "mansha";

    function two(){
        const website = "rohini";
        console.log(username)
    }
    // console.log(website);

    two(); 

}

one();

if (true) {
    const username = "rohini";
    if (username === "rohini") {
        const website = "rohini";
        console.log(username + " " + website);
        
    }
    // console.log(website)
}
// console.log(username);

// const element = 300;
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

if (true) {
    const a = 500;// it is block scope
    let b = 600;// it is block scope
    var c = 700;//// it is global scope
}
// console.log(a)
// console.log(b)
console.log(c);


//Scope
function outerFunction() {
    let x = 10;

    function innerFunction() {
        let y = 20;
        console.log(x + y);
    }

    innerFunction();
}

outerFunction();


//Block Scope

{
    let blockVar = "I'm block-scoped";
    const blockConst = "I'm also block-scoped";
    
    console.log(blockVar);
    console.log(blockConst);
}

// console.log(blockVar); // This would cause a ReferenceError
// console.log(blockConst); // This would also cause a ReferenceError

if (true) {
    let ifBlockVar = "I'm scoped to this if block";
    console.log(ifBlockVar);
}

// console.log(ifBlockVar); // This would cause a ReferenceError

for (let i = 0; i < 3; i++) {
    let forBlockVar = "I'm scoped to this for loop";
    console.log(forBlockVar);
}

// console.log(forBlockVar); // This would cause a ReferenceError
// console.log(i); // This would also cause a ReferenceError

//Example
// Function declaration: Defines a function named 'addNumbers' that takes two parameters 'num1' and 'num2'
function addNumbers(num1, num2) {
    // Declares a constant variable 'sum' and assigns it the value of num1 + num2
    const sum = num1 + num2;

    // Conditional statement: Checks if the sum is greater than 10
    if (sum > 10) {
        // If sum > 10, declares a block-scoped constant 'message' with a string value
        const message = "The sum is greater than 10";
        // Logs the 'message' to the console
        console.log(message);
    }
    // This line is commented out because 'message' is not accessible outside the if block
    // console.log(message); // ReferenceError: message is not defined
}

// Function call: Invokes the 'addNumbers' function with arguments 8 and 9
addNumbers(8, 9);
