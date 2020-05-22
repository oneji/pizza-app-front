import api from '@/services/pizza'
import * as mutationTypes from './mutation-types'
import router from '@/router'

export default {
    getAll({ commit }) {
        return new Promise(async (resolve, reject) => {
            let { data } = await api.getPizzas();
        
            if(data.ok) {
                commit(mutationTypes.SET_PIZZA_STATE, {
                    items: data.pizzas,
                    sizes: data.sizes,
                    categories: data.categories,
                    details: {}
                });
                
                resolve(data);
            } else {
                reject(data);
            }
        });
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