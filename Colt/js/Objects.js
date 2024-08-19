// Objects
/*
An object is a collection of properties, and a property is a 
key-value pair. The key is a string, and the value can be any 
valid JavaScript value, including another object.

Objects are defined using curly braces {}.

Here is an example of a simple object:
*/

const user = {
    name: "John",
    age: 30,
    isStudent: true,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};


/*
You can access the properties of an object using dot notation:
*/
console.log(user.name); // Output: John

/*
Or using square brackets and the property name as a string:
*/
console.log(user["age"]); // Output: 30

/*
You can also modify the properties of an object:
*/
user.age = 31;
console.log(user.age); // Output: 31

/*
And you can add new properties to an object:
*/
user.occupation = "software engineer";
console.log(user.occupation); // Output: software engineer

/*
You can also delete properties from an object:
*/
delete user.isStudent;
console.log(user.isStudent); // Output: undefined

/*
And you can check if a property exists in an object:
*/
console.log("name" in user); // Output: true

/*
You can also loop through the properties of an object:
*/
for (let key in user) {
    console.log(key + ": " + user[key]);
}

/*
This will output:

name: John
age: 31
occupation: software engineer
address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
}
hobbies: [ 'reading', 'coding', 'gaming' ]
*/

//Example 1: Creating a basic user interface

const profile = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    location: "New York",
    displayProfile: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Occupation: ${this.occupation}`);
        console.log(`Location: ${this.location}`);
    }
};

profile.displayProfile();

//Example 2: Building a simple shopping cart

const cart = {};

cart.addItem = function(name, price) {
    this[name] = price;
};

cart.removeItem = function(name) {
    delete this[name];
};

cart.showCart = function() {
    let total = 0;
    for (let item in this) {
        if (this.hasOwnProperty(item)) {
            console.log(`${item} - $${this[item]}`);
            total += this[item];
        }
    }
    console.log(`Total: $${total}`);
};

cart.addItem("Shirt", 20);
console.log("Added Shirt to cart");
cart.addItem("Pants", 30);
console.log("Added Pants to cart");
cart.addItem("Shoes", 60);
console.log("Added Shoes to cart");

cart.showCart();

cart.removeItem("Shoes");
console.log("Removed Shoes from cart");