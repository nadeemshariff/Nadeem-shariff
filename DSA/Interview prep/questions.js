
// 1. What are the possible ways to create objects in JavaScript?
// There are several ways to create objects in JavaScript:

// 1. Object literal notation
const obj1 = { key: 'value' };

// 2. Constructor function
function Person(name) {
  this.name = name; 
}
const person1 = new Person('John');

// 3. Object.create() method
const obj2 = Object.create(Object.prototype);

// 4. ES6 Class syntax
class Car {
  constructor(brand) {
    this.brand = brand;
  }
}
const car1 = new Car('Toyota');

// 5. Factory function
function createPerson(name) {
  return {
    name: name,
    greet: function() {
      console.log(`Hello, I'm ${this.name}`);
    }
  };
}
const person2 = createPerson('Alice');

// 2. What is a prototype chain?
// A prototype chain is the mechanism by which objects inherit properties and methods from other objects.
// Each object has an internal link to another object called its prototype.
// When a property is accessed on an object and it's not found, JavaScript looks up the prototype chain until it finds it or reaches null.

// 3. What is the difference between Call, Apply and Bind?
// Call, Apply, and Bind are methods used to set the 'this' value in function calls:

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const user = { name: 'John' };

// Call: Invokes the function immediately, passing 'this' and comma-separated arguments
greet.call(user, 'Hello');

// Apply: Invokes the function immediately, passing 'this' and arguments as an array
greet.apply(user, ['Hi']);

// Bind: Returns a new function with a bound 'this' value, doesn't invoke immediately
const boundGreet = greet.bind(user);
boundGreet('Hey');

// 4. What is JSON and its common operations?
// JSON (JavaScript Object Notation) is a lightweight data interchange format.
// Common operations:

// Parsing JSON string to JavaScript object
const jsonString = '{"name": "John", "age": 30}';
const obj = JSON.parse(jsonString);

// Converting JavaScript object to JSON string
const person = { name: 'Alice', age: 25 };
const jsonStr = JSON.stringify(person);

// 5. What is the purpose of the array slice method?
// The slice() method returns a shallow copy of a portion of an array without modifying the original array.

const fruits = ['apple', 'banana', 'orange', 'mango'];
const slicedFruits = fruits.slice(1, 3); // ['banana', 'orange']

// 6. What is the purpose of the array splice method?
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const vegetables = ['carrot', 'broccoli', 'cucumber', 'tomato'];
vegetables.splice(1, 2, 'lettuce', 'spinach');
// vegetables is now ['carrot', 'lettuce', 'spinach', 'tomato']

// 7. What is the difference between slice and splice?
// - slice() doesn't modify the original array, splice() does
// - slice() returns a new array, splice() returns the removed elements
// - slice() takes start and end indexes, splice() takes start index, delete count, and items to add

// 8. How do you compare Object and Map?
// Objects:
// - Keys are strings or symbols
// - No size property
// - Not iterable directly

// Map:
// - Keys can be any value
// - Has size property
// - Directly iterable

// 9. What is the difference between == and === operators?
// == performs type coercion before comparison
// === compares without type coercion (strict equality)

console.log(5 == '5');  // true
console.log(5 === '5'); // false

// 10. What are lambda expressions or arrow functions?
// Arrow functions are a concise way to write function expressions in ES6+

const add = (a, b) => a + b;

// This covers the first 10 questions. The remaining questions would follow a similar pattern of explanation and code examples.
