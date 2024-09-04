function outer(){
    function inner(){ // here inner is a private member
        console.log("hello");
    }
    // inner();
    return inner;
}
// inner();// inner is not defined
// outer();
const cl = outer();
cl();
const outer1 = () => {
    return() => { // here inner is a private member
        console.log("hello");
    }
    // inner();
    return inner;
}
// inner();// inner is not defined
// outer();
const cl1 = outer1();
cl1();

// anonymous function to call inner function
function o (){
    return function () { // getting Anonymous function with return keyword
        console.log("Anon")
    }
}
const call = o();
call();
// o()(); // Anon

const outerFunc = () => {
    const innerFunc = () => console.log('hi');

    return innerFunc;
};

const innerFuncVar = outerFunc();
innerFuncVar();

const anonFuncVar = (() => () => console.log('bye'))();
anonFuncVar();


// add counter
const addCounter =() =>{
    let counter = 0; // this is a global variable for below arrow function
    return () => {
        return ++counter;
    }
}
const add = addCounter();
console.log(add());
console.log(add());
console.log(add());
console.log(add());

// let sum,a,b/