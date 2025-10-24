// let myself = ["Hello", "my", "name", "is", "Md Tabish", "I", "am", 22, "years", "old"]

// let greetingEl = document.getElementById("greetingEl");




// // using setInterval is better and more optimized way. 
// // Advantages:
// // Only one interval is running.
// // Easy to pause/resume if needed.
// // Cleaner and more memory-efficient.

// function clickGreeting() {
//     console.log("Before loop");
//     greetingEl.textContent = " ";
//     let i = 0;
//     let intervalId = setInterval(() => {
//         greetingEl.textContent += myself[i] + " ";
//         i++;
//         if (i >= myself.length) {
//             clearInterval(intervalId)
//         }
//     }, 900)
// }




// // This creates seprate intervals which is not efficient
// function clickGreet1() {
//     console.log("before loop")
//     greetingEl.textContent = "";
//     for (let i = 0; i < myself.length; i++) {
//         setTimeout(() => {
//             greetingEl.textContent += myself[i];
//         }, i * 1000)
//     }
//     console.log("after loop")
// }



// function clickGreet() {
//     console.log("before loop")
//     for (let i = 0; i < myself.length; i++) {
//         setTimeout(() => {
//             greetingEl.textContent = myself[i];
//         }, i * 1000)
//     }
//     console.log("after loop")
// }

// function rollDice(){
//     let random = Math.floor(Math.random() * 6) + 1;
//     return random

// }

// console.log(rollDice())




// let hasCompletedCourse = false;
// let givesCertificate = true;

// if(hasCompletedCourse && givesCertificate){
//     console.log("Generating Certificate....")
// } else{
//     console.log("Not Eligible")
// }



// let airBnB = {
//     title: "Live like a King in my Castle",
//     name: "Private room in Galway",
//     image: "link to image",
//     rating: 4.95,
//     tags: ["4 guests", "1 Bedroom", "2 Beds", "Private half-bath"],
//     reviews: 1268,
//     price: 190,
//     isFavorite: false,
//     isSuperhost: true
// }


// console.log(airBnB.title);
// console.log(airBnB.tags)


// let person = {
//     name: "Md Tabish",
//     age: 22,
//     country: "India"
// }

// function logData(){
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData();


// let age = 15;
// if(age < 6){
//     console.log("free")
// } else if(age < 18){
//     console.log("Child discount");
// } else if(age < 27){
//     console.log("Student discount")
// } else if(age < 67){
//     console.log("Full Price")
// } else{
//     console.log("Senior Cititzen")
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// console.log("The 5 largest countries in the world")
// for(let i = 0; i < largeCountries.length; i++){
//     console.log("-" + largeCountries[i])
// }


// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// largeCountries.pop();
// largeCountries.push("monaco");
// largeCountries.shift();
// largeCountries.unshift("Tuvalu");
// for(let i = 0; i < largeCountries.length; i++){
//     console.log("-" + largeCountries[i])
// }


// let dayOfMonth = 13;
// let weekDay = "Friday";

// if(dayOfMonth === 13 && weekDay.toLowerCase() === "friday"){
//     console.log("Spooky face")
// }

// let hands = ["rock", "paper", "scissor"]

// function getHand() {
//     let randomHands = hands[Math.floor(Math.random() * hands.length)]
//     console.log(randomHands)

// }

// getHand();


// let emojis = ["🐵", "🐶", "🐺", "🐱", "🦁", "🐯", "🦒", "🦊", "🦝", "🐰", "🐹", "🐭", "🐗", "🐷", "🐮", "🐻", "🐻‍❄️", "🐨", "🐼", "🐸", "🦓", "🐲", "🐔", "🫏", "🦄", "🫎", "🐴", "🐒", "🦍", "🦧", "🦮", "🐅", "🐈‍⬛", "🐈", "🐩", "🐕‍🦺", "🐆", "🐎", "🦌", "🦬", "🦏", "🦛", "🐑", "🐏", "🐄", "🐃", "🐂", "🐐", "🐪", "🐫", "🦙", "🦘", "🦥", "🐀", "🐁", "🦣", "🐘", "🦡", "🦨", "🦔", "🐇", "🐿️", "🦫", "🦎", "🐊", "🦦", "🦖", "🦕", "🐉", "🐍", "🐢", "🦈", "🐬", "🦭", "🐳", "🐋", "🐟", "🦞", "🐙", "🦑", "🦐", "🐡", "🐠", "🦀", "🐚", "🪸", "🪼", "🦆", "🐓", "🪽", "🦜", "🦢", "🕊️", "🦅", "🦃", "🐦‍⬛", "🪿", "🐦‍🔥", "🦚", "🦉", "🐤", "🐥", "🐧", "🐦", "🦤", "🐣", "🦇", "🐌", "🐛", "🦟", "🐝", "🪳", "🐜", "🦗", "🪱", "🪰", "🪲", "🐞", "🦂", "🕷️"]

// let stageEl = document.getElementById("stageEl")
// let fightButton = document.getElementById("fightButton")

// fightButton.addEventListener("click", function () {
//     let randomEmojiOne = Math.floor(Math.random() * emojis.length);
//     let randomEmojiTwo = Math.floor(Math.random() * emojis.length);
//     stageEl.textContent = emojis[randomEmojiOne] + " Vs " + emojis[randomEmojiTwo]
// })


// Template strogs

// const recipient = "James";
// const sender = "Per"
// const email = "Hey " + recipient + "! how is it going? Cheers " + sender;
// console.log(email)

// const tEmail = `Hey ${recipient}! 
// How is it going? Cheers 
// ${sender}`;
// console.log(tEmail)

let myLeads = ["www.awesomelead.com", "www.youtube.com"];

function getFirst(myLeads){
    return myLeads[0]
}

console.log(getFirst(myLeads))