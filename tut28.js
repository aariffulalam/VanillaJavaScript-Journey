console.log("this is tutorial 28");



// Object Literal
// which objects template are present in JavaScript that are "Object.Prototype"
let obj = {
    name: "Aarif",
    channel: "Aarifalam",
    address: "Jupiter"
};
// console.log(obj);





function Obj(givenName) {
    this.name = givenName;
};

// let Obj2 = new Obj("Aarif");
// console.log(Obj2)

// Prototype means that where from we are starting to create the Object
// in this it will start from constructor then Object 
// but in object literal proto will start from object. 


// if we are creating new Object using of constructer then can we change it's prototype
// suppose you want to create many utility functions and you want your object's attributes will move to prototype    // 

Obj.prototype.getName = function () {
    return this.name
}  // because of this we change our Prototype
// never change prototype, it will effect your Globle prototyte which is inheriting many thing which    

let Obj2 = new Obj("Aarif");  // in this we can change name and also can get the name
// but in the Object template we can't change the prototype. it will give us Error
console.log(Obj2)

console.log(Obj2.getName())










/*
Introduction to JavaScript prototype: -
    As we know that all objects in JavaScript are instances of Object.A typical object inherits properties from Object.prototype.The Object.prototype object has many built -in methods and properties such as toString(), valueOf(), etc.All objects see the object prototype object changes through prototype chaining unless the properties and methods subject to those changes are overridden further along the prototype chain.This is a very dangerous mechanism to override or extend object behavior.

JavaScript is a prototype-based language.Whenever we create a function using JavaScript, the JavaScript engine adds a prototype property inside a function. The prototype property is an object where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.
*/
function MyDetails(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}
console.log(MyDetails.prototype)


// Output - result
// The prototype object includes many properties and methods.Here is the explanation of a few prototype object methods.

/*
Methods and Description: 

hasOwnProperty(): It will return a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.

isPrototypeOf(): It will return a boolean indicating whether the specified object is in the prototype chain of the object, this method is called upon.

propertyIsEnumerable(): It will return a boolean that indicates whether the specified property is enumerable or not.

toLocaleString(): It will return the string in the local format.

toString(): It will return the string.

valueOf() :It will return the primitive value of the specified object.
*/





/*
Use of Prototype:-
JavaScript is using the prototype object in two things. First, one is to find properties and methods of an object, and the other is to implement inheritance in JavaScript. Here is an example:
*/
function Student() {
    this.name = 'Harry';
    this.gender = 'Male';
}
Student.prototype.sayHi = function () {
    console.log("Hello World!");
};
let std = new Student();
std.toString();
/*
In the above code, the JavaScript engine checks whether the toString() method is attached to std or not. If it does not find there, it uses std _proto__ link, which points to the prototype object of Student function. If it still cannot find it there, then it goes up in the hierarchy and check the prototype object of Object function because all the objects are derived from Object in JavaScript, and look for the toString() method. Thus, it finds the toString() method in the prototype object of Object function and so we can call std.toString(). 
*/