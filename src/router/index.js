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

//一卡通 
import Hardware from '../views/oneCardPass/Hardware.vue' //硬件管理
import hardwareFile from '../views/oneCardPass/hardwareFile.vue' //硬件档案
import hardwareSet from '../views/oneCardPass/hardwareSet.vue' //硬件设置
import downKq from '../views/oneCardPass/downKq.vue' //考勤卡下载
import dataCollect from '../views/oneCardPass/dataCollect.vue' //考勤卡下载

import CardNum from '../views/oneCardPass/EmployeeCardNumber.vue' //卡号编卡表

import Attend from '../views/checkWorkAttendance/attendanceSet.vue' //考勤设置
import Scheduling from '../views/checkWorkAttendance/Scheduling.vue' //考勤管理
import KqScheme from '../views/checkWorkAttendance/KqScheme.vue' //考勤方案

import swipeCardLog from '../views/CheckWorkCompute/swipeCardLog.vue' //员工刷卡记录
import KqBill from '../views/CheckWorkCompute/KqBill.vue' //考勤单据
import DailyPaperFormula from '../views/CheckWorkCompute/DailyPaperFormula.vue' //日报公式




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
            path: '/Attend',
            name: 'Attend',
            component: Attend
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
        }, {
            path: '/Hardware',
            name: 'Hardware',
            component: Hardware,
        }, {
            path: '/CardNum',
            name: 'CardNum',
            component: CardNum
        }, {
            path: '/hardwareFile',
            name: 'hardwareFile',
            component: hardwareFile,
        }, {
            path: '/hardwareSet',
            name: 'hardwareSet',
            component: hardwareSet,
        }, {
            path: '/downKq',
            name: 'downKq',
            component: downKq,
        }, {
            path: '/dataCollect',
            name: 'dataCollect',
            component: dataCollect,
        }, {
            path: '/Scheduling',
            name: 'Scheduling',
            component: Scheduling,
        }, {
            path: '/KqScheme',
            name: 'KqScheme',
            component: KqScheme,
        }, {
            path: '/swipeCardLog',
            name: 'swipeCardLog',
            component: swipeCardLog,

        }, {
            path: '/KqBill',
            name: 'KqBill',
            component: KqBill,

        }, {
            path: '/DailyPaperFormula',
            name: 'DailyPaperFormula',
            component: DailyPaperFormula,
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