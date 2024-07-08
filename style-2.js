//(fav-one)

// let countEl = document.getElementById("count-el")
// let count=0

// function increment (){
//     count = count + 1
//     countEl.innerText = count
// }

// function save(){
//     console.log(count)
// }

// ...............Assignments...........

// 1. CReate 2 variables firstname and lastname the createfullName combining both 2
// let firstName = "me &"
// let lastName = " him"

// let fullName = firstName + lastName

// console.log(fullName)



// 2. create 2 variables name=linda and greeting=hi there then create a fn "Hi there, Linda!"

// let name = "Linda"
// let greeting = " Hi there"

// function greetLinda(){
//     console.log(greeting + ", " + name + "! ")
// }
// greetLinda()



// 3.
// let myPoints = 3

// // create two functions, add3points() and remove1point(), and have them
// // add/remove points to/from the myPoints variable

// function add3points(){

//     myPoints += 3
// }


// function remove1point(){

//     myPoints -= 1
// }

// add3points()
// add3points()
// add3points()
// remove1point()
// remove1point()

// // Call the functions to that the line below logs out 10

// console.log(myPoints)


// 4. Try to predict what each of the lines will log out
// console.log("2"+ 2) // "22"
// console.log(11+7) //"18"
// console.log(6 + "5") //"65"
// console.log("My points:" + 5 + 9) // "My points:59"
// console.log(2+2) // "4"
// console.log("11" + "14") // "1114"


// 5. created a purchasing button,
// When the user clicks the purchase button, render out
// "Something went wrong , Please try again " in the paragraph
// that has the id="error"  (html 1-13)

// :
// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)


// function purchase(){
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, Please try again"
// }

// // ...here when the button was clicked , there will shows that something... try again


// //6.   Calculator! (from 94 - 127)
// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// // // Create four functions : add(),subtract(), divide(), multiply()
// // // Call the correct function when the user clicks on one of the buttons
// // // Perform the given calculation using num1 and num2
// // // Render the result of the calculation in the paragraph with id="sum-el"

// // // eg: if the user clicks on the "Plus" button, you should render
// // // "Sum:10" (since 8+2=10) inside the paragraph with id = "sum-el"

// let sumEl = document.getElementById("sum-el")

// function add(){
//     // console.log("add clocked")
//     // sumEl.textContent = "Sum:" + num1 + num2
//     let result = num1 + num2
//     sumEl.textContent = "Ans:" +result
// }
// function subtract(){
//     let result = num1 - num2
//     sumEl.textContent = "Ans:" +result
// }
// function multiply(){
//     let result = num1 * num2
//     sumEl.textContent = "Ans:" +result
// }
// function divide(){
//     let result = num1 / num2
//     sumEl.textContent = "Ans:" +result
// }


    // .............building BlackJack.............

//  1. Create two variables, firstCard and secondCard. 
//  Set their values to a random number between 2-11

//  2. Create a variable, sum, and set it to the sum of the two cards

// let firstCard = 10
// let secondCard = 7
// let sum = firstCard + secondCard +6

// // console.log(sum)

// if (sum<21){
//     console.log("Do you want to draw a new card?")
// }
// else if (sum === 21){
//     console.log("Wohoo! You've got Blackjack!")
// }
// else{
//     console.log("You're out of the game!")
// }


// else if (sum > 21){ (instead of if sum >21 can use just else cuz there is
//  no other options for it go through when the )
//     console.log("You're out of the game!")
// }


// 7.
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
// if less than 21 -> "You can not enter the club!"
// else -> "Welcome"

//ans:  let age=21
 
// if (age<21){
//     console.log("You can not enter the club!")
// }
// else if(age=21){
//     console.log("Actually, You have to bring your boyfriend to enter!")
// }
// else{
//     console.log("Welcome!")
// }


// 8. Check if the person is eligible for a birthday card from King!(100)
// if less than 100     -> "Not eligible"
// else if exactly 100   -> "Here is your birthday card from the King!"
// else                  -> "Not elegible, you have already gotten one"

// let age=100

// if (age<100){
//     console.log("Sorry, Not eligible")
// }

// else if (age===100){
//     console.log("Here is your birthday card from the King!")
// }
// else{
//     console.log("Not elegible, you have already gotten one")
// }


