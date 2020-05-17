import { v4 as uuidv4 } from 'uuid';
import { generateTotalPrices } from '@/utils/index'

export default {
    addToCart(cartData) {
        return new Promise((resolve, reject) => {
            // Get total prices
            let totalPrices = generateTotalPrices(cartData);
            // Generate new cart item
            const newCartItem = {
                id: uuidv4(),
                pizza: cartData.pizza,
                quantity: 1,
                total_price_usd: totalPrices.usd,
                total_price_euro: totalPrices.euro,
                pizza_size_id: cartData.sizeId,
                user_id: null
            }

            // Get the localStorage cart
            let cart = JSON.parse(localStorage.getItem('p_cart')) || [];
            // Check if the pizza with the same attributes already exists
            let exists = false;
            for (const item of cart) {
                if(item.pizza_size_id === newCartItem.pizza_size_id && item.pizza.id === newCartItem.pizza.id) {
                    item.quantity++;
                    exists = true;
                }
            }

            if(!exists) {
                cart.push(newCartItem);
            }
            // Add items to the localStorage cart
            localStorage.setItem('p_cart', JSON.stringify(cart));

            resolve({
                ok: true,
                message: 'Item has been successfully added to the cart.',
                newCartItem
            })
        });

        
    },

    deleteItem(itemId) {
        return new Promise((resolve, reject) => {
            // Get all items from localStorage
            let cart = JSON.parse(localStorage.getItem('p_cart')) || [];
            let newCart = cart.filter(item => item.id !== itemId);

            // Set new localStorage cart
            localStorage.setItem('p_cart', JSON.stringify(newCart));

            resolve({
                ok: true,
                message: 'Item has been successfully deleted from the cart.',
            });
        });
    }
}