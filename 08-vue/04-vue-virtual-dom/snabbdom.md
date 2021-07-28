## Snabbdom
```js
`什么是虚拟DOM`
  Virtual DOM 虚拟DOM 是由普通的JS对象来描述DOM对象
```
--------

#### 1. 虚拟DOM作用
```js
1. 维护视图和状态的关系
2. 复杂是图情况下提升渲染性能
3. 跨平台
   浏览器平台渲染DOM
   服务端渲染 SSR(Nuxt.js/ Next.js)
   原生应用(Weex/React Native)
   小程序(mpvue/ uni-app)等
```

#### 2. 虚拟DOM库
```js
1. Snabbdom
   Vue.js 2.x 内部使用的虚拟DOM就是改造的 Snabbdom
   大约200多行代码
   通过模块可以扩展
   源码使用 TypeScript 开发
   最快的 VirtualDOM 之一
2. virtual-dom
```

#### 3. Snabbdom src 目录结构
```
├── package
│   ├── helpers
│   │   └── attachto.ts 定义了 vnode.ts 中 AttachData 的数据结构
│   ├── modules
│   │   ├── attributes.ts
│   │   ├── class.ts
│   │   ├── dataset.ts
│   │   ├── eventlisteners.ts
│   │   ├── hero.ts       example 中使用到的自定义钩子
│   │   ├── module.ts     定义了模块中用到的钩子函数
│   │   ├── props.ts
│   │   └── style.ts
│   ├── h.ts              h() 函数，用来创建 VNode
│   ├── hooks.ts          所有钩子函数的定义
│   ├── htmldomapi.ts     对 DOM API 的包装
│   ├── init.ts           加载 modules、DOMAPI，返回 patch 函数
│   ├── is.ts             判断数组和原始值的函数
│   ├── jsx-global.ts     jsx 的类型声明文件
│   ├── jsx.ts            处理 jsx
│   ├── thunk.ts          优化处理，对复杂视图不可变值得优化
│   ├── tovnode.ts        DOM 转换成 VNode
│   ├── ts-transform-js-extension.cjs
│   ├── tsconfig.json     ts 的编译配置文件
│   └── vnode.ts          虚拟节点定义
```

#### 4. Snabbdom init
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

