// Mixing data and functionality
// This is a bad practice, as it makes the code harder to understand and maintain.
// It's better to separate data and functionality into different classes or functions.
class Person {
    constructor(name, age) {
        
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

const person = new Person("John", 30);
person.greet();
// Output: Hello, my name is John and I am 30 years old.

let tri = {
    a:3,
    b:4,
    getArea: function(){
        return (this.a + this.b)/2
    },
    getHypotenuse: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    },
};
console.log(tri.getArea());
console.log(tri.getHypotenuse());