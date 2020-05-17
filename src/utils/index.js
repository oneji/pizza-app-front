export function generateTotalPrices(pizzaData) {
    let { sizeId, pizza } = pizzaData;
    let usd = 0;
    let euro = 0;
    // ...
    pizza.pizza_sizes.map(size => {
        if(sizeId === size.id) {
            console.log(size);
            usd = size.pivot.price_usd;
            euro = size.pivot.price_euro;
        }
    });

    return {
        usd,
        euro
    }
}