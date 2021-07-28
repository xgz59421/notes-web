class Vue {
  constructor (options) {
    // 1. 通过属性保存选项的数据
    this.$options = options || {}
    this.$data = options.data || {}
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
    // 2. 把data中的成员转换成getter和setter，注入到vue实例中
    this._proxyData(this.$data)
    // 3. 调用observer对象
      // 3.1 把$data 中的成员转换成 getter/setter
      // 3.2 负责收集依赖，并发送通知
    new Observer(this.$data)
    // 4. 调用compiler对象
      // 4.1 编译模板，处理文本节点和元素节点(包括子节点)
      // 4.2 解析指令和差值表达式
      // 4.3 创建watcher对象, 当数据改变时更新视图
    new Compiler(this)
  }
  _proxyData (data) {
    // 遍历data中的所有属性
    Object.keys(data).forEach(key => {
      // 把data的属性注入到vue实例中
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get () {
          return data[key]
        },
        set (newValue) {
          if (newValue === data[key]) {
            return
          }
          data[key] = newValue
        }
      })
    })
  }
}