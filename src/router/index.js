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
    const currentUser = store.getters['auth/getUser'];

    if (isAuthenticated && currentUser === null) {
        if(to.name === 'login') {
            next('/');
        } else {
            store.dispatch('auth/fetchUser').then(() => {
                next();
            });
        }
    } else {
        next()
    }

    if(!isAuthenticated) {
        if(to.meta.requiresAuth) {
            next('/login')
        }

        next();
    }
})

export default router