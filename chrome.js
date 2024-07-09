// ........Section: Building a chrome extension.....

//a) Log out "Button clicked!" when the user clicks the 'save inuput' button


// function saveIn(){
//     console.log("button clicked")
// }


//b)..........Refactor to addEventListener.......

// function saveIn(){
//     console.log("button clicked from onclick attribute")
// }

// let inputBtn = document.getElementById("input-btn")
// inputBtn.addEventListener("click", function(){
//     console.log("Button clicked from addEventListener")
// })

//c) ..................refactoring........

// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click",function(){
//     console.log("Button clicked!")
// })
// // function saveIn(){
// //     console.log("Button clicked!")
// // }

//d) .........create myLeads array & inputEl...........

// let inputBtn = document.getElementById("input-btn")

//  inputBtn.addEventListener("click",function(){
//         console.log("Button clicked!")
// })

// // create two variables:
// //myLeads  -> should be assigned to an empty array
// //inputEl  -> should be assigned to text input file

// let myLeads = []
// let inputEl = document.getElementById("input-el")

// e) const is used instead of let.... their main difference is that const cannot be reassigned.
// whatever name you give to const remains constant.... cannot be reassigned...


//f) ..........using let and const.........

// const playerName = "Per"
// let credits = 45

// credits = credits - 10

//if possible, use const. if not, use let. 

//?

//The customer wants to order some stuff. Here are the details:

// const basePrice = 520
// let discount = 120
// const shippingCost = 12
// let shippingTime = "5-12 days"

// //whops! Turns out the shipping will be a bit more complex

// shippingCost = 15
// shippingTime = "7-14 days"

// // calculating the full price
// const fullPrice = basePrice - discount + shippingCost

// // FInallly, notifying the customer
// console.log("Total cost:" + fullPrice + ". It will arrive in" + shippingTime)


//..............push to myLeads array.............

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// // push the value "www.awsomelead.com" to myArray when thr input button is clicked

// inputBtn.addEventListener("click", function(){
//     myLeads.push("www.awesomelead.com")
//     console.log(myLeads)
// })

//..........push the value from the input field..............

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function(){

//     // push the value from the inputEl into the myLeads array
//     // instead of the hard-coded www.awes.... use from google.

//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })


//............use a for loop to log out leads.........

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// //  log out the items in the myLeads array using a for Loop

// for (let i = 0; i < myLeads.length; i++){
//     console.log(myLeads[i])
// }

//...........create an unordered list...........

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// console.log(ulEl)

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// for (let i = 0; i < myLeads.length; i++){
//     console.log(myLeads[i])
// }

//...........render the leads in ul...........

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// //render the leads in the ul uding ulEl.textContent

// for (let i = 0; i < myLeads.length; i++){
//     ulEl.textcontent += myLeads[i] + ""
// }

//..........rendering li elements........

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("Input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })


// for (let i = 0; i < myLeads.length; i++){
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }

//  ........... createElemenet() & append() : instead of innerHTML......

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("Input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })


// for (let i = 0; i < myLeads.length; i++){
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"  // : (is the easier way)

//     // create element
//     // set text content
//     // append to ul

//     // const li = document.createElement("li")
//     // li.textContent = myLeads[i]
//     // ulEl.append(li)
// }

// ............20. improving perfomance of our app..........

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("Input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// //1. create a variable, listItems, to hold all the HTML for the list items
// // Assign it to an empty string to begin with

// let listItems = " "

// for (let i = 0; i < myLeads.length; i++){
//     //2. add the item to the listItems variable instead of the ulEl.innerHTML

//     listItems += "<li>" + myLeads[i] + "</li>" 
// }

// //3. Render the listItems inside the unordered list using ulEl.innerHTML

// ulEl.innerHTML = listItems // (the ul thing is now outside the for loop)



// ..........21. create the render function...........

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     //2. call the renderLeads() function
//     renderLeads()
// })

// // 1. wrap the code below in a renderLeads() fn

// function renderLeads(){
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++){
//         listItems += "<li>" + myLeads[i] + "</li>" 
//     }
//     ulEl.innerHTML = listItems
// }


// ...............22. clear the input field...........

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     inputEl.value = " "
//     // clear out the input field
//     renderLeads()
// })


// function renderLeads(){
//     let listItems = ""
// for (let i = 0; i < myLeads.length; i++){
//     listItems += "<li>" + myLeads[i] + "</li>" 
// }
// ulEl.innerHTML = listItems
// }

//..........add the <a> tag.............


// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     inputEl.value = " "
//     renderLeads()
// })

// function renderLeads(){
//     let listItems = ""
// for (let i = 0; i < myLeads.length; i++){

//     listItems += "<li><a target = '_blank' href=' "+ myLeads[i] +" '>" + myLeads[i] + "</a></li>" 
//     console.log(listItems)
// }
// ulEl.innerHTML = listItems
// }


// ........... template strings..................

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value)
//     inputEl.value = " "
//     renderLeads()
// })

// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {

//         // listItems += "<li><a target = '_blank' href=' "+ myLeads[i] +" '>" + myLeads[i] + "</a></li>" 

//         // ( OR )

//         listItems += `
//             <li>
//             <a target = '_blank' href="${myLeads[i]}">
//                 ${myLeads[i]}
//             </a>
//                     </li>
//             `
            
//     }
//     ulEl.innerHTML = listItems
// }

// .......Refactor app to use template string..........

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value)
//     inputEl.value = " "
//     renderLeads()
// })

// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {

//         // listItems += "<li><a target = '_blank' href=' "+ myLeads[i] +" '>" + myLeads[i] + "</a></li>" 

//         // ( OR )

//         listItems += `
//             <li>
//             <a target = '_blank' href='${myLeads[i]}'>
//                 ${myLeads[i]}
//             </a>
//                     </li>
//             `
            
//     }
//     ulEl.innerHTML = listItems
// }

// ...............style the list...........

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = " "
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {

        // listItems += "<li><a target = '_blank' href=' "+ myLeads[i] +" '>" + myLeads[i] + "</a></li>" 

        // ( OR )

        listItems += `
            <li>
            <a target = '_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
                    </li>
            `
            
    }
    ulEl.innerHTML = listItems
}

//    
//
//
// 
//