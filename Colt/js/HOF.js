// HOF

// ┌─────────────────────────────────────────────────────────┐
// │                  Higher-Order Function                  │
// │                                                         │
// │  ┌─────────────┐      ┌─────────────┐    ┌───────────┐  │
// │  │   Input:    │      │  Process:   │    │  Output:  │  │
// │  │ - Function  │ ──▶ │ Manipulate  │ ─▶ │ - Value   │  │
// │  │ - Array     │      │ or Apply    │    │ - Array   │  │
// │  └─────────────┘      └─────────────┘    │ - Function│  │
// │                                          └───────────┘  │
// └─────────────────────────────────────────────────────────┘
// Higher-Order Functions are functions that can:
// Accept other functions as arguments
// 2. Return a function as their result
// Or both
// Common examples include: map(), filter(), reduce(), forEach(), etc.

// ["","",""]
//[{},{},{}]

// Task Manager using Higher-Order Functions

// Task object structure
const createTask = (id, title, completed = false) => ({ id, title, completed });

// Task list
let tasks = [
  createTask(1, "Learn JavaScript"),
  createTask(2, "Master Higher-Order Functions"),
  createTask(3, "Build a project"),
];

// Higher-Order Functions

// 1. Add a new task
const addTask = (taskList) => (title) => {
  const newId = taskList.length + 1;
  const newTask = createTask(newId, title);
  return [...taskList, newTask];
};

// 2. Mark a task as completed
const completeTask = (taskList) => (id) => {
  return taskList.map(task => 
    task.id === id ? { ...task, completed: true } : task
  );
};

// 3. Filter tasks
const filterTasks = (taskList) => (filterFn) => {
  return taskList.filter(filterFn);
};

// 4. Map over tasks
const mapTasks = (taskList) => (mapFn) => {
  return taskList.map(mapFn);
};

// Usage examples
console.log("Initial tasks:", tasks);

// Add a new task
tasks = addTask(tasks)("Review code");
console.log("After adding a task:", tasks);

// Mark task as completed
tasks = completeTask(tasks)(2);
console.log("After completing a task:", tasks);

// Filter completed tasks
const completedTasks = filterTasks(tasks)(task => task.completed);
console.log("Completed tasks:", completedTasks);

// Map tasks to titles
const taskTitles = mapTasks(tasks)(task => task.title);
console.log("Task titles:", taskTitles);

// Chaining HOFs: Get titles of incomplete tasks
const incompleteTaskTitles = mapTasks(filterTasks(tasks)(task => !task.completed))(task => task.title);
console.log("Incomplete task titles:", incompleteTaskTitles);

// This project demonstrates several key concepts of Higher-Order Functions:

// addTask: Returns a function that adds a new task to the list.

// completeTask: Returns a function that marks a task as completed.

// filterTasks: A HOF that takes a filter function and returns filtered tasks.

// mapTasks: A HOF that takes a map function and transforms the tasks.

// The example usage shows how these HOFs can be used individually and chained together for more complex operations. This approach makes the code more modular, reusable, and easier to maintain.




// -------------------------------------------------------------------------------------------
const arr = [1,2,3,4,5]

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


for (const num in arr) {
    if (Object.prototype.hasOwnProperty.call(arr, num)) {
        const element = arr[num];
        console.log(num);
    }
}

// Maps
// const map = new Map();

// map.set("name", "Rohini");
// map.set("name", "Mansha");
// map.set("name", "Anusha");

// for (const [key, value] of map) {
//     console.log(key, ':-', value)
// }

// const myObj = {
//     'game1': 'NFS',
//     'game2': 'GTA'
// }
// for (const [key,value] of myObj) {
//     console.log(key, "-", value);
// }

// console.log(map.get("name"));

// console.log(map.size);

// map.delete("name");

// console.log(map.has("name"));

// map.clear();

// console.log(map.size);

// map.set("name", "Rohini");

// console.log(map);

const obj = {
    name: "Rohini",
    age: 22,
    category: "ebony",

    // display: function() {
    //     console.log(`Name: ${this.name}`);
    //     console.log(`Age: ${this.age}`);
    //     console.log(`Category: ${this.category}`);
    // }
}

// obj.display();
for (const key in obj) {
    console.log(`${key} shortcut is for ${obj[key]}`);
}

const map = new Map();
map.set("name", "Rohini");
map.set("age", 25);
map.set("category", "ebony");
map.set("figure", "petite");

// for (const key in map){
//     console.log(key);
// }

const coding = ["A", "B","C"];

coding.forEach((value, index) => {
    console.log(value, index);
});

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, array) => {
    console.log(item, index, array);
})

const newCoding = [
    {
        langName: "javasript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    },
    {
        langName: "c##",
        langFileName: "c++"
    }
]

newCoding.forEach((item) => {
    console.log(item.langName);
    console.log(item.langName, item.langFileName);
});

// for of
for (const element of object) {
    console.log(element);

    
}


// for in

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
         
    }
}

