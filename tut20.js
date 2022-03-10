console.log("this is tutorial 20");

/*
What is localStorage in JavaScript? 
-> localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed
*/
console.log(window.localStorage)


// set item in localstorage
localStorage.setItem("fname", "Aarif");
localStorage.setItem("lname", "Alam");


// get item from localStorage
let fname = localStorage.getItem("fname");
console.log(fname)

let lname = localStorage.getItem("lname");
console.log(lname)

// if i will do getItem which is not existing in localStorage then it will give only "null"





// Clear the localstorage
// localStorage.clear();





// clear perticular Key
localStorage.removeItem("fname");




// Add list in localStorage

let array = ["mango", "banana", "apple"];

// localStorage.setItem("fruits", array)
// console.log(localStorage.getItem("fruits"))   // this will be string to get reed from this

localStorage.setItem("fruits", JSON.stringify(array));

let ar = JSON.parse(localStorage.getItem("fruits"));  // now this will give us Array
console.log(ar)









/*
Session-Storage
The sessionStorage object stores data only for a session. It means that the data stored in the sessionStorage will be deleted when the browser is closed. A page session lasts as long as the web browser is open and survives over the page refresh.
*/

sessionStorage.setItem("sessionfname", "Aarif");
sessionStorage.setItem("sessionlname", "Alam");
sessionStorage.setItem("sessionfruits", JSON.stringify(array));

console.log(sessionStorage);