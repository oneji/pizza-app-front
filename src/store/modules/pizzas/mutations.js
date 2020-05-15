import * as mutationTypes from './mutation-types'
import axios from '@/axios'

export default {
    [mutationTypes.SET_PIZZAS] (state, pizzas) {
        state.items = pizzas;
    },

    [mutationTypes.SET_CATEGORIES] (state, categories) {
        state.categories = categories;
    }
}