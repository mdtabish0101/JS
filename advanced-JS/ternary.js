const playerGuess = 6;
const correctAnswer = 6;

const message = playerGuess === correctAnswer ? "Exactly right"
    : playerGuess < correctAnswer ? "Too low!" : "Too high!"
console.log(message)