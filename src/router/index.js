import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store/index'

Vue.use(Router)

const router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('p_token');

    if (isAuthenticated) {
        if(to.name === 'login') {
            next('/');
        } else {
            next();
        }
        // store.dispatch('auth/fetchUser').then(() => {});
    } 
    
    next();
})

export default router