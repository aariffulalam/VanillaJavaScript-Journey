console.log("this is tutorial 10")

function greet(name, thank = "thank you") {
    console.log(`${name} and ${thank}`)
    return 10
};
// the return value will send and will assine from where it get call 





let name = "aarif";
let thank = " thank you so much";

let val = greet(name, thank);
console.log(val)







// Anonimous function

// this veriable assined  function gives error
const func1 = function func() {
    console.log(" this func is not defined")
}
// let call = func();     //this will giv error that this func is not define


// this is anonimous function
const f = function () {
    console.log(`we created a veriable "f" which is function`)
};
f();


// this is object type anonimous function
let Obj = {
    name: "Aarif",
    game: function () {
        return "GTA"
    }
}
console.log(Obj.game())








// Scope

// var -> this is a globle scope. this veriable we also can access inside and outside of the function because it has Global Scope .

if (1) {
    let i = 10;
    console.log(i)
}

console.log(i);     // outer of function value is not defined to fixed this we need to take var for to assine value of i

function ul(name) {
    let i = 9;
    console.log(i)
    return `This ${name} ul`
}

console.log(ul("Sanju"), i)
