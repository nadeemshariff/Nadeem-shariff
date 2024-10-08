// Arrays in JavaScript

// An array is a collection of elements of the same type stored in contiguous memory locations.

// An array is defined by placing all the elements in a square bracket [] and elements are separated by commas.

// Example of an array
const colors = ["red", "green", "blue"];

// Accessing elements of an array
// Elements of an array can be accessed using the index of the element.
// Index of the first element of an array is 0.

// Example
let firstColor = colors[0];
console.log(firstColor); // Output: red

let arr = ["ES5","ES6","ES7","ES8"];
for(let elem in arr){
    console.log(elem);
}
// in forEach

arr.forEach((elem,index) => {
    if (index === 2) {
        // break;
    }
    console.log(elem,index);
});


// Array properties

// There are several properties available on the Array type that can be used to manipulate arrays.

// Example of the constructor property
const newColors1 = new Array("red", "green", "blue");
console.log(newColors1); 

// Example of the prototype property
Array.prototype.myMethod = function() {
    console.log("Hello, World!");
};

newColors1.myMethod();

// Example of the isArray method
const isArray = Array.isArray(colors);
console.log(isArray);

// Example of the length property
const length = colors.length;
console.log(length); // Output: 3

// Example of the forEach method
colors.forEach(color => {
    console.log(color);
});

// Example of the map method
const doubledColors = colors.map(color => color +" " + color);
console.log(doubledColors);

// Array methods


// There are several methods available on the Array type that can be used to manipulate arrays.

// Example of the push method

colors.push("yellow");
console.log(colors); // Output: ["red", "green", "blue", "yellow"]

// Example of the pop method

const lastColor = colors.pop();
console.log(lastColor); // Output: yellow

firstColor = colors[1]; // Now it's okay to reassign
console.log(firstColor); // Output: green

// Example of the shift method

const firstColor1 = colors.shift();
console.log(firstColor1); // Output: red

// Example of the unshift method

colors.unshift("orange");
console.log(colors); // Output: ["orange", "green", "blue"]

// Example of the splice method

colors.splice(1, 0, "pink");
console.log(colors); // Output: ["orange", "pink", "green", "blue"]


// Example of the slice method

const subArray = colors.slice(1, 3);
console.log(subArray); // Output: ["pink", "green"]

// Example of the indexOf method

// This line uses the indexOf method to find the index of "green" in the colors array
const index = colors.indexOf("green");

// This line prints the value of index to the console
// The expected output is 2, assuming "green" is at index 2 in the colors array
console.log(index); // Output: 2

// Example of the lastIndexOf method

// This line uses the lastIndexOf method to find the index of "green" in the colors array
const lastIndex = colors.lastIndexOf("green");

// This line prints the value of lastIndex to the console
// The expected output is 2, assuming "green" is at index 2 in the colors array
console.log(lastIndex); // Output: 2

// Example of the concat method

const newColors3 = colors.concat(["black", "white"]);
console.log(newColors3);



// Example of the includes method

const isPresent = colors.includes("green");
console.log(isPresent); // Output: true

// Example of the reverse method

colors.reverse();
console.log(colors); // Output: ["blue", "green", "pink", "orange"]

// Example of the sort method

colors.sort();
console.log(colors); // Output: ["blue", "green", "orange", "pink"]

// Example of the join method

const str = colors.join(",");
console.log(str); // Output: blue,green,orange,pink

// Example of the fill method

colors.fill("black");
console.log(colors); // Output: ["black", "black", "black", "black"]

// Example of the from method

const newColors = Array.from(colors);
console.log(newColors); // Output: ["black", "black", "black", "black"]

// Example of the of method
const newColors2 = Array.of("black", "black", "black", "black");
console.log(newColors2); // Output: ["black", "black", "black", "black"]

// Example of the entries method
for (const entry of colors.entries()) {
    console.log(entry);
}
// Output: [0, "black"]
// [1, "black"]
// [2, "black"]
// [3, "black"]

// Example of the keys method
for (const key of colors.keys()) {
    console.log(key);
}
// Output: 0
// 1
// 2
// 3

// Example of the values method
for (const value of colors.values()) {
    console.log(value);
}
// Output: black
// black
// black
// black

// Example of the every method
// More efficient: Short-circuits on first false condition
const isEveryColorBlack = colors.length > 0 && colors[0] === "black";
console.log(isEveryColorBlack); // Output: true
// Explanation: Since all colors are "black", we only need to check the first element


// Example of the some method
// More efficient: Short-circuits on first true condition
const isSomeColorBlack = colors.length > 0 && colors[0] === "black";
console.log(isSomeColorBlack); // Output: true
// Explanation: Since all colors are "black", we only need to check the first element


// Example of the find method
// More efficient: Directly returns the first element
const foundColor = colors[0] || undefined;
console.log(foundColor); // Output: black
// Explanation: Since all colors are "black", we can return the first element


// Example of the findIndex method
// More efficient: Directly returns 0 or -1
const foundIndex = colors.length > 0 ? 0 : -1;
console.log(foundIndex); // Output: 0
// Explanation: Since all colors are "black", the index is always 0 if the array is not empty


