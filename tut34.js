console.log('this is class of synchronous and asynchronous programming. ')



// SYNCHRONOUS PROGRAMMING

// // what if i will use loop.
// for (let i = 0; i < 500; i++) {
//     console.log("i am index " + i)
// }
// // so after completing this loop  following loop will work.
// /*
//     this is our synchronous programming. this will not goes to next line if current exicution will not complete.
// */
// console.log("Done printing .")



// ASYNCHRONOUS PROGRAMMING

setTimeout(() => {
    for (let i = 0; i < 500; i++) {
        console.log("i am index " + i)
    }
}, 5000);
console.log('i am done.')

// this is SetTimeOut method which has call back fuction. it's mean that if it's execution didn't completed then it will execute the next line and after completing of it's execution it will return it's result.
// this is not blocking the programme