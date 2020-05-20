import cartService from '@/services/cart'
import * as mutationTypes from './mutation-types'
import router from '@/router/index'

export default {
    setSnackbar({ commit }, options) {
        commit(mutationTypes.SET_SNACKBAR, options);
    },

    setCurrency({ commit }, currency) {
        commit(mutationTypes.SET_CURRENCY, currency);
    },

    async getInfo({ commit }, cartItems) {
        let { data } = await cartService.getInfo(cartItems);

        if(data.ok) {
            commit(mutationTypes.SET_CART, data.pizzas);
        }
    },

    async addToCart({ commit }, cartItem) {
        let { ok, message, cart } = await cartService.addToCart(cartItem);

        if(ok) {
            commit(mutationTypes.SET_CART, cart);
            commit(mutationTypes.SET_SNACKBAR, {
                color: 'success',
                active: true,
                text: `${message}` 
            });
        }
    },

    async deleteItem({ commit }, itemId) {
        let { ok, message } = await cartService.deleteItem(itemId);

        if(ok) {
            commit(mutationTypes.DELETE_ITEM, itemId);
        }
    },
    
    async plusItem({ commit }, itemId) {
        let { ok, cart } = await cartService.plusItem(itemId);

        if(ok) {
            commit(mutationTypes.ITEM_PLUS, itemId);
        }
    },

    async minusItem({ commit }, itemId) {
        let { ok, cart } = await cartService.minusItem(itemId);

        if(ok) {
            commit(mutationTypes.ITEM_MINUS, itemId);
        }
    },

    async order({ commit }, orderItems) {
        let { data } = await cartService.order(orderItems);

        console.log(data);

        if(data.ok) {
            commit(mutationTypes.SET_CART, []);
            localStorage.removeItem('p_cart');
            commit(mutationTypes.SET_SNACKBAR, {
                color: 'success',
                active: true,
                text: `${data.message}` 
            });
        }
    }
}