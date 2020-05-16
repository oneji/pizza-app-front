export default {
    getPizzas(state) {
        return state.items;
    },

    getCategories(state) {
        return state.categories;
    },

    getSizes(state) {
        return state.sizes;
    },
    
    getDetails(state) {
        return state.details;
    }
}