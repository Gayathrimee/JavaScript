//................... Chrome Extension........

// ....template strings / literals.........

// const recipient = "James"

// // refactor the email string to use template strings

// const email = " Hey " + recipient + "! How is it going? Cheers Per"
// console.log(email)

//  this can be rewritten as (after refactoring; using backtick):

// const recipient = "James"
 
// const email = `Hey ${recipient}! How is it going? Cheers Per`

// console.log(email)

// .....making template strings more dynamic...........

// const recipient = "James"
// //create a bew variable, sender, and set its value to your  name
// const sender = "Adam"

// // use your sender variable instead of "per"
 
// // const email = `Hey ${recipient}! How is it going? Cheers Per`
// const email = `Hey ${recipient}! How is it going? Cheers ${sender}`


// console.log(email)


//.........template strings on multiple lines............

const recipient = "James"
const sender = "Adam"

//  break the email string into multiple lines

 const email = `

 Hey ${recipient}! 

 How is it going? 

 Cheers ${sender} `


console.log(email)







// 
// 
// 
// 