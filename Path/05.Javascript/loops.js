//loops

// Loops in JavaScript are used to repeatedly execute a block of code until a certain condition is met.
// There are several types of loops in JavaScript:

// 1. for loop
// The most common type of loop, used when you know how many times you want to execute the code.
for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i)
}

// 2. while loop
// Executes a block of code as long as a specified condition is true.
let count = 0
while (count < 5) {
    console.log("Count: " + count)
    count++
}

// 3. do...while loop
// Similar to while loop, but always executes the code block at least once before checking the condition.
let num = 0
do {
    console.log("Number: " + num)
    num++
} while (num < 5)

// 4. for...in loop
// Used to iterate over the properties of an object.
const person = {name: "John", age: 30, city: "New York"}
for (let prop in person) {
    console.log(prop + ": " + person[prop])
}

// 5. for...of loop
// Used to iterate over iterable objects like arrays, strings, etc.
const fruits = ["apple", "banana", "orange"]
for (let fruit of fruits) {
    console.log(fruit)
}

// 6. Array methods that act as loops
// forEach, map, filter, reduce, etc.
fruits.forEach(function(fruit) {
    console.log("I like " + fruit)
})

// Loop control statements:
// - break: exits the loop immediately
// - continue: skips the rest of the current iteration and continues with the next one

for (let i = 0; i < 10; i++) {
    if (i === 5) break
    if (i % 2 === 0) continue
    console.log(i)
}

let sum = 0;
let i = 1;
while (i <=5) {
    // sum = sum + i;
    sum += i;
    i++;
    
    if (sum === 5) {
        break
    }
    
    console.log(sum)
}
console.log(sum)
// 7. Switch statement
// Used to perform different actions based on different conditions.
let day = "Monday"
switch (day) {
    case "Monday":
        console.log("Today is Monday")
        break
    case "Tuesday":
        console.log("Today is Tuesday")
        break
    case "Wednesday":
        console.log("Today is Wednesday")
        break
    default:
        console.log("Invalid day")
        break;
}
// for (let i = 0; i <= 5; i++) {
//     sum += i
// }
// console.log(sum)
let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];

// This code defines an array of city objects, each with a name and population.
// The for...of loop iterates over each city in the array.
// For each city, it checks if the population is greater than 20 million (20e6).
// If true, it logs the city name and population to the console.
// This effectively filters and displays only the megacities with over 20 million inhabitants.

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}
