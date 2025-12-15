function getStockData(){

    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let date  = `${day}:${month+1}:${year}`;

    return {
        name: 'QtechAI',
        symbol: 'QTA',
        price: (Math.random() * 3).toFixed(3),
        time: date,
    }
}

export default getStockData;