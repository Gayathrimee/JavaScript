// ....................Arrays - ordered list of items......................

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

// console.log( featuredPosts[1])
// console.log(featuredPosts.length)


// Create an array that lists your i.e. experience, education, licenses, skills, or similar 
// The items of the should be strings

// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])

// let name="aps"
// let age=21
// let pizza=true

// let me=[
//     "name is Aps"
//     21
//     like Pizza
// ]

// Let me = ["Aps", 21, true]


// ..........pushing new messages to array................
// let cards = [7,4]
// cards.push(6)
// // console.log(cards)

// // Push the newMessage to the message array, and then log out the array

// let messages = [
//     "Hey, how,s it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great,thank you! How about you?",
//     "All good. Been woeking on my portfolio lately."
// ]
// let newMessage = " Same here!"
// messages.push(newMessage)
// console.log(messages)

// messages.pop()
// console.log(messages)


// messages.pop()
// console.log(messages)


// ..............counting in js....(FOR LOOP)

// count to ten!
// we need to specify...
// 1.where should we START counting?
// 2.where is the FINISH line?
// 3. what's the STEP SIZE we should use?

// START            FINISH     STEP SIZE(increment)

// for (let count = 0;  count < 21;  count += 1){

//     console.log(count)
// }
// was kinda intersting!................

// .....................LOOPS.................

// create a for loop that counts from 10 to 100 in steps of 10
// use console.log to log out the numbers

// for (let i = 0; i < 6; i += 1){
//     console.log(i)
// }

// for (let i = 10; i < 101; i += 10){
//     console.log(i)
// }

// let messages = [
//     "Hey, how's it going?",
//     "I'm great,thank you! How about you?",
//     "All good. Been woeking on my portfolio lately.",
//     "Same here!",
//     "Great to hear!!",
//     "emoji"
// ]

// // DRY - Don't repeat yourself
// // console.log(messages[0])
// // console.log(messages[2])
// // console.log(messages[1])
// // console.log(messages[3])

// for ( let i = 0; i < 5; i += 1){
//     console.log(messages[i])
// }

// ................fist Array-based for loop.................

// create a for loop that logs out all the cards in the array
// use cards.length to specify how long the loop should run

// let cards = [7,3,9]
// for (i = 0; i < cards.length; i ++ ){
//     console.log(cards[i])
// }
// cool!..................


// ....for loops, arrays and dom.....

// render the sentence in the greetingEl paragraph using a for loop and text.Content

// let sentence = ["Hello","my","name", "is","per"]
// let greetingEl = document.getElementById("greeting-el")

// for (i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
// }



// ............returning values...............

// let player1Time = 102
// let player2Time = 107 

// function getFastestRaceTime(){
//     if (player1Time < player2Time){
//         return player1Time 
//     }
//     else if (player2Time < player1Time){
//         return player2Time 
//     }
//     else {
//         return player1Time
//     }
// }
// // let getFastestRace = getFastestRaceTime()
// // console.log(fastestRace)


// // write a fn that returns the total race time
// // call/invoke the fn and store the returned value in a new variable
// // finally log the variable out

// function getTotalRaceTime(){
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()
// console.log(totalTime)


// .....................math.random...................

// let randomNumber = Math.random()
// console.log(randomNumber)

// what does Math.random() do?
// ans: it generate a random number between 0 and 1

// .....................math.random *6...................

// let randomNumber = Math.random() * 6
// console.log(randomNumber)

// in which range will our randomNumber be now?
// from:0
// to:5.9999999999


// ..........flooring the number with math.rando()........

// let randomNumber = Mar=th.random() * 6
//  let flooredNumber = Math.floor(13.45632)
// console.log(flooredNumber)

// what does math.floor()do to positive number?
// ans: it removes the decimals


// let randomNumber = Math.floor( Math.random() * 6)
// console.log(randomNumber)

// // write down all the possible values randomNumber can hold now!
// // 0,1,2,3,4,5



// ..............completing our dice fn.........

// try to modify the expression so that we get a range from 1 to 6 instead of 0 to 5

// let randomNumber = Math.floor( Math.random() * 6) + 1
// console.log(randomNumber)

// create a fn, rollDice(), that returns a random number between 1 and 6

// function rollDice(){
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }


// console.log(rollDice())

// ..........The Logical AND Operator.........

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true){
//     if (givesCertificate === true){
//         generateCertificate()
//     }
// }(better-way  --down)

// if (hasCompletedCourse === true && givesCertificate == true){
//     generateCertificate()
// }

// function generateCertificate(){
//     console.log("Generating certificate....")
// }


// ..............writing the first logical operator.........

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// //Create an if statement that checks that both variables are false
// //if so, run the showsolution() function

// if  (hasSolvedChallenge === false && hasHintsLeft === false)
//     showsolution()

// function showsolution(){
//      console.log("Showing the solution........")
// }      (Yeeeeeeeee..........!!!!!!! you did it my dear :) )



// ..........The  logical OR Operator(||)............

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === false || givesCertificate === true){
//     generateCertificate()
// }
//  function generateCertificate(){
//     console.log("Generating certificate...")
//  }


// create 2 boolean variables, likesDocumentaries and likeStartup
// Use an OR statement (||) to call recommendMovie () if either or those variables are true


// let likesDocumentaries =  false
// let likeStartup = false
// if ( likesDocumentaries === true || likeStartup === false){
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("Hey, check out this new film we think you will like!")
// }

// .....................Intro to Objects..........

// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//     title : "learn css in grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level:2,
//     isFree:true,
//     tags:["html","css"]
// }
// console.log(course.tags)


//..........create your first object.......

//Create an object that represents an airbnb castle listing.
//It should contain at least one boolean, one string, one number, and one array 
// Log out at least two of the keys using the dot notation

// let castle = {
//     title : "airbnb castle",
//     rooms : 16,
//     isFree : false,
//     tags : ["bathroom","kitchen"]
// }

// console.log(castle.title)
// console.log(castle.rooms)





// 
// 
// gbbgdfdgdfsffgfsgfgfgfgfgfgff
// 