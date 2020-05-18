import * as mutationTypes from './mutation-types'
import axios from '@/axios'

export default {
    [mutationTypes.SET_CURRENCY] (state, currency) {
        state.currency = currency;
        // Set currency to the localStorage
        localStorage.setItem('p_currency', currency);
    },

    [mutationTypes.ADD_TO_CART] (state, newCartItem) {
        state.items = [...state.items, newCartItem];
    },

    [mutationTypes.SET_SNACKBAR] (state, options) {
        state.snackbar = options;
    },

    [mutationTypes.DELETE_ITEM] (state, itemId) {
        state.items = state.items.filter(item => item.item_id !== itemId);
    },

    [mutationTypes.SET_CART] (state, cart) {
        state.items = cart;
    },

    [mutationTypes.ITEM_PLUS] (state, itemId) {
        state.items.map(item => {
            if(item.item_id === itemId) {
                item.quantity++;
                item.total_price_usd = item.price_usd * item.quantity;    
                item.total_price_euro = item.price_euro * item.quantity;    
            }
        });
    },

    [mutationTypes.ITEM_MINUS] (state, itemId) {
        state.items.map((item, idx) => {
            if(item.item_id === itemId) {
                item.quantity--;
                if(item.quantity == 0) {
                    state.items.splice(idx, 1);
                } else {
                    item.total_price_usd = item.price_usd * item.quantity;    
                    item.total_price_euro = item.price_euro * item.quantity;
                }

            }
        });
    },
}