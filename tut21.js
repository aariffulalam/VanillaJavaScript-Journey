console.log("this is tutorial 21 and Exercise 2");


/*
Exercise :-
you have to  create a div and inject it into the page which  contains a heading.
whenever someone clicks on the div, it should be  converted into an editable item. whenever  user ckicks away (blur). save the note into the local storage.
*/


let container = document.querySelector(".container");
console.log(container)

let div = document.createElement("div");
div.className = "exercie2";
div.id = "exercise2";
div.innerHTML = "this is heading of exercse2";
div.addEventListener("mouseenter", function () {
    let inp = prompt()
    localStorage.setItem("input", inp)
    div.replaceWith(inp)
})
container.appendChild(div)
