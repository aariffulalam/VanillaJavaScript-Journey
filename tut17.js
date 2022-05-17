console.log("this is tutorial 17")




// Events

// if you clicking , hovering with your mouse these type of things called events.

// JavaScript give us capability to capture events.

// after completing these events we can run certain codes for making webpage interactive.

document.getElementById("heading").addEventListener("click", function (e) {
    console.log("you have clicked the heading.")
    // this will print in console of website 

    // location.href = "https://www.github.com/aariffulalam/"
    // from function we can also redireact to other websites

    // e -> EventObject
    // this will  give us Event's all properties in object
    console.log(e);

    let variable = e.target;     // target is property  of e object
    // this target gives us an element 
    console.log(variable);

    variable = e.target.className
    console.log(variable);

    variable = e.target.classList    //in this you cant use foreach 
    console.log(variable);

    variable = Array.from(e.target.classList);
    console.log(variable);
    // now in this we can use foreach() method.

    variable = e.offsetX;
    console.log(variable)
    variable = e.offsetY;
    console.log(variable)

    // these both will give us the position that where we clicked in x-axis or y-axis. these mesaure the distace from your event where you clicked 

    variable = e.clientX;
    console.log(variable)

    variable = e.clientY;
    console.log(variable)

    // // these will give the distance from whole webpage.
})