import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const authModule = {
    namespaced: true,
    state: {
        loading: false,
        isAuthenticated: !!localStorage.getItem('p_token'),
        user: null,
        token: null,
        error: false,
        errorMessage: ''
    },

    getters,
    mutations,
    actions
}

export default authModule