console.log("this is tutorial 18");


// let btn = document.getElementById("btn");
// //this is for single click event
// btn.addEventListener("click", funct1);
// // this is for double click event
// btn.addEventListener("dblclick", funct2);


// function funct1(e) {
//     console.log("thanks single click is working", e)
//     // console.log(e)

//     // if in DOM in Input type we will give submit then it will redirec us to file which we gave in action


//     // if do have directly Button not input button in DOM then form's button default behaviour that it will redireact to that file which we gave in action attribute.

//     // for to get reed from this behavior
//     e.preventDefault();
//     // any default behavior if we want to by pass then we can use this
// }


// function funct2(e) {
//     console.log("thanks double click is working", e)
//     e.preventDefault();
// }



// followings are some examples of events
/*
mouseenter
mouseleave
mousemove
mouseover
mouseout
*/



// color changing by moving mouse
document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})

// console.log(document.querySelector('.container'))

