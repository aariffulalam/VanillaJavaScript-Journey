console.log("this is tutorial 16");



// How to create an element
let element = document.createElement("li");

// Add class, Id, attributes in li element
element.className = "childul";
element.id = "createdLi";
element.setAttribute("title", "mytitle");
element.setAttribute("name", "li");
element.innerText = "Hello this created Aarif alam."
console.log(element);
// here Element is ready

// append li in 'ul' or we can say how we will fit this inside our DOM
let ul = document.querySelector("ul.this");
console.log(ul);
ul.append(element);



// Another way of adding Text in element
let text = document.createTextNode('this how i also can create text and after this i have to append this where i want to use this text.');
let element1 = document.createElement("li");
element1.appendChild(text)
ul.append(element1)
console.log(ul)





// // if you wants to replace an element from other element.
// let elem2 = document.createElement("h3");
// elem2.className = "elem2";
// elem2.id = "elem2";
// console.log(elem2);
// let tnode = document.createTextNode("this is created text node for  elem2");
// elem2.appendChild(tnode);
// element.replaceWith(elem2)
// // in this elem2 should be an child of element

// // // also replace this way
// // let mylu = document.getElementById("myul");
// // myul = replaceChild(elem2, getElementById("fli"));
// // this is not working



// // Remove a child element
// let myul = document.getElementById("myul");
// myul.removeChild(document.getElementById("fli"));




// // if we want to see class, id or any attrubutes from our element
// let cl = elem2.getAttribute("class");
// let i = elem2.getAttribute("id");
// console.log(elem2, cl, i)





// // Remove an Attributes
// elem2.removeAttribute("id");
// console.log(elem2)   // in this id in not but upper of this you will found is there "line 61"