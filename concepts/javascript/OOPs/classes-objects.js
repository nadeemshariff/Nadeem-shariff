// OOPs

// Object-Oriented Programming (OOP) in JavaScript
let human = {
    firstName: '',
    lastName: '',
    age: 0,
    fullName: function() {
        return `${this.firstName} {this.lastName}`;
    },
};

let jim = {};
Object.setPrototypeOf(jim, human);


jim.firstName = 'Jim';
jim.lastName = 'Smith';
jim.age = 50;
jim.fullName();

jim.age;
jim;

// let student = {
//     enrolledCourses: [],
//     enroll(course){
//         this.enrolledCourses.push(course);
//     }
// };

// Object.setPrototypeOf(student, human);
 

// jim.enroll({courseId: 'ABC'});
// jim.enrolledCourses;

// Object.setPrototypeOf(jim, student);
// jim;
 

//-------------------------------------------------------------

// 1. Classes and Objects
// Define a class called Car
class Car {
  // Constructor method to initialize object properties
  constructor(brand, model) {
    // This line defines the constructor method for the Car class
    // It takes two parameters: brand and model

    this.brand = brand;
    // This line assigns the value of the 'brand' parameter to the 'brand' property of the object being created

    this.model = model;
    // This line assigns the value of the 'model' parameter to the 'model' property of the object being created
  }  

  // Method to display car information
  displayInfo() {
    console.log(`This is a ${this.brand} ${this.model}`);
  }
}

// Create a new Car object
const myCar = new Car("Toyota", "Corolla");
// Call the displayInfo method on the myCar object
myCar.displayInfo(); // Output: This is a Toyota Corolla

// Example: Adding a method to the Car class
// Define a new class CarWithMileage that extends Car
class CarWithMileage extends Car {
  // Constructor method that calls the parent constructor and adds a new property
  constructor(brand, model, mileage) {
    super(brand, model);
    this.mileage = mileage;
  }

  // New method to display mileage information
  displayMileage() {
    console.log(`This ${this.brand} ${this.model} has ${this.mileage} miles on it.`);
  }
}

// Create a new CarWithMileage object
const myCarWithMileage = new CarWithMileage("Honda", "Civic", 50000);
// Call methods on the myCarWithMileage object
myCarWithMileage.displayInfo(); // Output: This is a Honda Civic
myCarWithMileage.displayMileage(); // Output: This Honda Civic has 50000 miles on it.

// 2. Inheritance
// Define a new class ElectricCar that extends Car
class ElectricCar extends Car {
  // Constructor method that calls the parent constructor and adds a new property
  constructor(brand, model, batteryCapacity) {
    super(brand, model);
    this.batteryCapacity = batteryCapacity;
  }

  // Override the displayInfo method to include battery capacity
  displayInfo() {
    super.displayInfo();
    console.log(`Battery Capacity: ${this.batteryCapacity} kWh`);
  }
}

// Create a new ElectricCar object
const myElectricCar = new ElectricCar("Tesla", "Model 3", 75);
// Call the displayInfo method on the myElectricCar object
myElectricCar.displayInfo();
// Output:
// This is a Tesla Model 3
// Battery Capacity: 75 kWh

// Example: Multi-level inheritance
// Define a new class LuxuryElectricCar that extends ElectricCar
class LuxuryElectricCar extends ElectricCar {
  // Constructor method that calls the parent constructor and adds a new property
  constructor(brand, model, batteryCapacity, luxuryFeatures) {
    super(brand, model, batteryCapacity);
    this.luxuryFeatures = luxuryFeatures;
  }

  // Override the displayInfo method to include luxury features
  displayInfo() {
    super.displayInfo();
    console.log(`Luxury Features: ${this.luxuryFeatures.join(", ")}`);
  }
}

// Create a new LuxuryElectricCar object
const myLuxuryElectricCar = new LuxuryElectricCar("Lucid", "Air", 110, ["Massage Seats", "Executive Rear Seats", "Glass Canopy Roof"]);
// Call the displayInfo method on the myLuxuryElectricCar object
myLuxuryElectricCar.displayInfo();
// Output:
// This is a Lucid Air
// Battery Capacity: 110 kWh
// Luxury Features: Massage Seats, Executive Rear Seats, Glass Canopy Roof

// 3. Encapsulation
// Define a class called BankAccount with a private field
class BankAccount {
  #balance = 0; // Private field

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  // Method to get the current balance
  getBalance() {
    return this.#balance;
  }
}

// Create a new BankAccount object
const account = new BankAccount();
// Perform operations on the account
account.deposit(1000);
account.withdraw(500);
console.log(account.getBalance()); // Output: 500

// Example: Encapsulation with getters and setters
// Define a class called Person with private fields
class Person {
  #firstName;
  #lastName;
  #age;

  // Constructor to initialize private fields
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  // Getter for full name
  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  // Setter for full name
  set fullName(name) {
    [this.#firstName, this.#lastName] = name.split(" ");
  }

  // Getter for age
  get age() {
    return this.#age;
  }

  // Setter for age with validation
  set age(newAge) {
    if (newAge > 0 && newAge < 120) {
      this.#age = newAge;
    } else {
      console.log("Invalid age");
    }
  }
}

// Create a new Person object
const person = new Person("John", "Doe", 30);
// Use getters and setters
console.log(person.fullName); // Output: John Doe
person.fullName = "Jane Smith";
console.log(person.fullName); // Output: Jane Smith
console.log(person.age); // Output: 30
person.age = 35;
console.log(person.age); // Output: 35
person.age = 150; // Output: Invalid age

// 4. Polymorphism
// Define a base class Shape
class Shape {
  area() {
    return 0;
  }
}

// Define a Circle class that extends Shape
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Override the area method
  area() {
    return Math.PI * this.radius ** 2;
  }
}

