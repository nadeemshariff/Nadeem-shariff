
// Big O Notation Examples

// O(1) - Constant Time
function constantTime(arr) {
    return arr[0]; // Always returns the first element, regardless of array size
}

// O(n) - Linear Time
function linearTime(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); // Prints each element once
    }
}

// O(n^2) - Quadratic Time
function quadraticTime(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]); // Nested loops, comparing each element with every other element
        }
    }
}

// O(log n) - Logarithmic Time
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1; // Target not found
}

// O(n log n) - Linearithmic Time
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Explanation:
// 1. O(1) - Constant time: The operation takes the same amount of time regardless of input size.
// 2. O(n) - Linear time: The time increases linearly with the input size.
// 3. O(n^2) - Quadratic time: The time increases quadratically with the input size.
// 4. O(log n) - Logarithmic time: The time increases logarithmically with the input size (e.g., binary search).
// 5. O(n log n) - Linearithmic time: Common in efficient sorting algorithms like mergeSort.

// These examples demonstrate different time complexities in Big O notation,
// helping to analyze and compare algorithm efficiency as input size grows.

// Big O Notation Rule Book:
// 1. Worst Case: Always consider the worst-case scenario.
// 2. Remove Constants: Drop constants in the final notation (e.g., O(2n) becomes O(n)).
// 3. Different Terms for Inputs: Use different variables for different inputs.
// 4. Drop Non-Dominant Terms: Keep only the highest order term (e.g., O(n + n^2) becomes O(n^2)).

// O(n) - Linear Time Example: Finding Nemo

// Example usage:
// Create an array with various fish names, including 'nemo'
const nemoArray = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// Call the findNemo function with the nemoArray

// This function searches for 'nemo' in an array
function findNemo(array) {
    // Iterate through each element of the array using a for...of loop
    for (const fish of array) {
        // Check if the current element is 'nemo'
        if (fish === 'nemo') {
            // If 'nemo' is found, log a message and exit the function
            console.log('Found NEMO!');
            return;
        }
    }
    // If the loop completes without finding 'nemo', log a message
    console.log('Nemo not found');
}
findNemo(nemoArray);

// O(1) - Constant Time Example: Accessing an Array Element

function getFirstElement(arr) {
    return arr[0];
}

const numbers = [1, 2, 3, 4, 5];
console.log(getFirstElement(numbers)); // Output: 1

// Explanation: This function has O(1) time complexity because it always takes
// the same amount of time to access the first element, regardless of the array size.

// O(n^2) - Quadratic Time Example: Bubble Sort

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(unsortedArray)); // Output: [11, 12, 22, 25, 34, 64, 90]

// Explanation: Bubble sort has O(n^2) time complexity because it uses nested loops,
// comparing and swapping adjacent elements. As the input size grows, the number of
// comparisons grows quadratically.

// O(log n) - Logarithmic Time Example: Binary Search

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1; // Target not found
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 7)); // Output: 3
console.log(binarySearch(sortedArray, 14)); // Output: -1

// Explanation: Binary search has O(log n) time complexity because it repeatedly
// divides the search interval in half. This logarithmic growth makes it very
// efficient for large sorted datasets.

// O(n log n) - Linearithmic Time Example: Merge Sort

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray2 = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(unsortedArray2)); // Output: [3, 9, 10, 27, 38, 43, 82]

// Explanation: Merge sort has O(n log n) time complexity. It divides the array
// into halves (log n) and then merges them back together (n). This combination
// results in a linearithmic time complexity, which is more efficient than
// quadratic algorithms for large datasets.
