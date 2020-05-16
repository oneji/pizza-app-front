import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const authModule = {
    namespaced: true,
    state: {
        items: [],
        sizes: [],
        categories: [],
        details: {}
    },

    getters,
    mutations,
    actions
}

export default authModule