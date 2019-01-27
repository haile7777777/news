import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'hongde-demo/css/mui.min.css'

import router from './router/index'
import axios from 'axios'
import './filters/filters'
import VuePreview from 'vue-preview'

import App from './App.vue'


Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(router)
Vue.use(VuePreview)

Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://www.liulongbin.top:3005';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