// 9. write the conditional accorfing to these rules:
// If less than or equal to 20 -> "Do you want to draw a new card?"
// else if exactly 21 -> " Wohooo! You've got Blackjack!"
// else -> " You're out of the game!"

// let firstCard=10
// let secondCard= 11
// let sum = firstCard + secondCard +4
// let hasBlackJack = false

// // 1.create a variable called isAlive and assign it to true

// let isAlive = true
// // 2. Flip its value to false in the appropriate code block

// if (sum <= 20){
//     console.log("Do you want to draw a new card?")
// }
// else if(sum===21){
//     console.log("Wohooo! You've got a Blackjack!")
//     hasBlackJack=true
// }
// else{
//     console.log("You're out of the game!")
//     isAlive= false
// }

// console.log(isAlive)

// console.log(4===3) //false
// console.log(5>2) //true
// console.log(12>12)  //false
// console.log(3<0) //false
// console.log(3>=3)  //true
// console.log(11<=11) //true
// console.log( 3<=2) //false

// let firstCard=10
// let secondCard= 11
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true

// // 1.Declare a variable called message and assign its value to an empty string

// // 2. Reassign the message variable to the string we're logging out

// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }

// console.log(message)

// .....start-a-game.............

// let firstCard=10
// let secondCard= 11
// let sum = firstCard + secondCard +2
// let hasBlackJack = false
// let isAlive = true
// let message = ""

// // 2. Create a startGame() fn. Move the conditional
// // below (line 11-20) inside the body of the function.

// function startGame(){
// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// console.log(message)
// }

// ............display-the-message.........

// let firstCard=10
// let secondCard= 11
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""

// // 1.Store the message-el paragraph in a variable called messageEl

// let messageEl = document.getElementById("message-el")
// console.log(messageEl)

// function startGame(){
// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }

// //2. Display the message in the messageEl using messageEl
// messageEl.textContent = message
// // console.log(message)
// }

// ..................display-the-sum.....................

// let firstCard=10
// let secondCard= 12
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")

// // 2.Store the sum paragraph in a variable called sumEl
// // let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")

// function startGame(){
//     // 3. Render the sum on the page using this format -> "Sum:14"
//     sumEl.textContent = "Sum:" + sum

// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// }

// .............................display-cards.................

// let firstCard=10
// let secondCard= 5
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// //(or) let sumEl = document.querySelector("#sum-el")

// // 2.Store the  cards in a variable called cardsEl
// let cardsEl = document.getElementById("cards-el")

// function startGame(){
//     // 3. Render the cards on the page using this format -> "cards:10 4"
//     cardsEl.textContent="Cards: "+ firstCard + " " + secondCard
//     sumEl.textContent="Sum: " + sum
// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// }


// ..............new cards...................

// let firstCard=10
// let secondCard= 5
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// //(or) let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame(){
//     cardsEl.textContent="Cards: "+ firstCard + " " + secondCard
//     sumEl.textContent="Sum: " + sum
// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// messageEl.textContent = message
// }

// // 2. Create a new function newCard() that logs out "Drawing a new card from the Deck"

// function newCard(){
//     console.log("Drawing  a new card from the Deck")

// // 1.Create a card variable, and hard code its value to a number (2-11)
// let card = 6

// // 2. Add the new card to the sum variable
// sum +=  card

// // 3. Call startGame()
// startGame()

// }



// ...............using render-game...............

// let firstCard=10
// let secondCard= 5
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// //(or) let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// // Create a new function called startGame() that calls renderGame()
// function startGame(){
//     renderGame()
// }
// function renderGame(){
//     cardsEl.textContent="Cards: "+ firstCard + " " + secondCard
//     sumEl.textContent="Sum: " + sum
// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// messageEl.textContent = message
// }

// function newCard(){
//     console.log("Drawing  a new card from the Deck")
//     let card = 6
//     sum +=  card
//     startGame()

// }


// .........using Array..............

// let firstCard=10
// let secondCard= 5
// let cards = [firstCard, secondCard]  //array - ordered list of items
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// //(or) let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// // Create a new function called startGame() that calls renderGame()
// function startGame(){
//     renderGame()
// }
// function renderGame(){

//     // render out firstCard and secondCard

//     cardsEl.textContent="Cards: "+ cards[0] + " " + cards[1]
//     // render out ALL the cards we have

