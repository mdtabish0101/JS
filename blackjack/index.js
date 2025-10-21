

let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = 0;
let cardsEL = document.getElementById("cardsEL")
let messageEl = document.getElementById("messageEl")
let sumEL = document.getElementById("sumEL")
let cards = [];
let player = {
    name: "Md Tabish",
    chips: 123
}
let playerEl = document.getElementById("playerEl")

function drawCard() {
    let card = (Math.floor(Math.random() * 13) + 1)
    if(card === 1){
        return 11;
    } else if(card > 10){
        return 10;
    } else {
        return card;
    }
}

let revealIntervalId = null;

function render() {

    if (revealIntervalId !== null) {
        clearInterval(revealIntervalId);
        revealIntervalId = null;
    }

    cardsEL.textContent = "";

    let i = 0;
    revealIntervalId = setInterval(() => {
        cardsEL.textContent += (i === 0 ? "" : " ") + cards[i];
        i++;
        if (i >= cards.length) {
            clearInterval(revealIntervalId);
            revealIntervalId = null;
        }
    }, 1000);

    setTimeout(() => {
        sumEL.textContent = sum;
    }, cards.length * 1000);

    if (sum <= 20) {
        message = "Do you want to draw a card?";
    } else if (sum === 21) {
        message = "You've got a BlackJack!! You WON !!!";
        hasBlackJack = true;
        isAlive = false
    } else {
        message = "You lost! Click 'Start Game' to try again.";
        hasBlackJack = false;
        isAlive = false;
    }

    setTimeout(() => {
        messageEl.textContent = message;
    }, cards.length * 1000);

}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    cards = [];
    playerEl.textContent = player.name + ": $" + player.chips; 
    let firstCard = drawCard();
    let secondCard = drawCard();

    sum = firstCard + secondCard;
    cards.push(firstCard, secondCard);
    render();
}

function newCard() {
    if (!isAlive || hasBlackJack) {
        message = "Start a new Game";
        messageEl.textContent = message;
        return;
    }

    const card = drawCard();
    cards.push(card);
    sum += card;
    render();

}
