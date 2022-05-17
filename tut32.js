console.log("this is tutorial 32")

// create a class library and implement the following:
// constructor must take the booklist  as an argument
// getBooklist()
// issueBook(bookName, user)
// returnBook(bookName)




class library {
    constructor(givenbookList) {
        this.bookList = givenbookList
        this.issuedBooks = {}
    }

    getBookList() {
        this.bookList.forEach(ele => {
            console.log(ele);
        });
    };

    issueBook(bookName, user) {
        // if (bookName in this.bookList) {     // this is not working because in Array it is taking index

        if (bookName in this.issuedBooks) {    // this is working because in Object it is taking value
            console.log(`this is alredy issued by ${this.issuedBooks[bookName]}`)
        } else {
            this.issuedBooks[bookName] = user
            console.log(this.issuedBooks)
        }
        // } else {
        //     console.log("this book isn't in this library, please check nearby liabrary")
        // }
    }

    bookReturn(bookName) {
        delete this.issuedBooks[bookName]
        console.log(this.issuedBooks)
    }

}

// lib = new library(["god", "life", "aarif"])
// console.log(lib.getBookList())
// console.log(lib)

// var a = 8
// function f() {
//     a = 10
// }
// console.log(a)