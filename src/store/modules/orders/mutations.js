import * as mutationTypes from './mutation-types'
import axios from '@/axios'

export default {
    [mutationTypes.SET_ORDERS] (state, orders) {
        state.items = orders;
    }
}