//     sumEl.textContent="Sum: " + sum
// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// messageEl.textContent = message
// }

// function newCard(){
//     console.log("Drawing  a new card from the Deck")
//     let card = 6
//     sum +=  card
//     startGame()

// }


// .......creating cards using arrays......

// let firstCard=10
// let secondCard= 5

// // 1.create a new array - cards - that contains firstcard and secondcard
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// //(or) let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame(){
//     renderGame()
// }
// function renderGame(){
// // 2.refer to the cards array when rendering out the cards
//     cardsEl.textContent="Cards: "+ cards[0] + " " + cards[1]
//     sumEl.textContent="Sum: " + sum

// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")(or)
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// messageEl.textContent = message
// }

// function newCard(){
//     console.log("Drawing  a new card from the Deck")
//     let card = 6
//     sum +=  card
//     startGame()

// }

// .............push a new card to array................

// let firstCard=10
// let secondCard= 5
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// //(or) let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame(){
//     renderGame()
// }
// function renderGame(){
//     cardsEl.textContent="Cards: "+ cards[0] + " " + cards[1]
//     sumEl.textContent="Sum: " + sum

// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")(or)
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// messageEl.textContent = message
// }

// function newCard(){
//     // console.log("Drawing  a new card from the Deck")
//     let card = 6
//     sum +=  card
//     // push the card to the cards array
//     cards.push(card)
//     console.log(cards)
//     startGame()

// }


// ..............use a loop to render cards.........


// let firstCard=10
// let secondCard= 5
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// //(or) let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame(){
//     renderGame()
// }
// function renderGame(){
//     cardsEl.textContent="Cards: "

//     // create a for loop that renders out all the cards instead of just two
// for ( let i = 0; i < cards.length; i ++){
//     cardsEl.textContent += cards[i] + " "
// }


//     sumEl.textContent="Sum: " + sum

// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")(or)
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// messageEl.textContent = message
// }

// function newCard(){
//     // console.log("Drawing  a new card from the Deck")
//     let card = 6
//     sum +=  card
//     // push the card to the cards array
//     cards.push(card)
//     console.log(cards)
//     startGame()

// }


// .........getRandomCard()................

// let firstCard = getRandomCard()
// let secondCard= getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// //(or) let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")


// // 1. create a fn, getRandomCard(), that always returns the number 5

// function getRandomCard(){
//     return 5
// }

// function startGame(){
//     renderGame()
// }
// function renderGame(){
//     cardsEl.textContent="Cards: "

//     // create a for loop that renders out all the cards instead of just two
// for ( let i = 0; i < cards.length; i ++){
//     cardsEl.textContent += cards[i] + " "
// }


//     sumEl.textContent="Sum: " + sum

// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")(or)
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// messageEl.textContent = message
// }

// function newCard(){
//     // console.log("Drawing  a new card from the Deck")
//     let card = getRandomCard()
//     sum +=  card
//     // push the card to the cards array
//     cards.push(card)
//     console.log(cards)
//     startGame()
// }


// ...........completing our dice fn...............


// let firstCard = getRandomCard()
// let secondCard= getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// //(or) let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")


// // make this  fn return a random number between 1 and 3
// function getRandomCard(){
// //    return Math.random() *13    //0.000-12.9999
// //    return Math.floor (Math.random() * 13)    // 0 - 12
//    return Math.floor (Math.random() * 13) + 1   // 1-13
// }
// console.log(randomNumber)

// function startGame(){
//     renderGame()
// }
// function renderGame(){
//     cardsEl.textContent="Cards: "

//     // create a for loop that renders out all the cards instead of just two
// for ( let i = 0; i < cards.length; i ++){
//     cardsEl.textContent += cards[i] + " "
// }


//     sumEl.textContent="Sum: " + sum

// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")(or)
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// messageEl.textContent = message
// }

// function newCard(){
//     // console.log("Drawing  a new card from the Deck")
//     let card = getRandomCard()
//     sum +=  card
//     // push the card to the cards array
//     cards.push(card)
//     console.log(cards)
//     startGame()
// }

// ............if and randomcard..................................................................

// let firstCard = getRandomCard()
// let secondCard= getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// //(or) let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")


