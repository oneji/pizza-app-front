import ordersService from '@/services/orders'
import * as mutationTypes from './mutation-types'
import router from '@/router/index'

export default {
    async getOrders({ commit }) {
        let { data } = await ordersService.getOrders();

        if(data.ok) {
            commit(mutationTypes.SET_ORDERS, data.orders);
        }
    }
}