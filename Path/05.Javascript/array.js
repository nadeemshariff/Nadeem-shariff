let x;

// Array Literal
const numbers = [1,2,3,5,6];

const mixed = [12, "Hello", true, null];


//Array Constructor
const arr = new Array(1,2,3,4,5);
console.log(arr);

//Accessing with specific item

x = numbers[0];

//Accessing with index
x = numbers[3];

x = `My favorite arr is ${arr[2]}`

arr[2] = 'pear'

//Changing the array
numbers[2] = 'apple';
console.log(numbers);
//Array length
x = numbers.length;

//Looping
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
//Looping with for of
for(let i of numbers){
    console.log(i);
}

//Looping with for in
for(let i in numbers){
    console.log(i);
}

//Array Methods
let s;

const arr2 = [34,52,6,874,31,89];

// arr.push(100);

// arr.pop();

// arr.shift();

// arr.unshift(10);

// arr.splice(1,2,100,200,300);

// arr.reverse();

// s = arr.includes(200);

// s = arr.indexOf(200);

// s = arr.lastIndexOf(200);

// s = arr.join('-');

// s = arr.join('');

// s = arr.toString();

// s = arr.join('');

// x = arr.slice(1, 4);

s = arr2.splice(1, 4)
console.log(s);




arr.sort();
arr.sort((a,b) => a-b);

console.log(arr);


// push(): Adds one or more elements to the end of an array
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// pop(): Removes the last element from an array
let colors = ['red', 'green', 'blue'];
let lastColor = colors.pop();
console.log(lastColor); // Output: 'blue'
console.log(colors); // Output: ['red', 'green']

// shift(): Removes the first element from an array
let days = ['Monday', 'Tuesday', 'Wednesday'];
let firstDay = days.shift();
console.log(firstDay); // Output: 'Monday'
console.log(days); // Output: ['Tuesday', 'Wednesday']

// unshift(): Adds one or more elements to the beginning of an array
let numbers1 = [2, 3, 4];
numbers1.unshift(1);
console.log(numbers1); // Output: [1, 2, 3, 4]

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // Output: ['Jan', 'Feb', 'March', 'April', 'June']

// reverse(): Reverses the order of the elements in an array
let letters = ['a', 'b', 'c'];
letters.reverse();
console.log(letters); // Output: ['c', 'b', 'a']

// includes(): Determines whether an array includes a certain value
let pets = ['cat', 'dog', 'bird'];
console.log(pets.includes('dog')); // Output: true

// indexOf(): Returns the first index at which a given element can be found in the array
let fruits2 = ['apple', 'banana', 'orange', 'banana'];
console.log(fruits2.indexOf('banana')); // Output: 1

// lastIndexOf(): Returns the last index at which a given element can be found in the array
console.log(fruits2.lastIndexOf('banana')); // Output: 3

// join(): Joins all elements of an array into a string
let elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // Output: "Fire,Air,Water"
console.log(elements.join('-')); // Output: "Fire-Air-Water"

// toString(): Returns a string representing the array and its elements
let array = [1, 2, 'a', '1a'];
console.log(array.toString()); // Output: "1,2,a,1a"

// slice(): Returns a shallow copy of a portion of an array
let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // Output: ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // Output: ["camel", "duck"]

// sort(): Sorts the elements of an array in place and returns the sorted array
let numbers2 = [4, 2, 5, 1, 3];
numbers2.sort((a, b) => a - b);
console.log(numbers2); // Output: [1, 2, 3, 4, 5]

// forEach(): Executes a provided function once for each array element
let fruits3 = ['apple', 'banana', 'cherry'];
fruits3.forEach(function(item, index) {
    console.log(index, item);
});
// Output:
// 0 "apple"
// 1 "banana"
// 2 "cherry"

// map(): Creates a new array with the results of calling a provided function on every element in the array
let numbers3 = [1, 4, 9];
let roots = numbers3.map(Math.sqrt);
console.log(roots); // Output: [1, 2, 3]

// filter(): Creates a new array with all elements that pass the test implemented by the provided function
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result = words.filter(word => word.length > 6);
console.log(result); // Output: ["exuberant", "destruction", "present"]

let a = [1,2,3,4,5];
let b = a.filter((item) => item > 2 );
console.log(b);

// reduce(): Executes a reducer function on each element of the array, resulting in a single output value
let numbers4 = [1, 2, 3, 4 ];
let sum = numbers4.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 10

// some(): Tests whether at least one element in the array passes the test implemented by the provided function
let numbers5 = [1, 2, 3, 4, 5];
let evenExists = numbers5.some(num => num % 2 === 0);
console.log(evenExists); // Output: true

// every(): Tests whether all elements in the array pass the test implemented by the provided function
let numbers6 = [1, 30, 39, 29, 10, 13];
let allUnder40 = numbers6.every(num => num < 40);
console.log(allUnder40); // Output: true

// find(): Returns the value of the first element in the array that satisfies the provided testing function
let numb = [5, 12, 8, 130, 44]
let found = numb.find(element => element > 10)
console.log(found); // Output: 12

let num = [23, 8, 15, 42, 37, 61, 9, 54, 76, 30]
let foundNum = num.find(element => element > 10)
console.log(foundNum); // Output: 42

// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function
let n = [5, 12, 8, 130, 44]
let foundIndex = n.findIndex(element => element > 10)
console.log(foundIndex); // Output: 1