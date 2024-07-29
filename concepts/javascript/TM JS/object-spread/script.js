let x;

const todo = new Object();

todo.id = 1;
todo.title = "Learn JavaScript";
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      let: 42.943,
      lng: 87.9,
    },
    city: "Mumbai",
  },
  name: "Nadeem",
  age: 22,
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };

const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  { id: 1, name: "lorem" },
  { id: 2, name: "ipsum" },
  { id: 3, name: "dolor" },
];

x = todos[0].name;

x = { ...todos[0] };

x = Object.assign({}, todos[0]);

x = Object.assign({}, todos[0], todos[1], todos[2]);

x = Object.keys(todo).length;

console.log(x);

// Variable scopes- Block/Global/Functional

// Block Scope: Variables declared with let and const are block-scoped, meaning they exist only within the nearest set of curly braces {} (a block) surrounding their declaration.

if (true) {
  let x = 20;
  const y = 10;
  x = 30;
  console.log(x, y);
}

console.log(x, y); // Y is not defined.

// Global Scope: Variables declared with var are global-scoped.

var globalVar = "I'm global"; // Global variable using var

let blockGlobalVar = "I'm also global"; // Global variable using let

console.log(globalVar); // Accessible everywhere
console.log(blockGlobalVar); // Also accessible everywhere

// Functional Scope:Variables declared with var are function-scoped, meaning they exist within the entire function body in which they are declared. If declared outside any function, they become global variables.

function exampleFunction() {
  var z = 30; // Function-scoped variable
  console.log(z); // Accessible within the function
}

exampleFunction();
console.log(z); // ReferenceError: z is not defined


