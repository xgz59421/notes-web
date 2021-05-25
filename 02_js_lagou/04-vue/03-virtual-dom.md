## VueRouter
- [1. 虚拟DOM作用](#1)
- [2. 常见的虚拟DOM库](#2)
- [3. Snabbdom](#3)
- [4. Snabbdom h函数](#4)
- [5. Snabbdom init](#4)
```js
`什么是虚拟DOM`
  Virtual DOM 虚拟DOM 是由普通的JS对象来描述DOM对象
```
--------

><h2 id='1'>1. 虚拟DOM作用</h2>>
```js
1. 维护视图和状态的关系
2. 复杂是图情况下提升渲染性能
3. 跨平台
   浏览器平台渲染DOM
   服务端渲染 SSR(Nuxt.js/ Next.js)
   原生应用(Weex/React Native)
   小程序(mpvue/ uni-app)等
```

><h2 id='2'>2. 虚拟DOM库</h2>>
```js
1. Snabbdom
   Vue.js 2.x 内部使用的虚拟DOM就是改造的 Snabbdom
   大约200多行代码
   通过模块可以扩展
   源码使用 TypeScript 开发
   最快的 VirtualDOM 之一
2. virtual-dom
```

><h2 id='3'>3. Snabbdom</h2>>
- src 目录结构
  ```
  ├── package
  │   ├── helpers
  │   │   └── attachto.ts		定义了 vnode.ts 中 AttachData 的数据结构
  │   ├── modules
  │   │   ├── attributes.ts
  │   │   ├── class.ts
  │   │   ├── dataset.ts
  │   │   ├── eventlisteners.ts
  │   │   ├── hero.ts				example 中使用到的自定义钩子
  │   │   ├── module.ts			定义了模块中用到的钩子函数
  │   │   ├── props.ts
  │   │   └── style.ts
  │   ├── h.ts							h() 函数，用来创建 VNode
  │   ├── hooks.ts					所有钩子函数的定义
  │   ├── htmldomapi.ts			对 DOM API 的包装
  │   ├── init.ts						加载 modules、DOMAPI，返回 patch 函数
  │   ├── is.ts							判断数组和原始值的函数
  │   ├── jsx-global.ts			jsx 的类型声明文件
  │   ├── jsx.ts						处理 jsx
  │   ├── thunk.ts					优化处理，对复杂视图不可变值得优化
  │   ├── tovnode.ts				DOM 转换成 VNode
  │   ├── ts-transform-js-extension.cjs
  │   ├── tsconfig.json			ts 的编译配置文件
  │   └── vnode.ts					虚拟节点定义
  ```
><h2 id='4'>4. Snabbdom h函数</h2>>
```js
// h 函数的重载, 根据个数, 类型
export function h(sel: string): VNode;
export function h(sel: string, data: VNodeData | null): VNode;
export function h(sel: string, children: VNodeChildren): VNode;
export function h(sel: string,data: VNodeData | null,
  children: VNodeChildren): VNode;
```
><h2 id='5'>5. Snabbdom init</h2>>
```js
// 返回 patch()函数（高阶函数）
const patch = init([])
let vnode = h(
  'div#container.cls', //sel
  'Hello World')
// 第一个参数：旧的 VNode，可以是 DOM 元素
// 第二个参数：新的 VNode
// 返回新的 VNode
let node = patch(app, vnode)
```

><h2 id='6'>6. Snabbdom diff 算法过程</h2>>
```js
一. 入口 patch(oldVnode, newNode)
patch(oldVnode, newNode){
  // 判断sel, key是否相同
  if (sameVnode(oldVnode, newNode)) { 
    // 比较新旧node的差异, 更新到DOM上
    patchVnode(oldVnode, newNode)
  } else {
    // 创建节点的真实DOM元素(vnode.elm), 不渲染
    // 插入newNode
    // 删除旧oldVnode
  }
  // 返回newNode
  return newNode
}

二. patchVnode(oldVnode, newNode) 比较新旧vnode差异
  1. 如果新旧vnode一样, 不需要比较了
  2. newNode没有text节点, 继续比较它的子节点
    2.1 都有子节点
      if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue)
    2.2 新节点有子节点
    2.3 老节点有子节点
    2.4 清空老节点文本内容
  3. 新旧节点的text不相等 (相等就不用判断了)
三. updateChildren(elm, oldCh, ch)
  1. 同级别之间的比较
    1.1 旧开始节点, 新开始节点
    1.2 旧结束节点, 新结束节点
    1.3 旧开始节点, 旧结束节点
    1.4 旧结束节点, 新开始节点
    1.5 其他比较
  2. 循环结束的收尾工作
    2.1 老节点遍历完, 新节点有剩余
    2.2 新节点遍历完, 老节点有剩余
```