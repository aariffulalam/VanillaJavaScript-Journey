// const { response } = require("express");

// const { response } = require("express");

console.log('this is fetch tutorial')

const btn1 = document.getElementById("btn1");

const btn2 = document.getElementById("btn2");


btn1.addEventListener('click', getData);
btn2.addEventListener('click', postData);


function getData() {
    const url = "https://dummyjson.com/products/1"
    fetch(url).then((response) => {
        // console.log(response)
        return response.json()
    }).then((data) => {
        console.log(data)
    })
}

function postData() {
    const data = {
        "name": "ram",
        "age": 25,
        "id": 1
    }
    const url = "https://dummyjson.com/products/add"
    const params = {
        method: "post",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(url, params).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
    })
}




// ><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><

/*
To use a Fetch API, just pass the URL, the path to the resource we want to fetch, to fetch() method. Here is the syntax:
*/
fetch('/js/users.json')
    .then(response => {
        // handle response data
    })
    .catch(err => {
        // handle errors
    });

/*
Pass the path of the resource that we want to retrieve as a parameter to fetch(). We cannot block the user interface by waiting until the request finishes. That is why to fetch() returns a Promise, an object which represents a future result. We are using the then method to wait for the server's response. The catch() method is optional. Its purpose is to intercepts errors if the request fails to complete due to network failure or any other reason.

Now let us see how we can extract the JSON from that response once the request completes:
*/
fetch('URL here')
    .then(res => res.json())
    .then(json => console.log(json));
/*
We start the request by calling fetch(). When the promise is fulfilled, it returns a response object, which exposes a json method. Within the first then(), we can call this json method to return the response body as JSON.
*/



// GET Request:-
fetch('https://api.github.com/orgs/nodejs')
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))


// POST Request:-
let data = {
    first_name: 'John',
    last_name: 'Adams',
    job_title: 'Software Engineer'
};
const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
}
fetch('https://reqres.in/api/users', options)
    .then(res => res.json())
    .then(res => console.log(res));