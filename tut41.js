function mul(a, b) {
    return a * b
}//calling function
mul(3, 3) //returns 9


let addition = function (x, y) {
    return x + y;
}
console.log(addition(10, 10)); // returns 20

/*
What are Arrow Functions? 
One of the most famous features in modern JavaScript is the arrow function.ES6 arrow functions provide us an alternative way to write a more concise and shorter syntax compared to the traditional function expression. Here is an syntax of arrow functions:

let myfunc = (arg1, arg2, ...argN) => expression
*/

let subs = (x, y) => x - y;
console.log(subs(10, 10)); // 20;

greet = () => {
    return "Hello World!";
}

greet = () => "Hello World!";

/*
Limitations of Arrow Functions:-
An arrow function expression is an alternative to a traditional function expression, but there are some limitations: 

Arrow functions do not have its own bindings to this or super, and should not be used as methods.
It is not suitable for the call, apply and bind methods, which generally rely on establishing a scope.
Arrow functions cannot be used as constructors.
*/