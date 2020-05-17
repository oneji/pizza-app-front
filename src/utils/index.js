export function generateTotalPrices(pizzaData) {
    let { pizza_size_id, pizza, quantity } = pizzaData;
    let usd = 0;
    let euro = 0;

    // ...
    pizza.pizza_sizes.map(size => {
        if(pizza_size_id === size.id) {
            usd = size.pivot.price_usd * quantity;
            euro = size.pivot.price_euro * quantity;
        }
    });

    return {
        usd,
        euro
    }
}