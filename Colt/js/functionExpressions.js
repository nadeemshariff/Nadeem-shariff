//Function Expression

// +----------------------------------+
// |        Function Expression       |
// +----------------------------------+
// |                                  |
// |  const functionName = function() {
// |    // function body              |
// |  };                              |
// |                                  |
// +----------------------------------+
//      |
//      | Can be:
//      |
//      +-> Anonymous
//      |    const func = function() {...};
//      |
//      +-> Named
//      |    const func = function name() {...};
//      |
//      +-> Immediately Invoked (IIFE)
//           (function() {...})();

// Function Expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!

// Anonymous Function Expression
const square = function(x) {
    return x * x;
};

// Named Function Expression
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(factorial(5)); // Output: 120
// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("I'm executed immediately!");
})();

// Function Expression with Parameters  
const add = function(a, b) {
    return a + b;
};

console.log(add(3, 4)); // Output: 7

// Calculator using function expressions

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    
    subtract: function(a, b) {
        return a - b;
    },
    
    multiply: function(a, b) {
        return a * b;
    },
    
    divide: function(a, b) {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    },
    
    power: function(base, exponent) {
        return Math.pow(base, exponent);
    }
};

// Usage
console.log("Calculator Operations:");
console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(10, 4));
console.log("Multiplication:", calculator.multiply(6, 7));
console.log("Division:", calculator.divide(15, 3));
console.log("Power:", calculator.power(2, 3));

// Advanced operation using function expression
const calculateCompoundInterest = function(principal, rate, time, n) {
    const amount = principal * Math.pow(1 + (rate / n), n * time);
    return amount - principal;
};

console.log("\nCompound Interest Calculation:");
console.log("Interest earned:", calculateCompoundInterest(1000, 0.05, 2, 12).toFixed(2));