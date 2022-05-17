console.log("this is tuttorial 14")

/*
element selectors:
1. Single element selector
2. Multielement selector
*/



// 1. Single element selector

let element = document.getElementById("myfirst");
console.log(element)
// in this we selected the div who's id is "myfirst"

let cl = element.className;
console.log(cl)
// this will give all classes which given to this div and also we can change or updete element

let pr = element.parentNode;
console.log(pr)
// this will give it's parent div

let ch = element.childNodes;
console.log(ch)
// this will give it's all child nodes


// style
element.style.color = "red"
// from this we also can change and update CSS ( we can give style)

// HTML
element.innerText = "this is Alam's House"
element.innerHTML = "<b>this is Alam's House</b > "


let sel = document.querySelector("#myfirst");
// this will select the id element 

sel = document.querySelector(".child");
// this will select first child from all child all child classes

sel = document.querySelector('div');
// in this it will select first div only 
sel.style.color = "green";
sel.style.background = "yellow"

console.log(sel)




// 2. Multi element selector

let elems = document.getElementsByClassName('child');
// this will choose all child classes of that DOM 
console.log(elems[0])
// and also we can asses these classes by giving indexing

elems = document.getElementsByClassName("container");
console.log(elems[0].getElementsByClassName('child'))
// this how we also can do chaning

elems = document.getElementsByTagName("div")
// this will give us all divs which we have in this DOM 


console.log(elems)




// iterate all divs

// this will Error because "elems" represent all div in array but it is not array so first we need to change into array this we have to do for using forEach loop only
// otherwise we can iterate in normal way using normal for loop also.
// elems.forEach(function (elem, ind, arr) {
//     console.log(elem)
// });

Array.from(elems).forEach(function (element) {
    console.log(element)
    element.style.color = "blue"
})

// // this how we can iterate. but remember first we need to convert it into Array 



