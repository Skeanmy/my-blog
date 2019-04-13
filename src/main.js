import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css'// 使用 CSS
import store from './store'
import '../public/css/animate.min.css'
// import '../public/js/test.js'
// const a = [1,2,3,45,99]
// console.log(a.max())

Vue.use(iView)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
