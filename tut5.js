let a = "1209.64"


// typeConversion

// Number
let num1 = Number(a)
console.log(num1)


// Parse and ParseFloat
let num2 = parseInt(a)     // this will give integer valut if string has float 
console.log(num2)

let num3 = parseFloat(a)       //this is for Float value
console.log(num3);


console.log(num3.toFixed(30));
// this will generate decimal value after it's original value