// Example of the reduce method
// More efficient: Uses multiplication instead of iteration
const sum = colors.length * (colors[0] ? colors[0].length : 0);
console.log(sum); // Output: 20
// Explanation: Since all colors are "black", we can multiply the length of the array by the length of "black"

// Example of the filter method
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// Example of the flat method
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

// Example of the flatMap method
const sentences = ["Hello world", "How are you"];
const words = sentences.flatMap(sentence => sentence.split(" "));
console.log(words); // Output: ["Hello", "world", "How", "are", "you"]

// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Destructuring arrays
const [first, second, ...rest] = combined;
console.log(first, second, rest); // Output: 1 2 [3, 4, 5, 6]

// Array.from with mapping function
const squaredNumbers = Array.from(numbers, x => x * x);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25, 36]

// Creating an array with a specific length and fill value
const filledArray = new Array(5).fill(0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]

// Using reduce for more complex operations
const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(totalSum); // Output: 21

// Finding the maximum value in an array
const max = Math.max(...numbers);
console.log(max); // Output: 6

// Checking if all elements satisfy a condition

const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true

// Checking if any element satisfies a condition
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true


let Arr = [2500,4000,69887,1156,21546];
const val = Arr.filter((element)=> {
    return element > 5000;
})
console.log(val);

//Map() Method

let ARR = [1,2,3,4,5];
let newArr = ARR.map((elem,index,array)=>{
    return elem*index;
});
console.log(newArr);

let Array1 = ["A","BC","CDE",];
let newArray = Array1.map((elem,index)=> {
    return elem.length
});
console.log(newArray);

//Find the Square root of every element & Store it in a new Array
let sqr = [222,444,666,888,999];
let newSqr = sqr.map((elem,index)=>{
    return Math.sqrt(elem);
});
console.log(newSqr);

// Fetch all the "pName: " in a separate array?
const data = [
    { pName: "Product 1", pDesc: "Description 1" },
    { pName: "Product 2", pDesc: "Description 2" },
    { pName: "Product 3", pDesc: "Description 3" },
  ];

  const productNames = data.map((elem,index)=>{
      return elem.pName;
  });
  console.log(productNames);

  
  const obj = { 
    pName: "Product 1", pDesc: "Description 1",
};
const pNames = Object.values(obj).filter(val => val.startsWith("pName: "));
console.log(pNames);

//Reduce Method

const num = [2,4,6,8,10];
let result = num.reduce((accumulator,current,index,array) => {
    // return accumulator*current;
    accumulator += current;
    if (index === array.length-1) {
        return accumulator/array.length;
    }
    return accumulator;
});
console.log(result);


let newArray2 = [
    [29,87],
    [45,56],
    [23,89],
    [87,67]
  ]
  let FlatenedArray = newArray2.reduce((acc,currval) => {
    return acc.concat(currval);
  }, []);
  
  console.log(FlatenedArray);
  
  const leastSum = FlatenedArray.reduce((min, num, index, arr) => {
    if (index % 2 === 0 && index < arr.length - 1) {
      return Math.min(min, num + arr[index + 1]);
    }
    return min;
  }, Infinity);
  
  const highestSum = FlatenedArray.reduce((max, num, index, arr) => {
    if (index % 2 === 0 && index < arr.length - 1) {
      return Math.max(max, num + arr[index + 1]);
    }
    return max;
  }, -Infinity);
  
  console.log("Least possible sum:", leastSum);
  console.log("Highest possible sum:", highestSum);
  
  //Get sum of a key field of an object literal
  
  const students = [
    { name: "John", score: 80 },
    { name: "Jane", score: 90 },
    { name: "Mark", score: 75 }
  ];
  const totalScore = students
    .map((student) => student.score)
    .reduce((total, score) => total + score, 0);
  console.log(totalScore);
  
  //Sorting an array
  
  const sortedArray = FlatenedArray.sort((a,b) => a - b);
  console.log(sortedArray);
  
  
  let newNum = [11,12,5,63,79,45];
  // every first two numbers should be added and stored in a new array and loop throughout the arrray and all the new values are stored in a new Array and result it out.
   
  // const addedArray = [];
  // for (let i = 0; i < newNum.length - 1; i++) {
  //   addedArray.push(newNum[i] + newNum[i + 1]);
  // }
  // const resultArray = addedArray.map((num, index) => num + addedArray[index + 1]);
  // console.log(resultArray);
  
  let price = [25, 10, 5, 100, 20, 50, 10];
  
  price.sort((a,b) =>{
    if(a < b){
      return -1;
    }
    if(a > b){
      return 1;
    }
    if(a == 0){
    return 0;
    }
  });
  const result2 = [...price];
  console.log(result2);
  console.log(price);


//Array Destructuring

let DesArr = [1, 2, 3, 4, 5];

let a,b,c,d = DesArr;

console.log(a,b,c,d);

function destructuringArray(arr) {
    let [a, b, c, d] = arr;
    console.log(a, b, c, d);
  }
  
  destructuringArray(DesArr);
  