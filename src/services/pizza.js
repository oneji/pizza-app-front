import axios from '@/axios'

export default {
    getPizzas() {
        return axios.get('/pizzas'); 
    },

    getByCategory(categoryId) {
        return axios.get(`/pizzas/getByCategory/${categoryId}`); 
    },

    getById(pizzaId) {
        return axios.get(`/pizzas/getById/${pizzaId}`);
    }
}