// ------------------Day 5--------------------
// Functions
// Tasks/Activities
// Activity 1: Function Declaration

// Task 1: Write a function that takes two numbers as arguments and returns their sum.

function sum(a , b) {
    return a + b;
}
const a = 45;
const b = 55;
console.log(sum(a, b));
// Task 2: Write a function that takes a string as an argument and returns the length of the string.

// function getStringLength(str) {
//     return str.length;
// }

// console.log(getStringLength("Hello, world!")); 13
// const getStringLength = function(str) {
//     return str.length;
// };

// console.log(getStringLength("Mansha Afroz"));

// Task 3: Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// let sum = [1,2,3,4];
// function sumOfArray(sum) {
//     for (let i = 1; i < sum.length; i++) {
//        return sum += sum[i];
//     }
//     return sum;
// }

// console.log(sumOfArray([1, 2, 3, 4, 5]));
// function sumOfArray(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0);
// }


// Task 4: write a function to calculate the square of a number and return the result.

const sqr = 5;
function squareOfNumber(sqr) {
    return sqr * sqr;
}
console.log(squareOfNumber(sqr));



// Task 5: Write a function to check if a number is even or odd and log the result to the console.


const nu = 5;
function evenOrOdd(nu) {
    if (nu % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
evenOrOdd(nu);


// Task 6: Write a function to calculate the area of a rectangle and return the result.

const l = 10;
const bd = 8;
function areaOfRectangle(l, bd)  {
    return (l / bd);
}

console.log(areaOfRectangle(l, bd));



// Task 7: Write a function to check if a number is prime or not and return the result.

const p = 16;
function isPrime(p) {
    if (p <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(p); i++) {
        if (p % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(p));


// Task 8: Write a function to calculate the factorial of a number and return the result.
function factorial(numb) {
    // Handle invalid inputs
    if (numb < 0) {
      return "Factorial is not defined for negative numbers";
    }
  
    // Base cases
    if (numb === 0 || numb === 1) {
      return 1;
    }
  
    // Iterative approach
    let result = 1;
    for (let i = 2; i <= numb; i++) {
      result *= i;
    }
    return result;
  }

  console.log(factorial(5)); // Output: 120
  console.log(factorial(-3)); // Output: "Factorial is not defined for negative numbers"
  console.log(factorial(0));  // Output: 1
  
// const f = 88;
// function factorial(f) {
//     let result = 1;
//     for (let i = 1; i <= f; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(f));


// Task 9: Write a function to check if a string is a palindrome or not and return the result.


// Task 10: Write a function to calculate the sum of all the numbers in an array and return the result.


//Activity 2: Function Expressions


// Task 1: Write a function expression that takes two numbers as arguments and returns their sum.


// Task 2: Write a function expression that takes a string as an argument and returns the length of the string.


// Task 3: Write a function expression that takes an array of numbers as an argument and returns the sum of all the numbers in the array.


// Task 4: write a funciton to find the max of 2 numbers and log the result to the console.


// Task 5: Write a function expression to concatenate two strings and return the result.


// Activity 3: Arrow Functions


// Task 1: Write an arrow function that takes two numbers as arguments and returns their sum.


// Task 2: Write an arrow function that takes a string as an argument and returns the length of the string.


// Task 3: Write an arrow function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.


// Task 4: Write an arrow function to calculate the square of a number and return the result.


// Task 5: Write an arrow fucntion to check if a string contains a specific character and return a boolean value.



// Activity 4: Function Parameters and Arguments(Default values):


// Task 1: Write a function that takes two numbers as arguments and returns their sum. Provide a default value for the second parameter.


// Task 1.1: Write a function that takes a persons name and age and returns a greeting message. Provide a default value for the age.


// Task 2: Write a function that takes a string as an argument and returns the length of the string.


// Task 3: Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.


// Task 4: Write a function to calculate the square of a number and return the result.


// Task 5: Write a function to check if a number is even or odd and log the result to the console.


// Task 6: Write a function to calculate the area of a rectangle and return the result.


// Task 7: Write a function to check if a number is prime or not and return the result.


// Task 8: Write a function to calculate the factorial of a number and return the result.


// Task 9: Write a function to check if a string is a palindrome or not and return the result.


// Task 10: Write a function to calculate the sum of all the numbers in an array and return the result.

// Activity 5: Higher order functions 


// Task 1: Write a higher order function that takes a function and a number, and calls the function that many times.


// Task 2: Write a higher order function that takes an array of numbers and a function, and returns a new array with the results of calling the function on each element of the original array.


// Task 3: Write a higher order function that takes two funcions and a value, applies the first function to the value, and then applies the second function to the result.


// Feature Request:


// 1. Even or Odd Function Script: Write a Script that includes a function to check if a number is even or Odd and logs the result


// 2. Grade Calculator Script: Write a script that includes a function to calculate the grade of a student based on their score and logs the result



// 3. Temperature Converter Script: Write a script that includes a function to convert temperature from Celsius to Fahrenheit and vice versa and logs the result



// 4. String Manipulation Script: Write a script that includes a function to manipulate a string and logs the result


// 5. Array Manipulation Script: Write a script that includes a function to manipulate an array and logs the result


// 6. Date and Time Manipulation Script: Write a script that includes a function to manipulate date and time and logs the result


// 7. File Manipulation Script: Write a script that includes a function to manipulate files and logs the result


// 8. Network Request Script: Write a script that includes a function to make a network request and logs the result


// 9. Image Manipulation Script: Write a script that includes a function to manipulate images and logs the result


// 10. Data Validation Script: Write a script that includes a function to validate data and logs the result


// 11.Higher order script: Write a higher order function to apply a given function multiple times.


// Achievement
// 1. Understands and define functions using function declaration, expressions, and arrow functions.
// 2. Understands and define functions with parameters and arguments.
// 3. Understands and define functions with default values.
// 4. Create and utilize higher order functions.
// 5. Enhance code reusability and organization functions.

// ---------------------------------------------------