// ------------------------------------------------------------------------------------------------------
// Higher-Order Functions (HOF) - Interview Questions and Challenges

// 1. What is a Higher-Order Function?
// A: A higher-order function is a function that takes one or more functions as arguments
// or returns a function as its result.

// Example 1: Function as an argument
function applyOperation(x, y, operation) {
    return operation(x, y);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(applyOperation(5, 3, add));      // Output: 8
console.log(applyOperation(5, 3, multiply)); // Output: 15

// Example 2: Returning a function
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15

// 2. Implement a function that takes an array and a callback, and returns a new array
// with the callback applied to each element.

function mapArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const squared = mapArray(numbers, (num) => num * num);
console.log(squared);  // Output: [1, 4, 9, 16, 25]

// 3. Implement a function that filters an array based on a given condition.

function filterArray(arr, predicate) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4]

// 4. Implement a reduce function

function reduceArray(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

const sum = reduceArray(numbers, (acc, curr) => acc + curr, 0);
console.log(sum);  // Output: 15

// 5. Create a function that composes multiple functions

function compose(...functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
}

const addOne = (x) => x + 1;
const double2 = (x) => x * 2;
const square = (x) => x * x;

const composedFunction = compose(square, double2, addOne);
console.log(composedFunction(3));  // Output: 64 ((3 + 1) * 2)^2

// 6. Implement a debounce function

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const debouncedLog = debounce((message) => console.log(message), 1000);
debouncedLog("Hello");
debouncedLog("World");
// After 1 second, it will log: "World"

// These examples cover various aspects of Higher-Order Functions and
// common interview questions/challenges related to them.
// --------------------------------------------------------------------------------

// 1. Basic HOF: Function that takes a function as an argument
const applyOperation1 = (x, y, operation) => {
    return operation(x, y);
  };
  
  const add2 = (a, b) => a + b;
  const multiply2 = (a, b) => a * b;
  
  console.log(applyOperation1(5, 3, add2)); // Output: 8
  console.log(applyOperation1(5, 3, multiply2)); // Output: 15
  
  // 2. HOF that returns a function (Closure)
  const multiplier = (factor) => {
    return (number) => number * factor;
  };
  
  const doubleNum = multiplier(2);
  const triple2 = multiplier(3);
  
  console.log(doubleNum(5)); // Output: 10
  console.log(triple2(5)); // Output: 15
  
  // 3. Implementing map() function
  const customMap = (array, callback) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  };
  
  const numbers2 = [1, 2, 3, 4, 5];
  const squared2 = customMap(numbers2, (num) => num * num);
  console.log(squared2); // Output: [1, 4, 9, 16, 25]
  
  // 4. Implementing filter() function
  const customFilter = (array, predicate) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  };
  
  const evenNumbers2 = customFilter(numbers2, (num) => num % 2 === 0);
  console.log(evenNumbers2); // Output: [2, 4]
  
  // 5. Implementing reduce() function
  const customReduce = (array, callback, initialValue) => {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  };
  
  const sum2 = customReduce(numbers2, (acc, num) => acc + num, 0);
  console.log(sum2); // Output: 15
  
  // 6. Function composition
  const compose1 = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);
  
  const addOne2 = (x) => x + 1;
  const double3 = (x) => x * 2;
  const square2 = (x) => x * x;
  
  const composedFunction2 = compose1(square2, double3, addOne2);
  console.log(composedFunction2(3)); // Output: 64 ((3 + 1) * 2)^2
  
  // 7. Currying
  const curry = (fn) => {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function(...moreArgs) {
          return curried.apply(this, args.concat(moreArgs));
        }
      }
    };
  };
  
const add3 = (a, b, c) => a + b + c;
const curriedAdd3= curry(add3);
  
console.log(curriedAdd3(1)(2)(3)); // Output: 6
  console.log(curriedAdd3(1, 2)(3)); // Output: 6
  console.log(curriedAdd3(1, 2, 3)); // Output: 6
  
  // 8. Memoization
  const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn.apply(this, args);
      cache.set(key, result);
      return result;
    };
  };
  
  const expensiveOperation = (n) => {
    console.log(`Calculating for ${n}...`);
    return n * 2;
  };
  
  const memoizedOperation = memoize(expensiveOperation);
  
  console.log(memoizedOperation(5)); // Output: Calculating for 5... 10
  console.log(memoizedOperation(5)); // Output: 10 (cached)
  
  // 9. Partial application
  const partial = (fn, ...args) => {
    return (...moreArgs) => {
      return fn(...args, ...moreArgs);
    };
  };
  
  const greet = (greeting, name) => `${greeting}, ${name}!`;
  const sayHello = partial(greet, "Hello");
  
  console.log(sayHello("John")); // Output: Hello, John!
  
  // 10. Debounce function
  const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  };
  
  const debouncedLog2 = debounce((message) => console.log(message), 1000);
  
  debouncedLog("Hello"); // Will not log immediately
  debouncedLog("World"); // Will log "World" after 1 second