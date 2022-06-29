/**
 * Nuxt.js 配置文件
 */

module.exports = {
  router: {
    // 应用的根 URL
    base: '/app', 
    // 路由扩展
    // routes: 路由配置表
    // resolve: 解析路由组件路径
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/hello',
        name: 'hello',
        component: resolve(__dirname, 'pages/about.vue')
      })
    }
  }
}