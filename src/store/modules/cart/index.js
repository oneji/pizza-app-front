import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const authModule = {
    namespaced: true,
    state: {
        items: JSON.parse(localStorage.getItem('p_cart')) || [],
        currency: localStorage.getItem('p_currency') || 'usd',
        snackbar: {
            color: '',
            active: false,
            text: ''
        }
    },

    getters,
    mutations,
    actions
}

export default authModule