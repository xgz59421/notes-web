## Vue 首次渲染的过程

##### 1. Vue 初始化
```js
1. 定义Vue的构造函数
// src/core/instance/index.js
2. Vue 初始化实例成员
// src/core/instance/index.js
3. 初始化Vue的静态成员
// src/core/index.js: initGlobalAPI(Vue) 
4. 注册Vue.prototype.$mount
// src/platforms/web/runtime-index.js
5. 重写Vue.prototype.$mount
// src/platforms/web/entry-runtime-with-compiler.js
```
##### 2. 页面创建对象 new Vue()

##### 3. 在Vue构造函数中调用 this._init(options)
```js
// src/core/instance/init.js
初始化 vm
// 调用 $mount() 挂载
vm.$mount(vm.$options.el)
```

##### 4. 调用$mount 将模板编译成render函数
```js
// scr/platforms/web/entry-runtime-with-compiler.js
如果没有render函数,则,把template/el 编译为render函数
compileToFUnctions() 生成render()函数
options.render = render
```

##### 5. 调用$mount
```js
// src/platforms/web/runtime-index.js
  mountComponent()
```
##### 6. 调用mountComponent(this, el, hydrating)
```js
// src/core/instance/lifecycle.js
1. 判断是否有render选项，如果没有但是传入了模板，当前是发开环境则发送警告
2. 触发beforeMount()
3. 定义updateComponent
  vm._update(vm._render())
    vm._render()渲染, 渲染虚拟DOM
    vm._update()更新,  将虚拟DOM转换成真实DOM
4. 创建Watchwer实例 new Watcher(vm, updateComponent, noop)
  调用updateComponent()
  调用get()
5. 触发mounted生命周期钩子函数
6. return vm
```
##### 7. watcher.get()
```js
  // getter存的就是 updateComponent
  // 调用get相当于调用updateComponent
1. 创建完watcher会调用一次 get() 
2. 调用updateComponent()
3. vm._update中调用 vm._render() 创建VNode
  调用 render.call(vm._renderProxy, vm.$createElement)
  调用实例化时Vue传入的 render(),或template生成的 render()
  返回vnode 虚拟DOM
4. vm._update(vm_render())
    调用_patch(vm.$el.vnode)挂载真实DOM(虚拟DOM转换真是DOM)
    记录vm.$el
```