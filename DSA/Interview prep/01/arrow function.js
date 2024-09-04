// Arrow Function
const sum = (a,b) =>{
    return a + b;
    
}
console.log(sum(10, 90));

// IIFE - ES-6 syntax

(function(){
    console.log("Hello");
})
() // calling the function
// to write IIFE in Arrow Function
(() => 
    console.log("ASDB")
)();

const test = () => {
    console.log(this);
    
}
test();

const test1 = () => {
    console.log("HI");
}
const obj1 = new test1();
 console.log(obj1);