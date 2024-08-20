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
console.log(c)