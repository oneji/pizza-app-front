import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Modules
import authModule from './modules/auth'
import pizzasModule from './modules/pizzas'
import cartModule from './modules/cart'
import ordersModule from './modules/orders'

export default new Vuex.Store({
    state: {},
    modules: {
        auth: authModule,
        pizzas: pizzasModule,
        cart: cartModule,
        orders: ordersModule
    }
})