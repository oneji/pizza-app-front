import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

// const token = localStorage.getItem('p_token');

// if (token !== undefined) {
//     instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

// Response interceptor
// instance.interceptors.response.use(function(response) {
//     return response;
// }, function(error) {
//     if(error.response.status === 500) {
//         store.dispatch('snackbar', {
//             color: 'error',
//             active: true,
//             text: 'Неизвестная ошибка на сервере.'
//         });
//     }
// });

export default instance