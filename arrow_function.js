// An arrow function is a concise way to write functions in JavaScript.Introduced in ES6(ECMAScript 2015),
// arrow functions are shorter and do not bind their own this context, making them especially useful for certain situations like callbacks.

// Differences Between Arrow Functions and Regular Functions:
// Shorter Syntax: Arrow functions are more concise.
// No Own this Context: Arrow functions do not have their own this value; they inherit it from the surrounding scope.
// No arguments Object: Arrow functions do not have the arguments object. Use rest parameters (...args) if needed.
// Cannot be Used as Constructors: You can't use new with arrow functions.


// 1. Basic Arrow Function

const add = function (a, b) {      // Regular Function
    return a + b;
};


const addArrow = (a, b) => a + b;         // Arrow Function

// Both add and addArrow do the same thing.
// The arrow function eliminates the need for function and return keywords when the body is a single return statement.

console.log(add(10, 4));       // Output: 14
console.log(addArrow(3, 4));  // Output: 7

// 2. Arrow Function with a Single Parameter

const greet = function (name) {           // Regular Function
    return `Hello ${name}!!`;
}

console.log(greet("Regular function with a Single Parameter"));

const arrow_Greet = (name) => `hello ${name}!!!`;              // Arrow Function

console.log(greet("Arrow function with a Single Parameter"));

// 3. Function with No Parameters


function hi() {
    return "hello regular function with No Parameters";
}

console.log(hi());

hiArrow = () => "hello arrow function with No Parameters";

console.log(hiArrow());


// Function with Multiple Statements

function multiply(a, b) {            //regular function
    const result = a * b;
    return result;
}
console.log(multiply(3, 4));  // Output: 12


const multiplyArrow = (a, b) => {
        const result = a * b;
        return result;
}

console.log(multiplyArrow(2, 4));  // Output: 8



