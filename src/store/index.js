import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Modules
import authModule from './modules/auth'
import pizzazModule from './modules/pizzas'
import cartModule from './modules/cart'

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth: authModule,
        pizzas: pizzazModule,
        cart: cartModule
    }
})