console.log("this is tutorial 27 and in this we will learn about Objects");




// Object- literal for  creating objects
let car = {
    name: "Maruti 800",
    topSpeed: 80,
    run: function () {
        console.log("car is running");
    }
}
console.log(car)
console.log(car.run)
// from this we are accesing the value of run key

console.log(car.run())
// this will give us the result from the function which i declaired inside function
// this is not returnig anything that's why it is giving us undefine in the end of the result






// Creating a constructor for car
function GeneralCar(givingName, givingSpeed) {
    this.name = givingName;
    this.topSpeed = givingSpeed;
    this.run = function () {
        console.log(`${this.name} is running at  speed of ${givingSpeed}`)
    }
    this.analize = function () {
        console.log(`This car is slower by ${2000 - this.topSpeed} km/h then alto`)
    }
}

// first Object
car = new GeneralCar("Suzuki", 300);
console.log(car.name)
console.log(car.topSpeed)

// second Object
car2 = new GeneralCar("Maruti", 500)
console.log(car2.name)
console.log(car2.topSpeed)
console.log(car2.analize())


// these How we can create Objects using of constructor

