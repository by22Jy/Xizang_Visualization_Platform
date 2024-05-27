import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/global.less'
import SocketService from '@/utils/socket_service'
import * as echarts from 'echarts'
import 'echarts-wordcloud/dist/echarts-wordcloud.min'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 后端的ws连接
SocketService.Instance.connect()
// 绑定
Vue.prototype.$socket = SocketService.Instance
// 设置请求基址
axios.defaults.baseURL = 'http://localhost:8888/api'
// 挂载
Vue.prototype.$http = axios
// 设置地图里的交互显示功能
Vue.prototype.$popUp = false

// echarts的全局挂载
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
