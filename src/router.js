import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import commonLayout from './components/commonLayout.vue'
// import Archives from './views/Archives.vue'
Vue.use(Router)

export default new Router({
  // model: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: commonLayout,
      children: [{
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/archives',
          name: 'archives',
          component: () => import('./views/Archives.vue')
        },
        {
          path: '/loveTips',
          name: 'MyLove',
          component: () => import('./views/MyLove.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    }
  ]
})
