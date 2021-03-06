import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const pizzasModule = {
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

export default pizzasModule