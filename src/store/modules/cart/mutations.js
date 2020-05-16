import * as mutationTypes from './mutation-types'
import axios from '@/axios'

export default {
    [mutationTypes.SET_CURRENCY] (state, currency) {
        state.currency = currency;
        // Set currency to the localStorage
        localStorage.setItem('p_currency', currency);
    }
}