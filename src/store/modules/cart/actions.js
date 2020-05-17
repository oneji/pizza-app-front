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

    async addToCart({ commit }, cartItem) {
        let { ok, message, newCartItem } = await cartService.addToCart(cartItem);

        if(ok) {
            commit(mutationTypes.ADD_TO_CART, newCartItem);
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
            commit(mutationTypes.SET_SNACKBAR, {
                color: 'success',
                active: true,
                text: `${message}` 
            });
        }
    }
}