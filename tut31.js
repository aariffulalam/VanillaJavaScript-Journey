console.log("this is for test ")


// class is Blue print or Template.

class Employee {

    // constructor is the function which is called when object will creating
    constructor(givinName, givinExperience, givingDivision) {
        this.name = givinName
        this.experience = givinExperience
        this.division = givingDivision
    }

    slogan() {
        return `i am ${this.name} and this is the best company.`
    }

    joiningYear() {
        return 2022 - this.experience;
    }

    static add(num1, num2) {
        return num1 + num2
    }

}


// iheritence means that using a class properties and creating new class it is called inheritece

// programmer class is inherrit properties of Employee
class Programmer extends Employee {
    constructor(givinName, givinExperience, givingDivision, language, github) {
        super(givinName, givinExperience, givingDivision);  // if there creating of new object using of new then that Object will called to Super and then super will calles the constructor where from the it's class is iherritering properties
        // super means privious constructor
        this.language = language
    }

    favoriteLanguage() {
        return this.language == "python" ? "python" : "JavaScript"
    }
    static muti(num3, num4) {
        return num3 * num4
    }
}



let fur = new Employee("Aarif", 12)
// console.log(fur.joiningYear())   //this will give function's value 
// console.log(fur.slogan)         // this will give entire function
// console.log(Employee.add(12, 21))  // this is for static fucntion

let sajjad = new Programmer("Sajjad", 15, "D", "Nodejs", "@sajjad1994");
console.log(sajjad)
console.log(sajjad.favoriteLanguage())
console.log(Programmer.muti(21, 0))

// today i learnt about class