// Define a Rectangle class that extends Shape
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // Override the area method
  area() {
    return this.width * this.height;
  }
}

// Create an array of different shapes
const shapes = [new Circle(5), new Rectangle(4, 6)];
// Calculate and log the area of each shape
shapes.forEach(shape => console.log(shape.area()));
// Output:
// 78.53981633974483
// 24

// Example: Polymorphism with method overloading (simulated in JavaScript)
// Define a Calculator class with an overloaded add method
class Calculator {
  add(a, b, c) {
    if (c === undefined) {
      return a + b;
    } else {
      return a + b + c;
    }
  }
}

// Create a new Calculator object
const calc = new Calculator();
// Use the add method with different numbers of arguments
console.log(calc.add(2, 3)); // Output: 5
console.log(calc.add(2, 3, 4)); // Output: 9

// Small Project: Library Management System
// Define a Book class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }
}

// Define a Library class
class Library {
  constructor() {
    this.books = [];
  }

  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
    console.log(`Added "${book.title}" to the library.`);
  }

  // Method to remove a book from the library
  removeBook(isbn) {
    const index = this.books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      console.log(`Removed "${removedBook.title}" from the library.`);
    } else {
      console.log("Book not found in the library.");
    }
  }

  // Method to borrow a book
  borrowBook(isbn) {
    const book = this.books.find(book => book.isbn === isbn);
    if (book) {
      if (book.isAvailable) {
        book.isAvailable = false;
        console.log(`Borrowed "${book.title}".`);
      } else {
        console.log(`"${book.title}" is not available for borrowing.`);
      }
    } else {
      console.log("Book not found in the library.");
    }
  }

  // Method to return a book
  returnBook(isbn) {
    const book = this.books.find(book => book.isbn === isbn);
    if (book) {
      if (!book.isAvailable) {
        book.isAvailable = true;
        console.log(`Returned "${book.title}".`);
      } else {
        console.log(`"${book.title}" is already in the library.`);
      }
    } else {
      console.log("Book not found in the library.");
    }
  }

  // Method to display all books in the library
  displayBooks() {
    console.log("Library Catalog:");
    this.books.forEach(book => {
      console.log(`"${book.title}" by ${book.author} (ISBN: ${book.isbn}) - ${book.isAvailable ? 'Available' : 'Borrowed'}`);
    });
  }

  // Example: Adding a search method to the Library class
  searchBooks(query) {
    const lowercaseQuery = query.toLowerCase();
    const results = this.books.filter(book => 
      book.title.toLowerCase().includes(lowercaseQuery) ||
      book.author.toLowerCase().includes(lowercaseQuery) ||
      book.isbn.includes(query)
    );

    if (results.length > 0) {
      console.log("Search Results:");
      results.forEach(book => {
        console.log(`"${book.title}" by ${book.author} (ISBN: ${book.isbn}) - ${book.isAvailable ? 'Available' : 'Borrowed'}`);
      });
    } else {
      console.log("No books found matching the search query.");
    }
  }
}

// Usage of the Library Management System
// Create a new Library object
const library = new Library();

// Create new Book objects
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "9780446310789");
const book3 = new Book("1984", "George Orwell", "9780451524935");

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Display all books in the library
library.displayBooks();

// Borrow and return a book
library.borrowBook("9780743273565");
library.returnBook("9780743273565");

// Remove a book from the library
library.removeBook("9780446310789");

// Display updated library catalog
library.displayBooks();

// Example: Using the new search method
library.searchBooks("Gatsby");
library.searchBooks("Orwell");
library.searchBooks("9780451524935");
library.searchBooks("Harry Potter"); // No results




function People(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
// let Me = new People('jim','ABC', 25);




// console.log(Me);


const user = {
    username: 'Nadeem',
    loginCount: 8 ,
    signedIn: true,

    getUsedDetails: function(){
        console.log(this);
        // console.log("ABCDEFG");
        // console.log(`Username: ${this.username}`);
    }
}
console.log(this);// here this is a global context.

console.log(user.username);
console.log(user.getUsedDetails());

const user2 = {
    username: 'John',
    loginCount: 5,
    signedIn: false,

    getUsedDetails: function(){
        console.log(this);
        // console.log(`Username: ${this.username}`);
    }
}

console.log(user2.username);
console.log(user2.getUsedDetails());

// Constructor function;

class User {
    constructor(username, loginCount, signedIn) {
        this.username = username;
        this.loginCount = loginCount;
        this.signedIn = signedIn;

        this.greetnig = function(){
            console.log(`Hello ${this.username}`);
        }

        return this;
    }
}

const user3 = new User('Nadeem', 8, true);
const user4 = new User('Rohini', 8, false);
console.log(user3.constructor)
// console.log(user4);
// console.log(user3.username);
// console.log(user3.loginCount);
// console.log(user3.signedIn);

const member = {
    fullname : 'Mansha',
    age: 25,
    body: 'petite',
    getFullDetails: function(){
        console.log(`Name is ${this.fullname} whose age is ${this.age} with body figure ${this.body}`);
    },
};

const user5 = Object.create(member);
console.log(user5.fullname);
console.log(user5.body);
console.log(user5.getFullDetails());

let arr = ["A","B","C"];
console.log(arr);
console.log(typeof arr);

const employee = {
    calTax1(){
        console.log(`Tax rate is 10%`);

    },
    calTax2 : function(){
        console.log(`Tax rate is 20%`);
    }
};

const abc = {
    salary: 50000,
    calTax(){
        console.log(`the tax rate is 20% `); 
    }
}

const emp = Object.setPrototypeOf(employee, abc);

emp.calTax1();
emp.calTax2();
console.log(abc);
console.log(emp.salary);
