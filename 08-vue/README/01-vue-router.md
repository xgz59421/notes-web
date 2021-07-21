## VueRouter
- [1. 使用步骤](#1)
- [2. 动态路由传参](#2)
- [3. 嵌套路由](#3)
- [4. 编程式导航](#4)
- [5. Hash模式和History模式的区别](#5)
- [6. 手写vue-router](#6)
- [7. Vue runtimeCompiler](#7)

--------

><h2 id='1'>1. 使用步骤</h2>>
```js
1. 创建 router 对象，router/index.js
  import Vue from 'vue' 
  import VueRouter from 'vue-router' 
  // 路由组件 
  import index from '@/views/index' 
  // 组成插件 
  Vue.use(VueRouter) 
  // 路由规则 
  const routes = [ 
    { name: 'index', path: '/', component: index } ]
  // 路由对象 
  const router = new VueRouter({ routes })
  export default router
2. 注册 router 对象，main.js
  import router from './router' 
  new Vue({ 
    render: h => h(App), 
    router 
  }).$mount('#app')
3. 创建路由组建的占位，App.vue
  <router-view></router-view>
4. 创建链接
  <router-link to="./">首页</router-link> 
  <router-link :to="{name: 'index'}" >首页</router-link>
```

><h2 id='2'>2. 动态路由传参</h2>
```js
const routes = [{ 
  name: 'detail', 
  // 路径中携带参数 
  path: '/detail/:id', component: detail, props: true }]

  // detail 组件中接收路由参数 
  // 方式1:
  const detail = { props: ['id'], template: '<div>Detail ID： {{ id }}</div>' }
  // 方式2
  $route.params.id
```
><h2 id='3'>3. 嵌套路由</h2>
```js
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'index',
        path: '',
        component: Index
      },
      {
        name: 'detail',
        path: 'detail/:id',
        props: true,
        component: () => import('@/views/Detail.vue')
      }
    ]
  }
```

><h2 id='4'>4. 编程式导航</h2>
```js
// 跳转到指定路径 
router.push('/login') 
// 命名的路由 
router.push({ name: 'user', params: { id: '5' }}) 
router.replace() 
router.go()
```

><h2 id='5'>5. Hash模式和History模式的区别</h2>
```js
1. `表现形式的区别`
  Hash:
    https://music.163.com/#/playlist?id=3102961863
  History: 
    https://music.163.com/playlist/3102961863
2. `原理的区别`
  hash
    Vue Router 默认使用的是 hash 模式，使用 hash 来模拟一个完整的 URL，通过
    onhashchange 监听路径的变化
  History
    基于 History API
    history.pushState() 
    history.replaceState() 
    history.go()
3. 开启 History 模式 
  // history 需要服务器的支持
  // 服务端不存在 http://www.testurl.com/login
  // 如果服务器没有某个接口, 返回单页面应用index.html
  const router = new VueRouter({ 
    // mode: 'hash', 
    mode: 'history', 
    routes 
  })
```

><h2 id='6'>6. 手写vue-router</h2>   
```js
import VueRouter from '../vuerouter/index-render'
// Vue.use, 用于注册插件, 
// 1. 如果是函数,则用函数注册插件
// 2. 如果是对象,则调用对象的install方法注册插件
Vue.use(VueRouter)

cosnt = routes = [...]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default class VueRouter {
  static install (Vue){
    ...
  }
  constructor (options){
    ...
  }
  ...
}

```
><h2 id='7'>7. Vue runtimeCompiler</h2>>
```js
// vue-cli默认runtimeCompiler 为false, 提前把template 编译为render函数
// 如果代码插件中使用template, 则需, runtimeCompiler: true
`vue.config.js`:
module.exports = {

  // Vue 的构建版本
  // 1. 运行时版: 效率更高,不支持template, 可以使用runder函数, vuecli 默认
  // 2. 完整版: 包含运行时版和编译器, 体积比运行时版大10k左右, 程序运行时把模板转换成render函数
  // 编译器作用: 把template编程runder函数

  // runtimeCompiler切换为 完整版, 默认false
  // runtimeCompiler: true
}
```