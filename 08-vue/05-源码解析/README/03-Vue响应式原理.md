## Vue 响应式原理

1. initMixin(Vue) -> initState(vm) -> initData(vm) -> observe(data, true)
2. observe(value) 
```js
  // 位置: core/observer/index.js
  1. 判断value是否是对象, 如果不是则 return
  2. 判断value是否有__ob__, 如果有则, return (说明做过响应化的处理)
  3. return ob = new Observer(value)
```
3. class Observer
```js  
  1. 给value对象定义一个不可枚举的__ob__属性, 记录当前的observer对象
  2. 如果value是数组, 做数组的响应式处理
    2.1 改变原数组的方法, 如push,pop触发notify
    2.2 遍历数组成员, 为数组中的每一个对象创建一个 observer 实例
  3. 对象的响应式处理, 调用walk()-->遍历所有属性调用 defineReactive()
```
4. defineReactive
```js
  1. 为每个属性创建Dep对象(让Dep收集依赖)
  2. 如果当前值是对象, 则调用observe(val)
  3. 定义 getter
    3.1 收集依赖(如果是对象, 也要为子对象收集依赖)
    3.2 返回属性的值
  4. 定义 setter
    4.1 保存新值
    4.2 如果新值是对象, 调用observe(把新值也转换成响应式对象)
    4.3 派发更新, 调用dep.notify()
```
5. 收集依赖
```js
  // 位置 core/observer/watcher.js
  1. 在watcher对象get方法中调用 pushTarget(target) (把当前的watcher记录Dep.target的属性中)
  2. 访问data中成员的时候收集依赖, 触发defineReactive的getter, 在getter中收集依赖
  3. 把属性对应的watcher对象添加到dep的subs数组中(为属性收集依赖)
  4. 给childOb(子对象)收集依赖, 目的是对子对象添加和删除成员时发送通知
```

6. watcher(数据发生变化, watcher执行过程)
```js
1. dep.notify(), 他会调用watcher的update()方法
2. update()调用queueWatcher(), 判断watcher是否被处理
    如果没有的话添加到queue队列中 queue.push(watcher)
    并调用 flushSchedulerQueue()
3. flushSchedulerQueue()
  3.1 触发beforeUpdate钩子函数
  3.2 调用watcher.run()
            ↓
          get()
            ↓
          getter()
            ↓
          updateComponent () 此时已经更新到视图上了
  3.3 清空上次的依赖, 重置状态
  3.4 触发actived钩子函数
  3.5 触发updated钩子函数
```