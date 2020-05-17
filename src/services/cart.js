import { v4 as uuidv4 } from 'uuid';
import { generateTotalPrices } from '@/utils/index'

export default {
    addToCart(cartData) {
        return new Promise((resolve, reject) => {
            // Get the localStorage cart
            let cart = JSON.parse(localStorage.getItem('p_cart')) || [];
            // Check if the pizza with the same attributes already exists
            let exists = false;
            for (const item of cart) {
                if(item.pizza_size_id === cartData.sizeId && item.pizza.id === cartData.pizza.id) {
                    exists = true;
                    // Update then existing pizza
                    item.quantity++;
                    item.total_price_usd = generateTotalPrices(item).usd;
                    item.total_price_euro = generateTotalPrices(item).euro
                }
            }

            let newCartItem;
            if(!exists) {
                // Get total prices
                let totalPrices = generateTotalPrices({
                    quantity: 1,
                    pizza_size_id: cartData.sizeId,
                    pizza: cartData.pizza 
                });

                newCartItem = {
                    id: uuidv4(),
                    pizza: cartData.pizza,
                    quantity: 1,
                    total_price_usd: totalPrices.usd,
                    total_price_euro: totalPrices.euro,
                    pizza_size_id: cartData.sizeId,
                    user_id: null
                }

                // Generate new cart item
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
        console.log('deleteItem', itemId);
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
    },

    plusItem(itemId) {
        return new Promise((resolve, reject) => {
            let cart = JSON.parse(localStorage.getItem('p_cart'));
            cart.map(item => {
                if(item.id === itemId) {
                    let usdPriceForOne = item.total_price_usd / item.quantity;
                    let euroPriceForOne = item.total_price_euro / item.quantity;
                    item.quantity++;
                    item.total_price_usd += usdPriceForOne;
                    item.total_price_euro += euroPriceForOne;
                }
            });

            localStorage.setItem('p_cart', JSON.stringify(cart));

            resolve({ 
                ok: true,
                cart
            });
        });
    },

    minusItem(itemId) {
        return new Promise((resolve, reject) => {
            let cart = JSON.parse(localStorage.getItem('p_cart'));

            for(let i = 0; i < cart.length; i++) {
                let item = cart[i];

                if(item.id === itemId) {
                    let usdPriceForOne = item.total_price_usd / item.quantity;
                    let euroPriceForOne = item.total_price_euro / item.quantity;
                    item.quantity--;
                    item.total_price_usd -= usdPriceForOne;
                    item.total_price_euro -= euroPriceForOne;

                    if(item.quantity === 0) {
                        cart.splice(i, 1);
                        break;
                    }
                }
            }

            localStorage.setItem('p_cart', JSON.stringify(cart));

            resolve({ 
                ok: true,
                cart
            });
        });
    }
}