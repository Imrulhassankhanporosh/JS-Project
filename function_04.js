function add(a,b) {
    return a + b;
}


console.log("add function called :"+add(10, 15));

function multiply(a,b) {
    return a * b;
}

function divide(a, b) {
    console.log(`divide ${a} and ${b} and the result is : `+ a / b); //uses template literals
}


function greet(name) {
    console.log(`Hello, ${name}!`);  //uses template literals (enclosed in backticks `) to log a string that dynamically includes the value of a variable called name.
}


console.log("multiplication function called :" + multiply(5, 6));


setTimeout(function () {       //anonymous function call
    console.log("hello")
}, 1000);


setTimeout(greet, 2000, "alice");    //named function call

setTimeout(divide, 2000, 10,5);    //named function call