// // make this  fn return a random number between 1 and 3
// function getRandomCard(){
//     // if 1 -> return 11
//     // if 11 - 13 -> return 10

//    let randomNumber = Math.floor (Math.random() * 13) + 1   // 1-13
//    if (randomNumber > 10){
//     return 10
//    }
//    else if (randomNumber === 1){
//     return 11
//    }
//    else {
//     return randomNumber
//    }
// }
// console.log(randomNumber)

// function startGame(){
//     renderGame()
// }
// function renderGame(){
//     cardsEl.textContent="Cards: "

//     // create a for loop that renders out all the cards instead of just two
// for ( let i = 0; i < cards.length; i ++){
//     cardsEl.textContent += cards[i] + " "
// }


//     sumEl.textContent="Sum: " + sum

// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")(or)
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// messageEl.textContent = message
// }

// function newCard(){
//     // console.log("Drawing  a new card from the Deck")
//     let card = getRandomCard()
//     sum +=  card
//     // push the card to the cards array
//     cards.push(card)
//     console.log(cards)
//     startGame()
// }

//......only trigger newCard() if you're allowed to,.......

// let firstCard = getRandomCard()
// let secondCard= getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard 
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// //(or) let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.getElementById("cards-el")


// // make this  fn return a random number between 1 and 3
// function getRandomCard(){
//     // if 1 -> return 11
//     // if 11 - 13 -> return 10

//    let randomNumber = Math.floor (Math.random() * 13) + 1   // 1-13
//    if (randomNumber > 10){
//     return 10
//    }
//    else if (randomNumber === 1){
//     return 11
//    }
//    else {
//     return randomNumber
//    }
// }
// console.log(randomNumber)

// function startGame(){
//     renderGame()
// }
// function renderGame(){
//     cardsEl.textContent="Cards: "

//     // create a for loop that renders out all the cards instead of just two
// for ( let i = 0; i < cards.length; i ++){
//     cardsEl.textContent += cards[i] + " "
// }


//     sumEl.textContent="Sum: " + sum

// if (sum <= 20){
//     // console.log("Do you want to draw a new card?")(or)
//     message = "Do you want to draw a new card?"
// }
// else if(sum===21){
//     // console.log("Wohooo! You've got a Blackjack!")
//     message = "Wohooo! You've got a Blackjack!"
//     hasBlackJack=true
// }
// else{
//     // console.log("You're out of the game!")
//     message = "You're out of the game!"
//     isAlive= false
// }
// messageEl.textContent = message
// }

// function newCard(){
//     //only allow the player to get a new card if she is alive and doesnot have a BlackJack

// if (isAlive === true && hasBlackJack === false){
//     let card = getRandomCard()
//     sum +=  card
//     cards.push(card)
//     // console.log(cards)
//     startGame()
// }
// }

// ..........................object sneak peek...................


//2.create the player object.Give it two keys , name,and chips,
let firstCard = getRandomCard()
let secondCard= getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//(or) let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name : "Me",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $ " + player.chips


// make this  fn return a random number between 1 and 3
function getRandomCard(){
    // if 1 -> return 11
    // if 11 - 13 -> return 10

   let randomNumber = Math.floor (Math.random() * 13) + 1   // 1-13
   if (randomNumber > 10){
    return 10
   }
   else if (randomNumber === 1){
    return 11
   }
   else {
    return randomNumber
   }
}
console.log(randomNumber)

function startGame(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent="Cards: "

    // create a for loop that renders out all the cards instead of just two
for ( let i = 0; i < cards.length; i ++){
    cardsEl.textContent += cards[i] + " "
}


    sumEl.textContent="Sum: " + sum

if (sum <= 20){
    // console.log("Do you want to draw a new card?")(or)
    message = "Do you want to draw a new card?"
}
else if(sum===21){
    // console.log("Wohooo! You've got a Blackjack!")
    message = "Wohooo! You've got a Blackjack!"
    hasBlackJack=true
}
else{
    // console.log("You're out of the game!")
    message = "You're out of the game!"
    isAlive= false
}
messageEl.textContent = message
}

function newCard(){
    //only allow the player to get a new card if she is alive and doesnot have a BlackJack

if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum +=  card
    cards.push(card)
    // console.log(cards)
    startGame()
}
}





//                                                                                                                                                                                                                                                                                                                                                                                                                            
//
