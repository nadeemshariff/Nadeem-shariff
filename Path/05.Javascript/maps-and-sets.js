//Maps and Sets

//Creating a Object
const person = {
    firstName: 'John',
    lastName: 'Doe',
};

//Creating a Map
const map1 = new Map();

//Creating a Set
const set1 = new Set();

//Adding Elements
map1.set('firstName', 'John');
map1.set('lastName', 'Doe');

console.log(map1);


set1.add('firstName');
set1.add('lastName');
console.log(set1);

// Using Non-String Keys
map1.set(new Date().getTime(), "Number Key");
map1.set([], "Array Key");
map1.set({}, "Object Key");

console.log(map1);

//Checking the Size
console.log(`Map Size: ${map1.size}`);  
console.log(`Set Size: ${set1.size}`);

//Accessing Elements
console.log(map1.get('firstName'));
console.log(map1.get(new Date().getTime()));
console.log(map1.get([]));//to get the value we need to get reference index from the map
console.log(map1.get({}));
console.log(map1.get('lastName'));
console.log(map1)

//Deleting Elements
map1.delete('firstName');
set1.delete({});

console.log(`Map Size: ${map1.size}`);
console.log(`Set Size: ${set1.size}`);

//Checking the set size
console.log(`Set Size: ${set1.size}`);

// Adding complex sets
const team = new Set();
const emp1 = {
    firstName: 'John',
    lastName: 'Doe',
};

const emp2 = {
    firstName: 'Jane',
    lastName: 'Doe',
};
 team.add(emp1);
 team.add(emp2);

console.log(`Set Size: ${team.size}`);

//Detect if a set has a object
console.log(`Does have employee: ${team.has(emp1)}`);
console.log(`Does have employee: ${team.has(emp2)}`);

//Deleting the value
team.delete(emp1);
console.log(`Set Size: ${team.size}`);

//Clearing the set
team.clear();
console.log(`Set Size: ${team.size}`);

//Iterating Maps
map1.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

//More on Maps and Sets

// Converting Map to Array
const mapArray = Array.from(map1);
console.log('Map as Array:', mapArray);

// Converting Set to Array
const setArray = Array.from(set1);
console.log('Set as Array:', setArray);

// Creating a Map from an Array
const arrayToMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log('Array to Map:', arrayToMap);

// Creating a Set from an Array
const arrayToSet = new Set([1, 2, 3, 4, 5]);
console.log('Array to Set:', arrayToSet);

// Using Map to count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = new Map();

for (let fruit of fruits) {
    fruitCount.set(fruit, (fruitCount.get(fruit) || 0) + 1);
}

console.log('Fruit count:', fruitCount);

// Using Set for unique values
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);
console.log('Unique numbers:', uniqueNumbers);

// Weak Maps and Weak Sets
let obj = { key: 'value' };
const weakMap = new WeakMap();
weakMap.set(obj, 'Weak Map Value');
console.log('Weak Map value:', weakMap.get(obj));

const weakSet = new WeakSet();
weakSet.add(obj);
console.log('Object in Weak Set:', weakSet.has(obj));

// Note: WeakMap and WeakSet allow garbage collection of their keys
