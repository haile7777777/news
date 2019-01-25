import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.min.css'

import router from './router/index'
import axios from 'axios'
import './filters/filters'

import App from './App.vue'


Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(router)

Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://www.liulongbin.top:3005';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
