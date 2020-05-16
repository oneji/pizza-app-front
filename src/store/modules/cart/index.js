import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const authModule = {
    namespaced: true,
    state: {
        items: [],
        currency: localStorage.getItem('p_currency') || 'usd'
    },

    getters,
    mutations,
    actions
}

export default authModule