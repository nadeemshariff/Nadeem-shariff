// Object Creation
const person = {
  name: "John",
  age: 30,
  occupation: "Developer"
}

// Accessing Object Properties
console.log(person.name); // Output: John
console.log(person['age']); // Output: 30

// Adding New Properties
person.email = "john@example.com"

// Modifying Properties
person.age = 31

// Deleting Properties
delete person.occupation

// Object Methods
const car = {
  brand: "Toyota",
  model: "Camry",
  start: function() {
    console.log("The car is starting...")
  }
}

car.start(); // Output: The car is starting...

// Object Constructor Function
function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925)

// Object.keys()
console.log(Object.keys(person)); // Output: ['name', 'age', 'email']

// Object.values()
console.log(Object.values(person)); // Output: ['John', 31, 'john@example.com']

// Object.entries()
console.log(Object.entries(person)); // Output: [['name', 'John'], ['age', 31], ['email', 'john@example.com']]

// Object Destructuring
const { name, age } = person
console.log(name, age); // Output: John 31

// Spread Operator with Objects
const updatedPerson = { ...person, city: "New York" }

// Object.freeze()
Object.freeze(person)
person.name = "Jane"; // This won't change the name
console.log(person.name); // Output: John

// Object.assign()
const target = { a: 1, b: 2 }
const source = { b: 3, c: 4 }
const result = Object.assign(target, source)
console.log(result); // Output: { a: 1, b: 3, c: 4 }
// Object.create()
const personProto = {
  greet: function() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

const john = Object.create(personProto)
john.name = "John"
john.greet() // Output: Hello, my name is John

// Computed Property Names
const propertyName = "color"
const car2 = {
  brand: "Honda",
  [propertyName]: "red"
}
console.log(car2.color) // Output: red

// Object.is()
console.log(Object.is(5, 5)) // Output: true
console.log(Object.is(5, '5')) // Output: false
console.log(Object.is(NaN, NaN)) // Output: true

// Object.seal()
const sealedObject = { prop: 42 }
Object.seal(sealedObject)
sealedObject.prop = 33 // This works
sealedObject.newProp = "new" // This doesn't work
console.log(sealedObject) // Output: { prop: 33 }

// Object Methods with Arrow Functions
const calculator = {
  num: 0,
  increment: () => {
    calculator.num++
  },
  decrement: () => {
    calculator.num--
  },
  getValue: () => calculator.num
}

calculator.increment()
console.log(calculator  .getValue()) // Output: 1

// Object Property Shorthand
const x = 10, y = 20
const point = { x, y }
console.log(point) // Output: { x: 10, y: 20 }


// const appUser = new Object() - this is a singleton
const appUser = {}  

appUser.id = "123abc"
appUser.name = "Rohini"
appUser.isLoggedIn = true;


// console.log(appUser)

const regUser = {
  email: "rohini@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Rohini",
      lastName: "Sharma"
    }
  }
}
console.log(regUser.fullName?.userFullName?.firstName) // Output: Rohini

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 2: "b"}
const obj3 = {obj1, obj2};
console.log(obj3);
console.log(obj3[2]); // Output: b

const obj4 = {1: "a", 2: "b"}
const obj5 = {2: "a", 3: "b"}
const obj6 = {obj4, obj5};
console.log(obj6);
console.log(obj6[2]); // Output: b