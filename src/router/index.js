import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import notFound from '../views/404.vue'

import FileManage from '../views/HRsystem/FileManage.vue' //档案管理
import personnelOperation from '../views/HRsystem/personnelOperation.vue' //人事操作
import RewardAPunishManage from '../views/HRsystem/RewardAPunishManage.vue' //奖惩管理
import dormitoryMange from '../views/HRsystem/dormitoryMange.vue' //宿舍管理



Vue.use(VueRouter)
const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        redirect: '/about',
        component: Home,
        children: [{
            path: '/about',
            name: 'About',
            component: About

        }, {
            path: '/FileManage',
            name: 'FileManage',
            component: FileManage
        }, {
            path: '/personnelOperation',
            name: 'personnelOperation',
            component: personnelOperation
        }, {
            path: '/RewardAPunishManage',
            name: 'RewardAPunishManage',
            component: RewardAPunishManage
        }, {
            path: '/dormitoryMange',
            name: 'dormitoryMange',
            component: dormitoryMange
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