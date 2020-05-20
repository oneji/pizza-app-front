import api from '@/services/pizza'
import * as mutationTypes from './mutation-types'
import router from '@/router'

export default {
    async getAll({ commit }) {
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

    getById({ commit }, pizzaId) {
        return new Promise((resolve, reject) => {
            api.getById(pizzaId)
                .then(result => {
                    let { data } = result

                    if(data.ok) {
                        resolve(data.pizza);
                    }

                })

        });
    }
}