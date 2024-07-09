// use .innerHTML to render a Buy! button inside the div container

const container = document.getElementById("container") 

container.innerHTML = "<button onclick='buy()'> Buy! </button>"

//when clicked , render a paragraph under the button (in the container)
// that says "Thank you for buying"

function buy(){
    container.innerHTML += "<p> Thank you for buying! </p>"
}



// let box = document.getElementById("box")

// box.addEventListener("click", function(){
//     console.log("I want to open the box!")
// })