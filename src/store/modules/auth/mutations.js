import * as mutationTypes from './mutation-types'
import axios from '@/axios'
import router from '@/router/index'

export default {
    [mutationTypes.AUTH_LOADING] (state) {
        state.loading = true;
    },

    [mutationTypes.AUTH_SUCCESS] (state, userData) {
        state.isAuthenticated = true;
        state.user = userData.user;
        state.token = userData.token;
        state.loading = false;
        // Delete all errors
        state.error = false;
        state.errorMessage = '';
        // Set token to a local storage
        localStorage.setItem('p_token', userData.token);
        // Set axios `Authorization` header
        axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;

        router.push({ name: 'home' })
    },

    [mutationTypes.AUTH_FAILED] (state, message) {
        state.error = true,
        state.errorMessage = message;
        state.loading = false;
    },

    [mutationTypes.SET_USER] (state, user) {
        state.user = user;
    },

    [mutationTypes.LOGOUT] (state) {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        localStorage.removeItem('p_token');
    }
}