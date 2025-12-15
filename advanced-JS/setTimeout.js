function logAnswer(answer, points){
    console.log(`The answer is ${answer} of course! If you go that right, give yourself ${points} points`)
}


console.log("What is the capital of Peru??")

setTimeout(logAnswer, 3000, "Lima", 10)