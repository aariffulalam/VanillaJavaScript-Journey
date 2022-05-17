console.log("this is tutorial 12")

let doc = window.document
console.log(doc)
// this will give us (DOM -> Document Object Modal) html document file structer . 

console.log(typeof doc)
// type will be object 





let a = doc.all;
console.log(a)
// this will give html coleectoin which is array but actualy it not  an array and we can't use "foreach loop" in this  .
// it will give error of foreach


// a.forEach(function (ele) {
//     console.log(ele)
// })
// Error ->   Uncaught TypeError  : a.forEach is not a function






// Resolving upper Errors
console.log(Array.from(a))


let htmlArr = Array.from(a)
console.log(htmlArr[5])
// this is converting this into an Array and also extract items using indexing

htmlArr.forEach(function (element) {
    console.log(element)
})

// in this loop is working






// if you want Links from a Website
let li1 = document.links
console.log(li1)
// this will give the links of an DOM

console.log(li1[0])
// it will go to the perticular link by indexing

console.log(li1[0].href)
// this will give the link of your DOM







// write code to extract all images and also scripts.

let img = document.images
console.log(img)
// this will give all images from the DOM 

console.log(img[0])
// this will give perticular hole image tag


