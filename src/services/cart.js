import { v4 as uuidv4 } from 'uuid';
import axios from '@/axios'

export default {
    getInfo(cartItems) {
        return axios.post('/cart/getInfo', cartItems);
    },

    addToCart(cartData) {
        return new Promise((resolve, reject) => {
            let newCartItem;
            // Get the localStorage cart
            let cart = JSON.parse(localStorage.getItem('p_cart')) || [];
            // Check if the pizza with the same attributes already exists
            let exists = false;
            for (const item of cart) {
                if(item.sizeId === cartData.sizeId && item.pizzaId === cartData.pizzaId) {
                    exists = true;
                    // Update then existing pizza
                    item.quantity++;
                }
            }
            
            if(!exists) {
                newCartItem = {
                    id: uuidv4(),
                    pizzaId: cartData.pizzaId,
                    sizeId: cartData.sizeId,
                    quantity: cartData.quantity,
                }
                // Generate new cart item
                cart.push(newCartItem);
            }
            
            // Add items to the localStorage cart
            localStorage.setItem('p_cart', JSON.stringify(cart));

            resolve({
                ok: true,
                message: 'Item has been successfully added to the cart.',
                cart
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
    },

    plusItem(itemId) {
        return new Promise((resolve, reject) => {
            let cart = JSON.parse(localStorage.getItem('p_cart'));
            cart.map(item => {
                if(item.id === itemId) {
                    item.quantity++;
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
                    item.quantity--;

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
    },

    order(cartItems) {
        return axios.post('/orders', cartItems);
    }
}