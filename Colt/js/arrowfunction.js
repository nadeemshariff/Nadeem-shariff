// Arrow Function 

// Arrow function does not have its own this keyword unlike the normal function. 
// It uses the this keyword from the surrounding scope.
 
let add = (x, y) => x + y;
console.log(add(10, 20))
// Output: 30

// Syntax - variable = (Parameters(a,b)) => {}

// (parameters) => expression
// (parameters) => { code }

const one = (a, b) => {
    return a + b
}
console.log(one(10, 20));

// Implicit returns

const two = (a, b) => a + b;
console.log(two(70, 50));

// Returning a Object 
const createObj = () => ({
    name: "MD",
});

console.log(createObj())

const num = [1,2,3,4,5,6];

num.forEach(function(n) {
    console.log(n);
});

// Arrow function in a call back
num.forEach((n) => {
    console.log(n)
});

const user = {
    username: "MD",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome!!`);
        console.log(this);

    }
}
// user.welcomeMessage();
// user.username = "Mansha";
// // console.log(user.welcomeMessage);
// user.welcomeMessage();
console.log(this); 


// function chai(){
//     let userName = "Rohini";
//     console.log(this.userName);
// }
// chai();

const arr = () => {
    let userName = "Rohini";
    console.log(userName);
    console.log(this.userName);
};
arr();

const addTwo = (n1 ,n2) => n1 + n2//for retruning values
const addtwo = (n1, n2) => ({username: "Mansha"})// for returning Objects wrapping around() for a object is a must. 

console.log(addTwo(5,6));

const myArr = [1,2,3,4,5,6];

myArr.forEach(() => {
    console.log(myArr );
})