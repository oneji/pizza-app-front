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
        state.items = state.items.filter(item => item.id !== itemId);
    },

    [mutationTypes.SET_CART] (state, cart) {
        state.items = cart;
    }
}