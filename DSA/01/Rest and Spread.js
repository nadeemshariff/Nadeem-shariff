// Rest and Spread Operator

// Rest Operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5, 6, 7, 8, 9, 10]

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// Rest and Spread Operator
const arr4 = [...arr1, ...arr2, 7, 8, 9];
console.log(arr4); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Rest and Spread Operator
const arr5 = [...arr1, ...arr2, ...arr3];
console.log(arr5); // [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Max method in rest operator
let arr = [5,56,89,23,5,7,896];
console.log(Math.max(...arr));

// get the sum or arr using rest and Spread Operator
// The sum function uses the rest operator (...args) to accept any number of arguments
// and convert them into an array called 'args'.
// It then uses the reduce method to sum up all the elements in the array.
// The reduce method takes a callback function (a, b) => a + b, where 'a' is the accumulator
// and 'b' is the current element being processed.
// The second argument of reduce (0) is the initial value of the accumulator.

let sum = (...args) => args.reduce((a, b) => a + b, 0);

// This line calls the sum function with arguments 1, 2, 3, 4, and 5.
// The function will return their sum, which is 15.
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// You can also use this function with any number of arguments:
console.log(sum(10, 20, 30)); // Output: 60
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output: 55
