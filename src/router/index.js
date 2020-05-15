import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store/index'

Vue.use(Router)

const router = new Router({
    routes
});

// router.beforeEach((to, from, next) => {
//     const isAuthenticated = !!localStorage.getItem('vc_token');

//     if (isAuthenticated) {
//         store.dispatch('auth/fetchUser').then(() => {
//             next();
//         });
//     } else {
//         if (to.name !== 'Login') {
//             next('/login');
//         } else {
//             next();
//         }
//     }
// })

export default router