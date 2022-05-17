console.log("this is class 35 Ajax :- Aynchronous Javascript XML ")

let fetchbtn = document.getElementById("fetchBtn")
fetchbtn.addEventListener('click', fetchFnc);

function fetchFnc() {

    console.log('you clicked the fetch button.')
    // Intantiate xhr object
    let xhr = new XMLHttpRequest();

    // Open the object

    xhr.open('Get', 'https://jsonplaceholder.typicode.com/todos/1', true)
    // (method, address, async or not) 


    // Post method
    // xhr.open('Post', 'http://dummy.restapiexample.com/api/v1/create')
    // xhr.getResponseHeader('content-type', 'application/json')

    // what to do on progress (optional)
    xhr.onprogress = function () {
        console.log("On Process")
        // if in progress time you wants to use loaders or spiners
        //     let position = document.getElementById('spinnerPosition')
        //     position.innerHTML += `<div id="spinner" style="text-align:center">
        //     <img src="./loading.gif" alt="">
        //   </div>`
    }

    xhr.onload = function () {
        // let spinner = document.getElementById('spinner')
        // spinner.innerHTML = ''
        if (this.status === 200) {
            console.log(this.responseText)
        } else {
            console.err("this is Error time.")
        }
    }

    // .onreadystatechange ->   will call after every changes.
    // .readystate will give us state value and these values will tell that in what state you are
    /*
        0	UNSENT,     1	OPENED,     2	HEADERS_RECEIVED,       3	LOADING,        4	DONE
    */
    xhr.onreadystatechange = function () {
        console.log(`ready state is   ${xhr.readyState}`)
    }


    params = `{"name" = "ajax test", "salary" ="600000", "age":21 }`

    // xhr.send(params)
    xhr.send()
    console.log('we are done.')
}