// Write a function that accepts an interger N and returns a NxN matrix.
// [[1,2]
//  [3,4]]
function matrixA(n) {
    const result = [];
    let counter = 1;
    for (let i = 0; i < n; i++) {
        result[i] = [];
        for (let j = 0; j < n; j++) {
            result[i][j] = counter++;
        }
    }
    return result;
}

console.log(matrixA(2));
console.log(matrixA(3));
console.log(matrixA(4));



// Solution
// function matrix(n) {
//     let matrix = [];
//     for (let i = 0; i < n; i++) {
//         matrix[i] = [];
//         for (let j = 0; j < n; j++) {
//             matrix[i][j] = 1;
//         }
//     }
//     return matrix;
// }
// // Test the function
// console.log(matrix(4))