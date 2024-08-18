//Arrays

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array);

//Indices
console.log(array[0]);

console.log(array.length);

console.log(array[array.length - 1]);

console.log(array[10]); 

console.log(array[-1]);

//Modifying

let arr = ['cheese', '2%Milk'];

arr[0] = 'bread';
arr[1] = '1%Butter';
arr[2] = '3%Yoghurt';   

console.log(arr);

//Methods

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr1.push(11);
// console.log(arr1);

// arr1.unshift(0);
// console.log(arr1);

// arr1.pop();
// console.log(arr1);

// arr1.shift();
// console.log(arr1);

// arr1.splice(1, 2);
// console.log(arr1);

// arr1.reverse();
// console.log(arr1);
arr1.sort();

console.log(arr1);