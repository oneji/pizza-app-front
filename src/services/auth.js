import axios from '@/axios'

export default {
    login(credentials) {
        return axios.post('/login', credentials);
    },

    fetchUser() {
        return axios.get('/fetchUser');
    }
}