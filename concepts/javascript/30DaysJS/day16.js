// Day 16: Recursion
// Tasks/Activities

// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(numb) {
    // Handle invalid inputs
    if (numb < 0)
        return "Factorial is not defined for negative numbers";
        // Base cases
        if (numb === 0 || numb === 1)
            return 1;
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

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n) {
    // Base cases
    if (n <= 1) {
        return n;
    }
    // Recursive approach
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(
    fibonacci(5)
); // Output: 5
console.log(
    fibonacci(10)
); // Output: 55

// Task 3: Write a recursive function to calculate the nth Catalan number. Log the result for a few test cases.

function catalan(n) {
    // Base cases
    if (n <= 1) {
        return 1;
    }
    // Recursive approach
    return catalan(n - 1) * (2 * n - 1) / (n + 1);
}
console.log(
    catalan(5)
); // Output: 42
console.log(
    catalan(10)
);


// Activity 2: Recursion with Arrays



// Solution:
function sumOfAllArray(arr) {
    // Base case: if the array has only one element, return that element
    if (arr.length === 1) {
        return arr[0];
    }
    // Recursive case: if the array has more than one element, recursively call `sumOfAllArray` on the remaining elements and add the current element to the sum
    return arr[0] + sumOfAllArray(arr.slice(1));
}

console.log(sumOfAllArray([1])); // Output: 1
console.log(sumOfAllArray([1, 2])); // Output: 3
console.log(sumOfAllArray([1, 2, 3])); // Output: 6
console.log(sumOfAllArray([1, 2, 3, 4])); // Output: 10

function sumOfArray(){
    let sum = [1,2,3,4];
    function sumOfArray(sum) {
        for (let i = 1; i < sum.length; i++) {
           return sum += sum[i];
        }
        return sum;
    }
    sumOfAllArray();
    console.log(sumOfArray([1, 2, 3, 4, 5]));
    // function sumOfArray(arr) {
    //     return arr.reduce((acc, curr) => acc + curr, 0);
    // }
}



// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
// Activity 5: Tree Traversal (Optional)

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
// Feature Request

// Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
// Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.
// String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.
// Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.
// Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).
// Achievement

// By the end of these activities, students will:

// Understand and implement basic recursion.
// Apply recursion to solve problems with arrays and strings.
// Use recursion for searching and counting elements in arrays.
// Perform tree traversal and calculate tree depth using recursion (optional).