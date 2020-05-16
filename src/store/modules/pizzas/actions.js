import api from '@/services/pizza'
import * as mutationTypes from './mutation-types'
import router from '@/router'

export default {
    async getPizzas({ commit }) {
        let { data } = await api.getPizzas();
        
        if(data.ok) {
            commit(mutationTypes.SET_PIZZA_STATE, {
                items: data.pizzas,
                sizes: data.sizes,
                categories: data.categories,
                details: {}
            });
        }
    },

    async getByCategory({ commit }, categoryId) {
        let { data } = await api.getByCategory(categoryId);

        if(data.ok) {
            commit(mutationTypes.SET_PIZZAS, data.pizzas);
        }
    },

    async getById({ commit }, pizzaId) {
        let { data } = await api.getById(pizzaId);

        if(data.ok) {
            commit(mutationTypes.SET_DETAILS, data.pizza);
        }
    }
}