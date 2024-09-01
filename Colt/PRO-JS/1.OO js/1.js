
const key = "species";
const pet = {
    species: "abc",
    name: "xyz",
    age: 1
}

const { species, name, age } = pet

console.log(pet[age]);


console.log(species, name, age)

pet[true] = "Hello!!";
console.log(pet)

pet.bark = function(){
    return "owowowowo";
}
console.log(pet.bark());



// Plain Old JavaScript Objects (POJOs)
// POJOs are simple, unadorned JavaScript objects created using object literal notation.
// They are collections of key-value pairs and do not have any special methods or prototypes.
// POJOs are commonly used for storing and organizing data in a straightforward manner.


// Example of a POJO:
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Developer"
}

// You can access properties using dot notation or bracket notation:
console.log(person.name); // Output: John Doe
console.log(person["age"]); // Output: 30

// You can add, modify, or delete properties:
person.location = "New York"
person.age = 31
delete person.occupation

// POJOs are versatile and can contain nested objects and arrays:
const company = {
  name: "Tech Co",
  employees: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ],
  address: {
    street: "123 Main St",
    city: "Techville"
  }
}

// POJOs are commonly used in various JavaScript applications, including
// data storage, configuration objects, and as return values from functions.


