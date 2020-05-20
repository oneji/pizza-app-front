import api from '@/services/auth'
import * as mutationTypes from './mutation-types'
import router from '@/router/index'

export default {
    async fetchUser({ commit }) {
        let { data } = await api.fetchUser();

        if(!data.ok) console.log('err', data);
        else {
            commit(mutationTypes.SET_USER, data.user);
        }
    },

    async login({ commit }, credentials) {
        // Loading state of login page
        commit(mutationTypes.AUTH_LOADING);
        let { data } = await api.login(credentials);

        if(!data.ok) commit(mutationTypes.AUTH_FAILED, data.message);
        else {
            commit(mutationTypes.AUTH_SUCCESS, data);
        }
    },

    logout({ commit }) {
        commit(mutationTypes.LOGOUT);
    }
}