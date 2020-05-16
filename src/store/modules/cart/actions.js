import cartService from '@/services/cart'
import * as mutationTypes from './mutation-types'
import router from '@/router/index'

export default {
    setCurrency({ commit }, currency) {
        commit(mutationTypes.SET_CURRENCY, currency);
    }
}