import api from '@/services/auth'
import * as mutationTypes from './mutation-types'
import router from '@/router/index'

export default {
    async fetchUser({ commit }) {
        // commit('setPageLoading', true, { root: true })
        let { data } = await api.fetchUser();

        if(!data.ok) console.log('err', data);
        else {
            commit(mutationTypes.SET_USER, data.user);

            // commit('setPageLoading', false, { root: true })
        }
    },

    async login({ commit }, credentials) {
        let { data } = await api.login(credentials);
        
        if(!data.ok) console.log('err', data);
        else {
            commit(mutationTypes.AUTH_SUCCESS, data)
        }
    },

    logout({ commit }) {
        commit(mutationTypes.LOGOUT);
        router.push({ name: 'home' });
    }
}