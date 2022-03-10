console.log("this is tutorial 8 of If-Else");

let age = 20;

if (age === 20) {
    console.log("age is 20");
}
else if (age === 40) {
    console.log("age is 40");
}
else {
    "age id 60"
};



// ==   will check value only 
// ===   this will check value and also type of an element





// how to Check an element that it is define or not
let varry = "i am varry"
if (varry !== "undefined") {
    console.log("varry is defined");
} else {
    console.log("varry isn't defined");
};








// (?) Ternary Operator

console.log(age == 67 ? "age is 67" : age == 47 ? "age is 47" : "age is 30")




// Switch case
switch (age) {
    case 43:
        console.log("age 43")
        break;

    case 63:
        console.log("age 63")
        break;

    case 20:
        console.log("age 20")
        break;

    default:
        console.log("age 100")
        break;
}

// break will stop to go to the next statement is that perticular statement will be true
// otherwise it will exicute all statements
// if any value will not match then default value will be executed
