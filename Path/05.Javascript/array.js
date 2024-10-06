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