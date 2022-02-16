let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isALive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    cardsEl.textContent = "Cards:" + firstCard + " " + secondCard
    sumEl.textContent = "sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 20) {
        message = "Wahoo! you've got blackjack!   "
        hasBlackJack = true
    } else {
        message = "you're out of the game!  "
        islive = false
    }
    messageEl.textContent = message
}
document.getElementById("paragraphy").textContent = "Hello World"
var age = prompt("How old are you");
console.log(age);
var Canvas = document.createElement('canvas');
Canvas.width = 500;
Canvas.height = 250;