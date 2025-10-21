let homeScore = 0;
let guestScore = 0;


function homeScoreCard1(){
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore;
}

function homeScoreCard2(){
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore;
}

function homeScoreCard3(){
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore;
}

function guestScoreCard1(){
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore;
}

function guestScoreCard2(){
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore;
}

function guestScoreCard3(){
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore;
}