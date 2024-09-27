// Fibonacci series
/*
Fibonacci Sequence Diagram:

   n:     0   1   2   3   4   5   6   7   8   9  ...
   F(n):  0   1   1   2   3   5   8  13  21  34  ...
          |   |   |   |   |   |   |   |   |   |
          |   |   +---+   |   |   |   |   |   |
          |   |       |   |   |   |   |   |   |
          |   +-------+---+   |   |   |   |   |
          |           |       |   |   |   |   |
          |           +-------+---+   |   |   |
          |                   |       |   |   |
          |                   +-------+---+   |
          |                           |       |
          |                           +-------+
          |                                   |
          +-----------------------------------+

Each number is the sum of the two preceding ones.
F(n) = F(n-1) + F(n-2) for n > 1

Code example:
*/

function fibonacci2(n) {
    if (n <= 1) return n;
    
    let prev = 0;
    let current = 1;
    
    for (let i = 2; i <= n; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    
    return current;
}

// Example usage:
console.log(fibonacci2(7)); // Output: 13

// Print out the n-th entry in the fibonacci series
// example: [0,1,1,2,3,5,8,13,21,34] forms the first ten entries of the fibonacci series
// Eg: fib(4) === 3

// This function calculates the nth Fibonacci number
function fib(n) {
    // Base case: if n is less than 2, return n itself
    // This handles the first two numbers in the Fibonacci sequence (0 and 1)
    if (n < 2) {
        return n;
    }
    
    // Recursive case: calculate the nth Fibonacci n umber
    // It's the sum of the two preceding numbers in the sequence
    return fib(n - 1) + fib(n - 2);
}

// Call the fib function with argument 4 and log the result to the console
// This will output the 4th number in the Fibonacci sequence
console.log(fib(4))

// function fibonacci(n) {
//     const result = [0, 1];

//     for (let i = 0; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b); 
//     }
//     return result[n];
// }

// console.log(fibonacci(4));

// Using Recursion method

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)) 