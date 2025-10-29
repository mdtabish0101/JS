const images = [
    "./image/imam.jpeg",
    "./image/Ali_Abdullah_Jaber.jpg",
    "./image/Al-Sudais.webp"
];

let picEl = document.getElementById("pic-render");

function imageRenderer() {
    console.log("first");
    let imgsDom = ""
    for (let i = 0; i < images.length; i++) {
        imgsDom += `<img src="${images[i]}" alt="pics" class="image-tag">`;
    }
    picEl.innerHTML = imgsDom;
    console.log("last");
}

imageRenderer();
