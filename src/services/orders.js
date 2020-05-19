import axios from '@/axios'

export default {
    getOrders() {
        return axios.get('/orders');
    }
}