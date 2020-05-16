import * as mutationTypes from './mutation-types'
import axios from '@/axios'

export default {
    [mutationTypes.SET_PIZZAS] (state, pizzas) {
        state.items = pizzas;
    },

    [mutationTypes.SET_CATEGORIES] (state, categories) {
        state.categories = categories;
    },

    [mutationTypes.SET_SIZES] (state, sizes) {
        state.sizes = sizes;
    },

    [mutationTypes.SET_DETAILS] (state, details) {
        state.details = details;
    },

    [mutationTypes.SET_PIZZA_STATE] (state, newState) {
        state.items = newState.items;
        state.sizes = newState.sizes;
        state.categories = newState.categories;
        state.details = newState.details;
    }
}