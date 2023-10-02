// // 1
// // 1.1 Create a variable, myAge, and set its value to your age
// const myAge = 30
// // 1.2 Log the myAge variable to the console

// // 2
// //2.1 Create 2 variable, myAge and humanDogRation
// //2.2 Multiply the 2 together and store the result in myDogAge
// //2.3 Log myDogAge to the console

// const humanDogRatio = 7
// let myDogAge = humanDogRatio * myAge;
// console.log(myDogAge)

// // 3
// //3.1 Create a variable, bonusPoint. Initialize ir as 50. Increase it to 100
// //3.2 Decrease it down to 25, and the finally increase it to 70
// //3.3 Console.log the value after each step
// let bonusPoint = 50
// console.log(bonusPoint)
// bonusPoint = bonusPoint * 2
// console.log(bonusPoint)
// bonusPoint = bonusPoint/4
// console.log(bonusPoint)
// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)



// // 4
// //4.1 Create a function (you decide the name) that logs out the number 42 to the console
// //4.2 Call/ invoke the function
// function myDecide() {
//     console.log(42)
// }
// myDecide()


// // 5
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// //5.1 Create a function that logs out the sum of all the lap times
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }
// logLapTime()



// // 6
// let lapsCompleted = 0
// // 6.1 Create a function that increments the lapsCompleted variable with one
// // 6.2 Run it three times
// // it is my code
// // function lapsCompleted() {
// //     let lapsCompletedIncrement = 3 * lapsCompleted
// //     console.log(lapsCompletedIncrement)
// // }

// // console.log(lapsCompleted)
// // 6 the teacher's code
// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapsCompleted)



// // 8, write your first string variable
// // 8.1 Create a variable, message, that stores the string: "you have tree new notification"
// let userName = "Jon"
// let varMessage = "You have tree new notification"
// console.log(varMessage+", "+ userName + "!" )
// // 8.3 Create a variable, messageToUser, that contains the message we have logged

// let messageToUser = varMessage+", "+ userName + "!" 
// console.log(messageToUser)


// // 9
// // 9.1 Create 2 variable, name and greeting. The name variable should store your  name
// // 9.2 and the greeting should store e.g. "Hi, my name is"
// // let name = "Jon"
// // let greeting = "Hi, my name is "
// // 9.3 Create a third variable, myGreeting, that contatenates the 2 strings
// // let myGreeting = greeting + name
// // // 9.4 Log myGreeting to the console
// // console.log(myGreeting)


// console.log(4 + 5) // 9
// console.log("2" + "4") // 6 my point is wrong , right is 24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100


// // 10 
// // 10.1 Grab the welcome-el paragraph and store it in a variable called welcomEl
// let welcomeEl = document.getElementById("welcome-el")


// // 10.2 Create two variable (name and greeting) that contains your name
// // and the greeting we want to render on the page
// let name = "Harrison Ford "
// let greeting = "Welcome back " 
// // 10.3 Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name

// // 11
// // 11.1 Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1
// // My code: it is kind of tricky
// let emoji = "👋"
// welcomeEl.innerText = greeting + name + emoji 
// // teacher's code
// welcomeEl.innerText += "👋"
// The project here
//document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)
// initialize the count as 0 DONE
// Listen for clicks on the increment button DONE
//increment the count variable when the button is clicked DONE



//change the count-el in the HTML to reflect the new count
// Previous entries:
// 1. Grab the save-el paragraph and store it in a variable called saveEl

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // grab the count-el element, store it in a countEl variable
let count = 0

console.log(saveEl)

function increment() {
    count += 1 //count = count + 1
    countEl.innerText = count // Set countEl's innerText to the count
}

// Create a function, save, which logs out the count when it's called


function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e "1"
    let countStr = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.innerText = 0
    count = 0
}