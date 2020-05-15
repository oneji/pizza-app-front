import api from '@/services/pizza'
import * as mutationTypes from './mutation-types'
import router from '@/router'

export default {
    async getPizzas({ commit }) {
        let { data } = await api.getPizzas();
        
        if(data.ok) {
            commit(mutationTypes.SET_CATEGORIES, data.categories);
            commit(mutationTypes.SET_PIZZAS, data.pizzas);
        }
    },

    async getByCategory({ commit }, categoryId) {
        let { data } = await api.getByCategory(categoryId);

        if(data.ok) {
            commit(mutationTypes.SET_PIZZAS, data.pizzas);
        }
    }
}