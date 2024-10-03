// Number
let num = 10;
console.log(num);

// String
let str = "Mansha";

let greetMessage = `Hello, ${str}`;
console.log(greetMessage);

// Boolean
let bool = true;
console.log(bool);

// Null
let nullVar = null;
console.log(nullVar);


// Undefined
let undefinedVar;
console.log(undefinedVar);

// Symbol
let sm1 = Symbol("Hello");
let sm2 = Symbol("Hello");
console.log(sm1 === sm2);

let symbolVar = Symbol("Hello");
console.log(symbolVar);

// BigInt
let bigintVar = 10n;
console.log(bigintVar);

// Object
let obj = {
    name: "John",
    age: 30
};
console.log(obj);
console.log(typeof obj);
console.log(obj.name);

let today = new Date();
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

// Array- it is a collection of elements/Things 
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

//Type conversion
let num1 = 10;
let str1 = "20";
console.log(num1 + str1);
console.log(typeof (num1 + str1));

let num2 = 10;
let str2 = "20";
console.log(num2 + parseInt(str2));
console.log(num2 + Number(str2));
console.log(num2 + parseFloat(str2));

// Function
let func = function() {
    return "Hello";
};
console.log(func);

// Date
let date = new Date();
console.log(date);

// RegExp
let regExp = /Hello/;
console.log(regExp);

// Error
let error = new Error("Hello");
console.log(error);



// Map
let map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map);

// Set
let set = new Set();
set.add("John");
set.add("Jane");
console.log(set);

// WeakMap
let weakMap = new WeakMap();
weakMap.set("name", "John");
weakMap.set("age", 30);
console.log(weakMap);

// WeakSet
let weakSet = new WeakSet();
weakSet.add("John");
weakSet.add("Jane");
console.log(weakSet);