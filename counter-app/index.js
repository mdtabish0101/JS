let count = 0;

function increment() {
    console.log("Increment button was clicked")
    count = count + 1;
    document.getElementById("count-el").textContent = count;
}

function decrement() {
    console.log("Decrement button was clicked")
    if (count > 0) {
        count = count - 1;
        document.getElementById("count-el").textContent = count;
    }
}

function save(){
    console.log("save button was clicked")
    document.getElementById("lap").textContent = count
}

function reset(){
    console.log("reset button was clicked")
    count = 0;
    document.getElementById("count-el").textContent = count;
    document.getElementById("lap").textContent = null;
}