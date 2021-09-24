import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import notFound from '../views/404.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: '/about',
            name: 'About',
            component: About

        }]
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/404',
        name: 'notFound',
        component: notFound
    }

]

const router = new VueRouter({
    routes
})

export default router