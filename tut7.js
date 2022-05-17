console.log(" we are in tutorial 7 ")



const mixed = [12, "mango", "angle"]
console.log(mixed)


// Array constructer
const arr = new Array(321, 31, 13, 12,)
console.log(arr)



// In array we have only two thing

// Property -> in which we willn't use parentheses or curly breckets that is called properties
console.log(arr.length)

// Method -> in which we will use curly brackets that are called mehtods
console.log(Array.isArray(arr))









// Mutating or Mutation 
let arr2 = [12, 32, 54, 65, 14, 67, 26, 93, 326, 21]



//push()
// in this item will append in last postion of arr2  
arr2.push(11111)
console.log(arr2)



// unshift()
// append item at first position 
arr2.unshift(2222222)
console.log(arr2)



// pop()
// remove item from the end 
let item = arr2.pop()
console.log(item)



// shift()
// this will remove item from starting
let item2 = arr2.shift()
console.log(item2)



// splice()
// this will remove items in range from starting point to ending point which we will gave in attributes
arr2.splice(1, 4)
console.log(arr2)



// reverse()
// this method will make Array reverse 
arr2.reverse()
console.log(arr2)




// concat()
// this will append hole array in another array
let a = [1, 2]
let b = [3, 4]
a = a.concat(b)
console.log(a)


// ***     these all methods are changing the original array we  are not returning
// ***     in const defined array we can not update our array with using these type of method.







// Objects


let myObj = {
    // first name: "Array"              //this is Error 
    "first name": "Array",
    alive: "yes"
}

console.log(myObj.alive)
console.log(myObj["first name"])