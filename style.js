// document.getElementById("count-el").innerText = 5  (change the count in h2 to 5)


// let firstBatch=5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// let myAge=21
// let humanDogRatio=7
// let myDogAge= myAge * humanDogRatio
// console.log(myDogAge)

// let count = 5
// count=3
// count=1
// console.log(count)

// let variable=2
// // let bonuspoint=5
// variable=bonuspoint+100
// console.log(count)

// let bonuspoints=50
// console.log(bonuspoints)

// bonuspoints=bonuspoints + 50
// console.log(bonuspoints)

// bonuspoints= bonuspoints-75
// console.log(bonuspoints)

// bonuspoints= bonuspoints + 45
// console.log(bonuspoints)

// function increment(){
//     console.log("The button was clicked")
// }

// increment()

// setting up the race

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// function myLogger(){
//     console.log(42)
// }
//  myLogger()

//  let lap1 = 34
//  let lap2=33
//  let lap3=36

//  lap=lap1+lap2+lap3
//  console.log(lap)

// function logLapTime(){
//     let totalTime= lap1 +lap2+lap3
//     console.log(totalTime)
// }
// logLapTime()

// let lapscompleted = 0

// function incrementlaps(){
//     lapscompleted = lapscompleted + 1
// }
// incrementlaps()
// incrementlaps()
// incrementlaps()
// incrementlaps()
// console.log(lapscompleted)

// let countEl = document.getElementById("count-el")
// let count=0

// function increment(){
//     count=count+1
//     console.log(count)

// }

// increment()

// let countEl=document.getElementById("count-el")

// console.log(countEl)

// let count=0

// function increment(){
//     count=count+1
//     countEl.innnerText=count
//     // console.log(count)
// }



// let useranme= "per"

// // console.log(message + "," username + "!")

// let message= "you have three new notification"

// let messageToUser = message + "," + username + "!"

// console.log(messageToUser)

// let name= "Aps"
// let greetings = "Hi, my name is "

// let myGreetings= greetings + name
// // console.log(myGreetings)

// let points = 4
// let bonusPoints= "10"
// let totalPoints= points + bonusPoints

// console.log(totalPoints)

// console.log(4+5)
// console.log("2"+"4")
// console.log("5"+1)
// console.log(100+"100")

// let welcomeEl = document.getElementById("welcome-el")
// let name = "me"
// let greetings = "welcome back"
// welcomeEl.innerText = greeting + name 

// welcomeEl.innerText = welcomeEl.innerText

// ..........counting

// let countEl = document.getElementById("count-el")
// let count=0

// function increment(){
//     count  = count + 1
//     countEl.innerText = count
// }
// function save(){
//     console.log(count)
// }

// 1. Grab the save-el paragraph and store it in a variable called saveEl

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment(){
    count += 1
    countEl.innerText = count
}
// increment()

function save(){

let countStr = count + " - "

//  2. Create a variable that contains both the count and dash seperator, i.e. "12 -"
//  3. Render the varible in the saveEl using innerText

saveEl.textContent += countStr
countEl.textContent = 0
count = 0
//  NB: Make sure to not delete the existing content of the paragraph   
console.log(count)
}

// save()

// 





