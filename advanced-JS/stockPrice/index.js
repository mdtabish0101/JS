import getStockData from "./getStockPrice.js";

let stockData = document.getElementById("stock-data")


let { name, symbol, price, time } = getStockData();


let difference = price;

function renderStock() {
    stockData.innerHTML = `
                <h1>Name: ${name}</h1>
                <h1>Symbol: ${symbol}</h1>
                <h1>Price: ${price}</h1>
                <h1>Difference: ${difference} ${getDifferenceSymbol(difference)}</h1>
                <h1>Time: ${time}</h1>
`

}


function calculateStock() {
    price = (price * (1 + (Math.random() - 0.5) / 10)).toFixed(3);
    difference = (price - difference).toFixed(3);
    renderStock();
}

function getDifferenceSymbol(diff) {
    console.log(diff)
    if (diff > 0) {
        return `<span style="color:lime">▲</span>`;
    } else if (diff < 0) {
        return `<span style="color:red">▼</span>`;
    } else {
        return `<span style="color:gray">▬</span>`;
    }

}

renderStock();

setInterval(calculateStock, 10000)