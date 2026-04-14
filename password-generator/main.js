const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const button = document.querySelector("button");
button.addEventListener("click", handleClick);
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");


password1El.addEventListener("click", copyPassword);
password2El.addEventListener("click", copyPassword);

function getRandomCharacter() {
    let k = Math.floor(Math.random() * characters.length);
    return characters[k]
}

function generatePassword() {
    let pwd_generated = "";
    for (let i = 0; i < 15; i++) {
        pwd_generated += getRandomCharacter();
    }
    return pwd_generated;
}


function handleClick() {
    password1El.textContent = generatePassword();
    password2El.textContent = generatePassword();
}


async function copyPassword(event) {
    const text = event.target.textContent;
    if(!text){return;}
    navigator.clipboard.writeText(text);
    event.target.textContent = "copied!";
    setTimeout(()=>{
        event.target.textContent = text;
    }, 1000);
}


//stretch goals
// 1. ability to set password length (user will give a query)
// 2. add "copy-on-click" done
// 3. toggle "symbols" and "numbers" on/off
