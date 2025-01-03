import Vue from 'vue'
// import VueRouter from 'vue-router'
// template, 完整版, 需要vue.config.js 配置 runtimeCompiler: true
// import VueRouter from '../vuerouter/index-template'
// render 运行时版
import VueRouter from '../vuerouter/index-render'
// hash 版
// import VueRouter from '../vuerouter/index-hash'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
