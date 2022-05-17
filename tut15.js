console.log("this is tutorial 15");


let con = document.querySelector('.no');
// in this we selected element who's class is "no"
console.log(con);

let cont = document.querySelector('.container');
console.log(cont.childNodes);
// in this childNodes it will count in length all element included next line as well as comment also which you did in DOM

// if you do not wants to listed text, newline , comment in doctype in cont then use children not childNodes 

console.log(cont.children)
// this will coun only elements form this container div

let Node = cont.childNodes[0]
console.log(Node)

let NodeName = cont.childNodes[0].nodeName
// this will give node name of 
console.log(NodeName)


let nodetype = cont.childNodes[0].nodeType
// this will give node type number
console.log(nodetype)

// Node type 
/*
1. element
2. Attribute
3. Text Node
8. comment
9. document
10. doctype
*/


// traverse
let container = document.querySelector('div.container')  // ".container also be fine"
console.log(container.children[1].children[0].children)  //



console.log(container.lastChild);
console.log(container.lastElementChild);


console.log(container.children);
console.log(container.childElementCount)
// counts of children elements




// Siblings of elements or (text or comment)
console.log(container.firstElementChild)
console.log(container.firstElementChild.nextSibling)
// this will contain text as well as comments also.
console.log(container.firstElementChild.nextElementSibling)
// this will give element only 