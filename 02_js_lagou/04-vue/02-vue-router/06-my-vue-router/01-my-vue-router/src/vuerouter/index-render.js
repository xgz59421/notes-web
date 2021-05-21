let _Vue = null
export default class VueRouter {
  static install (Vue) {
    // 1 判断当前插件是否被安装
    if (VueRouter.install.installed) return
    VueRouter.install.installed = true
    // 2 把Vue的构造函数记录在全局
    _Vue = Vue
    // 3 把创建Vue的实例传入的router对象注入到Vue实例
    // _Vue.prototype.$router = this.$options.router
    _Vue.mixin({
      beforeCreate () {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          // this.$options.router.init()
        }
      }
    })
  }

  constructor (options) {
    this.options = options
    this.routeMap = {}
    // observable
    this.data = _Vue.observable({
      current: '/'
    })
    this.init()
  }

  init () {
    this.createRouteMap()
    this.initComponent(_Vue)
    // this.initEvent()
  }

  createRouteMap () {
    // 遍历所有的路由规则 吧路由规则解析成键值对的形式存储到routeMap中
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
  }

  initComponent (Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      render (h) {
        /**
         * 参数1 选择器/标签
         * 参数2 标签属性
         * 参数3 子元素 (a标签的内容)
         */
        return h('a', {
          attrs: {
            href: this.to
          },
          on: {
            click: this.clickhander
          }
        }, [this.$slots.default])
      },
      // template: "<a :href='to'><slot></slot></a>"

      methods: {
        clickhander (e) {
          history.pushState({}, '', this.to)
          this.$router.data.current = this.to
          e.preventDefault()
        }
      }
    })
    const self = this
    Vue.component('router-view', {
      render (h) {
        // self.data.current
        const cm = self.routeMap[self.data.current]
        return h(cm)
      }
    })
  }

  initEvent () {
    //
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname
    })
  }
}
