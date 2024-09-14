// 1. Function Scope:
// Function scope refers to variables that are accessible within a function.
// Example:
function exampleFunction() {
    let localVar = "I'm local to exampleFunction";
    console.log(localVar); // This will work

    if (true) {
        let blockVar = "I'm block-scoped";
        console.log(blockVar); // This will work
    }

    // console.log(blockVar); // This would cause an error

    return function innerFunction() {
        console.log(localVar); // This will work due to closure
    };
}

// console.log(localVar); // This would cause an error

let returnedFunction = exampleFunction();
returnedFunction(); // This will log "I'm local to exampleFunction";

function exampleFunction1() {
    var functionScopedVar = "I'm function scoped";
    console.log(functionScopedVar); // Accessible
  }
//   console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined

//   Block Scope:
// Block scope refers to variables that are accessible only within a block (denoted by curly braces).
// Example:
if (true) {
    let blockScopedVar = "I'm block scoped";
    console.log(blockScopedVar); // Accessible
}
// console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined


function doubleArr(arr){
    return arr.map(num => num * 2);
}
console.log(doubleArr([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
// Function to square each number in an array
function squareArr(arr) {
    return arr.map(num => num * num);
}

console.log(squareArr([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

// Function to filter out odd numbers from an array
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// Function to find the sum of all numbers in an array
const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Higher-order function that applies a given function to each element of an array
function applyToEach(arr, func) {
    return arr.map(func);
}

// Example usage of applyToEach
const numbers = [1, 2, 3, 4, 5];
const doubled = applyToEach(numbers, num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const squared = applyToEach(numbers, num => num ** 2);
console.log(squared); // [1, 4, 9, 16, 25]




// Lexical Scope:

// Global Scope
// +-----------------------+
// |                       |
// |  let x = 10;          |
// |                       |
// |  function outer() {   |
// |    let y = 20;        |
// |    +---------------+  |
// |    |               |  |
// |    | function      |  |
// |    | inner() {     |  |
// |    |   let z = 30; |  |
// |    |   // Can      |  |
// |    |   // access   |  |
// |    |   // x, y, z  |  |
// |    | }             |  |
// |    |               |  |
// |    +---------------+  |
// |    // Can access x, y |
// |  }                    |
// |                       |
// +-----------------------+
// // Can access only x

// Lexical scope means that inner functions have access to variables in their outer scope.
// Example:
function outer() {
    let outerVar = "I'm from outer";
    function inner() {
      console.log(outerVar); // Accessible due to lexical scope
    }
    inner();
  }
  outer();

//   . Function Expression:
// A function expression is when a function is assigned to a variable.
// Example:
const greet = function(name) {
    return `Hello, ${name}!`;
  };
  console.log(greet("Alice")); // Output: Hello, Alice!
//   ----------------------------------------------------------------------------------------------------

  // TODO Project demonstrating lexical scope

// TodoList factory function
function createTodoList(name) {
    // Private variables in outer scope
    let tasks = [];
    let id = 0;

    // Return an object with methods
    return {
        getName: () => name,
        addTask: (description) => {
            id++;
            tasks.push({ id, description, completed: false });
            console.log(`Task added to ${name}: ${description}`);
        },
        completeTask: (taskId) => {
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                task.completed = true;
                console.log(`Task completed in ${name}: ${task.description}`);
            } else {
                console.log(`Task with id ${taskId} not found in ${name}`);
            }
        },
        listTasks: () => {
            console.log(`Tasks in ${name}:`);
            tasks.forEach(task => {
                console.log(`- [${task.completed ? 'X' : ' '}] ${task.id}: ${task.description}`);
            });
        }
    };
}

// Usage
const workTodos = createTodoList("Work");
const personalTodos = createTodoList("Personal");

// Add tasks
workTodos.addTask("Finish project proposal");
workTodos.addTask("Schedule team meeting");
personalTodos.addTask("Buy groceries");
personalTodos.addTask("Go to the gym");

// List tasks
workTodos.listTasks();
personalTodos.listTasks();

// Complete a task
workTodos.completeTask(1);

// List tasks again to see the change
workTodos.listTasks();

// Try to access private variables (this will not work)
console.log(workTodos.tasks); // undefined
console.log(workTodos.id);    // undefined

// Each todo list has its own scope
console.log(workTodos.getName());    // "Work"
console.log(personalTodos.getName()); // "Personal"


// ---------------------------------------------------------------------------------------------------------------------------



//   . Arrow Function:
// Arrow functions provide a concise syntax for writing functions.
// Example:
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

//   . Higher-Order Function:
// A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.
// Example:
const multiplyByTwo = (num) => num * 2;
const applyFunction = (func, value) => func(value);
console.log(applyFunction(multiplyByTwo, 5)); // Output: 10
// --------------
function multiplyBy(factor) {
    return function(number) {
      return number * factor;
    };
  }
  const double = multiplyBy(2);
  console.log(double(5)); // Output: 10
//   ------------------------

// Callbacks
// Callbacks are functions passed as arguments to other functions, allowing for asynchronous or event-driven programming. They're commonly used in JavaScript for handling asynchronous operations like API calls, file I/O, or user interactions.
// Example project: Simple Task Manager
// Task manager with callback functionality

function addTask(task, callback) {
    setTimeout(() => {
        console.log(`Added task: ${task}`);
        callback();
    }, 1000);
}

function notifyUser() {
    console.log("Task added successfully!");
}

// Using the callback
addTask("Learn callbacks", notifyUser);
console.log("Waiting for task to be added...");



// 1. Define a function that takes a callback as an argument.
function performTask(callback) {
    console.log("Starting the task...");
    callback();
    console.log("Task completed!");
}

// 2. Create a callback function.

function taskCallback() {
    console.log("Executing the task...");
}

// 3. Use the callback function
performTask(taskCallback);

// 4. Using an anonymous function as a callback
performTask(function() {
    console.log("Executing an anonymous task...");
});

// 5. Using an arrow function as a callback
performTask(() => {
    console.log("Executing a task with an arrow function...");
});

// Example with asynchronous operation
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(data);
    }, 2000);
}

fetchData((result) => {
    console.log("Data received:", result);
});

console.log("Waiting for data...");


// In this example, addTask simulates an asynchronous operation (like saving to a database) using setTimeout. The notifyUser function is passed as a callback, which is called after the task is "added".
// Hoisting
// Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution. This applies to variable and function declarations.
// Example project: Quiz Game
// Quiz game demonstrating hoisting

console.log(welcomeMessage); // Output: undefined
var welcomeMessage = "Welcome to the Quiz Game!";

playGame(); // This works due to function hoisting

function playGame() {
    let score = 0;
    
    // This works because askQuestion is hoisted within playGame
    askQuestion("What's the capital of France?", "Paris");
    askQuestion("What's 2 + 2?", "4");
    
    console.log(`Your final score: ${score}`);
    
    function askQuestion(question, correctAnswer) {
        let userAnswer = prompt(question);
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            console.log("Correct!");
            score++;
        } else {
            console.log("Incorrect!");
        }
    }
}

// This would cause an error because askQuestion is not in this scope
// askQuestion("Test", "Test");  

// Callback Game: Adventure Quest

console.log("Welcome to Adventure Quest!");

function startAdventure(playerName, choosePath) {
    console.log(`${playerName}, your adventure begins!`);
    choosePath(exploreForest, exploreCave);
}

function exploreForest(outcome) {
    console.log("You enter a dense forest...");
    setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
            outcome("You find a magical artifact!");
        } else {
            outcome("You encounter a fierce bear!");
        }
    }, 2000);
}

function exploreCave(outcome) {
    console.log("You enter a dark cave...");
    setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
            outcome("You discover hidden treasure!");
        } else {
            outcome("You wake up a sleeping dragon!");
        }
    }, 2000);
}

function handleOutcome(result) {
    console.log(result);
    console.log("Adventure complete!");
}

function choosePath(pathA, pathB) {
    const choice = Math.random() < 0.5 ? pathA : pathB;
    choice(handleOutcome);
}

startAdventure("Brave Adventurer", choosePath);

