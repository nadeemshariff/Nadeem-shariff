// 1. Declaring an array named `teaFlavors` that contains the strings `"green tea"`, and `"oolong tea"`.
//Access the first element in the array and store it in a variable named `firstTea`.

//Access the last element in the array and store it in a variable named `lastTea`.

let teaFlavors = ["green tea", "Black tea", "oolong tea"];
let firstTea = teaFlavors[0];
let lastTea = teaFlavors[1];

console.log(firstTea);
console.log(lastTea);

// 2. Declare an array named `cities` containing `"London"`,`"Tokyo"`, `"Paris"`, and `"NewYork"`.
// Access the third element in the array and store it in a variable named `favoriteCity`.

let cities = ["London", "Tokyo", "Paris", "NewYork"];
let favoriteCity = cities[2];

console.log(favoriteCity);
//3. You have an array named `teaTypes` containig `"herbal tea"`, `"white tea"`, `"masala chai"`.
//change the second element of the array of the array to `"jasmine tea"`.

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

console.log(teaTypes);

//4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Delhi"`.
// Add `"Berlin"` to the array using the 'push' method.

let citiesVisited = ["Mumbai", "Delhi"];
citiesVisited.push("Berlin");

console.log(citiesVisited);

// 5. Remove the last element of the citiesVisited array using the 'pop' method and store it in a variable
let lastVisitedCity = citiesVisited.pop();

console.log("Removed city:", lastVisitedCity);
console.log("Updated citiesVisited array:", citiesVisited);

// 6. Store 3 favorite singers in an array and log the first singer
let favoriteSingers = ["Adele", "Ed Sheeran", "Beyoncé"];
console.log("First favorite singer:", favoriteSingers[0]);

// Create a new array with 4 favorite numbers
let favoriteNumbers = [7, 13, 42, 99];

// Create a mixed array with different data types
let mixedArr = ["string", ["otherarray"], 123, true];

// Access each item in the mixed array using [] notation
console.log("First item (string):", mixedArr[0]);
console.log("Second item (array):", mixedArr[1]);
console.log("Third item (number):", mixedArr[2]);
console.log("Fourth item (boolean):", mixedArr[3]);

// Accessing the nested array
console.log("Item in the nested array:", mixedArr[1][0]);

// Problem: You have an array named `teaOrders` with `"chai"`,`"iced tea"`, `"matcha"`,`"earl grey"`
// Remove the last element of the array using the 'pop' method and store it in a variable `lastOrder`.

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();

console.log(lastOrder);
console.log(`The Poped Element is: ${lastOrder}`);
console.log(` The teaOrders array is: ${teaOrders}`);

// Problem: You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, `"chai"`. Create a soft copy of this array named `softCopyTeas` using the spread operator.

let popularTeas = ["green tea", "oolong tea", "chai"];
// This line creates a new array called 'softCopyTeas' by using the spread operator (...) 
// to copy all elements from the 'popularTeas' array.
// The spread operator creates a shallow copy, meaning it creates a new array
// with the same elements as the original, but doesn't create new copies of nested objects.
let softCopyTeas = [...popularTeas];

console.log(softCopyTeas);
// Traditional method
let traditionalCopy = popularTeas.slice();

console.log(traditionalCopy);

// This code demonstrates the traditional method of creating a shallow copy of an array in JavaScript.
// The 'slice()' method is used without arguments, which returns a new array containing all elements
// from the original array. This creates a new array reference with the same elements as 'popularTeas'.
// The 'traditionalCopy' array is then a separate array from 'popularTeas', but contains the same values.
// Any changes made to 'traditionalCopy' won't affect 'popularTeas', and vice versa, as long as the
// elements are primitive values. However, if the array contains objects or nested arrays, those
// references would still be shared between the original and the copy.


//problem: you have an array named `topCities` containing `"London"`,`"Tokyo"`, `"Paris"`, and `"NewYork"`.
//Create a hardcopy of this array named `hardCopyCities`.

let topCities = ["London", "Tokyo", "Paris", "NewYork"];
let hardCopyCities = [...topCities];
topCities.pop();
console.log(hardCopyCities)
console.log(topCities);

//problem: You have two arrays: `europeanCities` containing `"Paris"` and `"Rome`, and `"asianCities" containing `"Tokyo"` and `"Bangkok"`.
// Merge these two arrays into a new array named `worldCities`.

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
// const wC = europeanCities + asianCities;
// console.log(wC)
//concat method
let worldCiti = europeanCities.concat(asianCities);
console.log(worldCiti);
let worldCities = [...europeanCities, ...asianCities];
console.log(worldCities);

//------------------------------------
let cityBucketList = ['Kyoto','London','Cape Town','Vancouver']

let isLondonList = cityBucketList.includes('London');

console.log(isLondonList)