#### 5. Snabbdom源码解析
[Snabbdom](https://github.com/snabbdom/snabbdom)
```js
1. init()设置模块, 创建patch()函数
2. 使用h()函数创建`js`对象(VNode)描述真实DOM
3. patch()比较新旧两个VNode
4. 把变化的内容更新到真实的DOM树
```

##### 5.1 h函数
```js
// h 函数的重载, 根据个数, 类型, 返回一个VNode
export function h(sel: string): VNode;
export function h(sel: string, data: VNodeData | null): VNode;
export function h(sel: string, children: VNodeChildren): VNode;
export function h(sel: string,data: VNodeData | null,
  children: VNodeChildren): VNode;
```
##### 5.2 vnode
```js
export function vnode (sel: string | undefined,
  data: any | undefined,
  children: Array<VNode | string> | undefined,
  text: string | undefined,
  elm: Element | Text | undefined): VNode {
  const key = data === undefined ? undefined : data.key
  return { 
    sel, 标签+选择器
    data, 存放用户设置的钩子函数
    children, 与text互斥,只能有一个
    text, 
    elm, 真实的dom
    key 
  }
}
```


##### 5.3 diff算法过程
###### 5.3.1 patch() 的函数整理过程
```js
patch(oldVnode, newNode){
  // 判断sel, key是否相同
  if (sameVnode(oldVnode, newNode)) { 
    // (难点) 比较新旧node的差异, 更新到DOM上
    patchVnode(oldVnode, newNode)
  } else {
    // 创建节点的真实DOM元素(vnode.elm), 不渲染
    // 插入newNode
    // 删除旧oldVnode
  }
  // 返回newNode
  return newNode
}
```

###### 5.3.2 patchVnode(oldVnode, newNode) 比较新旧vnode差异
```js
patchVnode(oldVnode, newNode) {
  // ch: newNode.children 新节点子节点
  // oldCh: oldVnode.children
  1. 如果新旧vnode一样, 不需要比较了 return
  2. newNode没有text节点(则有children), 继续比较它的子节点
    2.1 (oldCh&&ch) 都有子节点
      if (oldCh !== ch) updateChildren() // 对比所有子节点
    2.2 (ch) 新节点有子节点
      // 老节点清空text
      // 插入ch
    2.3 (oldCh) 老节点有子节点
      // 移除oldCh
    2.4 newNode.text
      // 清空老节点文本内容
  3. newNode有text节点 
    if (isDef(oldCh)) { 
      // 移除oldCh 对应的DOM
    }
    // 更新text值
}
```

###### 5.3.3 updateChildren(elm, oldCh, ch)
```js
updateChildren(elm, oldCh, ch)
1. 同级别之间的比较
  1.1 旧开始节点, 新开始节点
  1.2 旧结束节点, 新结束节点
  1.3 旧开始节点, 旧结束节点
  1.4 旧结束节点, 新开始节点
  1.5 其他比较
2. 循环结束的收尾工作
  2.1 老节点遍历完, 新节点有剩余
    // 添加剩余新节点
  2.2 新节点遍历完, 老节点有剩余
    // 删除剩余老节点

// 同级别之间的比较
while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
  // 比较开始和结束的四种情况
  // 1. 旧开始节点和新开始节点
  if (sameVnode(oldStartVnode, newStartVnode)) {
    // 比较新旧node的差异, 更新到DOM上
    patchVnode(oldStartVnode, newStartVnode)
    oldStartVnode = oldCh[++oldStartIdx]
    newStartVnode = newCh[++newStartIdx]
  } 
  // 2. 旧结束节点, 新结束节点
  else if (sameVnode(oldEndVnode, newEndVnode)) {
    patchVnode(oldEndVnode, newEndVnode)
    oldEndVnode = oldCh[--oldEndIdx]
    newEndVnode = newCh[--newEndIdx]
  } 
  // 3. 旧开始节点, 新结束节点
  else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
    patchVnode(oldStartVnode, newEndVnode)
    // 把旧的开始节点dom元素, 移动到旧的结束节点dom元素之后
    api.insertBefore(parentElm, oldStartVnode.elm!, api.nextSibling(oldEndVnode.elm!))
    oldStartVnode = oldCh[++oldStartIdx]
    newEndVnode = newCh[--newEndIdx]
  } 
  // 4. 旧结束节点, 新开始节点
  else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
    patchVnode(oldEndVnode, newStartVnode)
    // 把旧的开始节点dom元素, 移动到旧的结束节点dom元素之前
    api.insertBefore(parentElm, oldEndVnode.elm!, oldStartVnode.elm!)
    oldEndVnode = oldCh[--oldEndIdx]
    newStartVnode = newCh[++newStartIdx]
  } else {
    // 比较key, 旧节点找不到
    if (isUndef(idxInOld)) { 
      // 创建新节点， 放到老节点之前
    } 
    // 旧节点找到了
    else {
      elmToMove = oldCh[idxInOld]//存储老节点
      if (elmToMove.sel !== newStartVnode.sel) {
        // 创建新节点插入到最前面
      } else {
        patchVnode(elmToMove, newStartVnode)
        // 移动老节点 到旧节点之前
      }
    }
    newStartVnode = newCh[++newStartIdx]
  }
}
// 循环结束的收尾工作
if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
  if (oldStartIdx > oldEndIdx) {
    // 1.老节点遍历完, 新节点有剩余
    // 则, 添加剩余节点
  } else {
    // 2.新节点遍历完, 老节点有剩余
    // 则, 删除老节点剩余
  }
}
```