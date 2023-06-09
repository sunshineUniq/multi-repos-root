import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/assets/font/iconfont.css'

import '@/assets/css/global.less'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/'
Vue.config.productionTip = false
Vue.prototype.$echarts = window.echarts
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
