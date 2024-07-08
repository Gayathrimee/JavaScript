// .............assign values in the startGame function.......

// let firstCard = getRandomCard()
// let secondCard= getRandomCard()
let cards = []
let sum =  0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//(or) let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)

function getRandomCard(){

   let randomNumer = Math.floor (Math.random() * 13) + 1   // 1-13
   if (randomNumer > 10){
    return 10
   }
   else if (randomNumer === 1){
    return 11
   }
   else {
    return randomNumer
   }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard 
    //generate 2 random numbers
    // re-assign the cards abd sum variables so that  the game can start
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
    // console.log("Drawing  a new card from the Deck")
    let card = getRandomCard()
    sum +=  card
    // push the card to the cards array
    cards.push(card)
    console.log(cards)
    startGame()
}


// 
// 