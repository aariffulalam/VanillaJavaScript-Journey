console.log("this is tutorial 6")


// Concat
// concat method is used for to add strings to the exsiting strings
let str = "mango"
str = str.concat(" apple", " papaya")
console.log(str)



// Indeof()
// this will give us index number of the string
console.log(str.indexOf("le"))       //this will give first occurence

console.log(str.lastIndexOf('a'))      // this will give last occurence



// charAt()
// provide perticular string of an index which we will provide 
console.log(str.charAt(8));



//endsWith()
// this will gives boolian result that str lies in last or not
console.log(str.endsWith("ok"))




//includes()
// this will also provide boolian that perticular string are in variable or not 
console.log(str.includes("pp"));





// substring()
// this will give us srting in a range witch we will provide
console.log(str.substring(1, 10))
// first atrribute is including and second one is excluded
console.log(str.substring(1))
// or if we will give only one attribute then it will took all value of string after it's attribute index



// slice()
console.log(str.slice(0, -4))
// (first index, lastindex)




// split()
console.log(str.split("a"))
// this will devide string in multiple items of an array
// and this will devide when it will found our given string item 




//replace()
console.log(str.replace("man", "woman"))
// replace only one and first occurrence






// let name = "Aarif"
let fruit1 = "mango\'"
let fruit2 = "apple"

let myHtml = `
            <h1>This is heading</h1>
            <p> You like ${fruit1} and
            ${fruit2}</p>`

document.body.innerHTML = myHtml