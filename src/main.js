import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font/iconfont.css'
import * as echarts from 'echarts'
import OnlyMessage from './utils/onlyMSGbox'
Vue.prototype.$mess = OnlyMessage
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')