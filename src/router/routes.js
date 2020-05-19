// Layout
import MainLayout from '@/layout/MainLayout'
// Pages
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'
import Orders from '@/pages/Orders'

const routes = [
    { 
        path: '/', component: MainLayout,
        children: [
            { path: '/login', name: 'login', component: Login },
            { path: '/', name: 'home', component: Home },
            { path: '/cart', name: 'cart', component: Cart },
            { path: '/orders', name: 'orders', component: Orders, meta: { requiresAuth: true } },
        ]
    },
]

export default routes