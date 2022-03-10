// Excercise 1
// you have to create a veriable which is the string containing  the text which is the link you are intrested in.

// you have to fetch all the links from the given page which contains this text 

// codewithharry.com
//  which has javascripy


// have to complete 

let str = "python";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function (element) {
    href = element.href;
    if (href.includes(str)) {
        console.log(href);
    }
});
