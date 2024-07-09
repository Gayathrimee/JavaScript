//......practice time.........


//1. object and functions....

// create a person object that contains three keys: name, age, and country.
// use yourself as an example to set the values for name, age, and country.
// create a fn , logData(), that uses the person object to create a string in the following format:
// "Per is 35 years old and lives in Norway"
//call the logData() fn to verify that it works

//:
// let person = {
//     name: "Me",
//     age: 21,
//     country: "INDIA"
// }

// function logData(){
//     console.log(person.name + " is " + person.age + " years old lives in " + person.country)
// }
// logData()


//2. if else....

// let age = 15
// less than 6 years old  -> free
// 6 to 17 years old      -> child discount
// 18 to 26 years old     -> student discount
// 27 to 66 years old     -> full price
// over 66 years old      -> senior citizen discount

// create a conditional statement (if / else/ else if) that logs out the discount
// the passenger will get based upon the value of the age variable

// let age = 67

// if (age< 6){
//     console.log("free")
// }
// else if ( age <= 17){
//     console.log(" child discount")
// }
// else if( age <= 26){
//     console.log("student discount")
// }
// else if ( age <= 66){
//     console.log("full price")
// }
// else{
//     console.log("senior citizen discount")
// }


// 3. Loops and Arrays

/* use a for loop to log the following to the console:

The 5 largest countries in the world :
-China
-India
-United States
- Indonesia
- Pakistan
*/

// let largeCountries = ["china", "India", "USA", "Indonesia", "Pakistan"]

// for (let i = 0; i < largeCountries.length; i++){
//     console.log("- " + largeCountries[i])
// }


// 4. push, pop, unshift, shift challenge

// let largeCountries = ["Tuvalu, "India", "USA", " Indonesia ", "Monaco"]
// need to fixup the largeCountroes array so that
// China and Pakistan added back into their respective places
//use push() and pop() and their counterparts unshift() and shift()
//....![pop remove an item from the array and push add an item into the array]!.....

// let largeCountries = ["Tuvalu", "India", "USA", " Indonesia ", "Monaco"]

// //a) replacing monaco with pak
// largeCountries.pop()
// largeCountries.push("pakistan")
// //b)replacing tuvalu with china
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)


//5. Logical Operators

//let dayOfMonth = 31
//let weekyday = "Friday"

// if it is friday the 13th, log out this spooky face : omg!
//use the logical "AND Operator" -> &&

// let dayOfMonth = 31
// let weekyday = "Friday"

// if (  dayOfMonth === 31 && weekyday === "Friday" ){
//     console.log("OMG!")
// }


// 6. Rock Paper Scissspor

// let hands = ["rock", "paper", "scissor"]
//create a fn that returns a random item from the array

// let hands = ["rock", "paper", "scissor"]

// function getHand(){
//     // let randomIndex = Math.random() // 0 - 2.99999
//     let randomIndex = Math.floor( Math.random() *3) // 0 - 2
//     return hands[randomIndex]
// }

// console.log(getHand())


// 7.  sorting fruits

// let fruit = ["apple","orange","apple","apple", "orange"]

// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// //create a fn that  puts the apples onto the appleShelf and ornages to orangeShelf
// //Use a for loop, a conditional statement , and the textContent property.

// function sortFruit(){
//     for (let i = 0; i <fruit.length; i++){
//         if (fruit[i]=== "apple"){
//             appleShelf.textContent += "apple "
//         }
//         else if (fruit[i] === "orange"){
//             orangeShelf.textContent += "orange "
//         }
//     }
// } 
// sortFruit()




//
//
//                 
//