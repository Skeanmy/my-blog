import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css'// 使用 CSS
import store from './store'
Vue.use(iView)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
