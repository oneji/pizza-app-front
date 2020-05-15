// Layout
import MainLayout from '@/layout/MainLayout'
// Pages
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'

const routes = [
    { 
        path: '/', component: MainLayout,
        children: [
            { path: '/login', name: 'login', component: Login },
            { path: '/', name: 'home', component: Home },
            { path: '/cart', name: 'cart', component: Cart },
        ]
    },
]

export default routes