function selectItem(item){
    let price = 0;
    switch(item){
        case 'coffee':
            price = 2
            break;
        case 'sandwiches':
            price = 5
            break;
        case 'salad':
            price = 4
            break;
        case 'lemon cake':
            price = 3
            break;
        default:
            return `${item} not available`
    }
    return `you selected ${item}, that will be $${price}`
}

console.log(selectItem(''))