## vue3.x

```
https://v3.cn.vuejs.org/
```

- [1. vue3.x 与 2.x 区别](#1)
- [2. vue3.x packages 目录结构](#2)
- [3. vue3.x 不同的构建版本](#3)
- [4. Composition API](#4)
- [5. 响应系统升级](#5)
- [6. 编译优化](#6)
- [7. vite](#7)
- [8. vue3.x 响应式系统的实现原理](#8)

---

#### <div id='1'>1. vue3.x 与 2.x 区别</div>

```bash
1. 源码typescript重写
2. monorepo (管理源代码，一个仓库管理多个包)
3. Composition API (解决超大组件，不好拆分和重用的问题)
4. 性能提升(proxy重写了响应式的代码，重写了虚拟dom，渲染和update都得到了提升)
5. vite (开发阶段不需要打包，直接运行项目)
```

#### <div id='2'>2. vue3.x packages 目录结构</div>

```
|-- packages
  |-- compiler-core 和平台无关的编译器
  |-- compiler-dom  浏览器平台下的编译器，依赖于 compiler-core
  |-- compiler-sfc  单文件组件编译器，依赖于 compiler-core 和 compiler-dom
  |-- compiler-ssr  服务端渲染的编译器，依赖于 compiler-dom
  |-- reactivity    数据响应式系统
  |-- runtime-core  和平台无关的运行时
  |-- runtime-dom   针对浏览器的运行时，处理原生 DOM API 和 事件等
  |-- runtime-test  为测试所编写的轻量级运行时，由于它渲染出来的 DOM 树其实是一个 js 对象，所以这个运行时可以运行在所有的 js 环境里，可以用它来测试渲染是否正确，还可以用于序列化 DOM，触发 DOM 事件，以及记录更新中的某次 DOM 操作
  |-- server-renderer  用于服务端渲染
  |-- shared           vue 内部使用的公共 api
  |-- size-check       私有的包，不会发布到 npm，作用是在 tree-sharking 后检查包的大小
  |-- template-explorer  浏览器里运行的实时编译组件，它会输出 render 函数
  |-- vue  用来构建完整版的 vue，依赖于 compiler 和 runtime
```

#### <div id='3'>3. vuex.x 不同的构建版本</div>

```java
不再构建 umd 模块化方式，umd 模块化方式会让代码有更多的冗余，要支持多种模块化的方式，把 cjs、esm、（IIF）自执行分别打包到了不同的文件中。

1. cjs
// CommonJs，完整版的vue，包含编译器和运行时
  vue.cjs.js (开发版，未被压缩的代码)
  vue.cjs.prod.js (生产版，压缩的代码)

2. global
// 全局，可以直接通过 script 标签来导入，导入 js 后会增加一个全局的 vue 对象
  vue.global.js (完整版的vue，包含编译器和运行时)
  vue.global.prod.js
  vue.runtime.global.js (只包含运行时的构建版本)
  vue.runtime.global.prod.js

3. browser
// esmodule,浏览器的原生模块化的方式，在浏览器中可以直接使用 type="module" 的方式直接导入这些模块。
  vue.esm-browser.js (完整版的 Vue，包括运行时和编译器)
  vue.esm-browser.prod.js
  vue.runtime.esm-browser.js (只包含运行时的构建版本)
  vue.runtime.esm-browser.prod.js
4. bundler
// 没有打包所有代码，配合打包工具来使用，都是用 ESModule 模块化方式，内部通过 import 导入了 runtime-core，构建体积最小
  vue.esm-bundler.js (完整版的Vue，内部导入了 runtime-compiler)
  vue.runtime.esm-bundler.js (vue-cli创建项目默认导入的js，只导入了运行时，是vue的最小版本。在项目开发完毕后只会打包使用到的代码，可以让 vue 的体积更小。)
```

#### <div id='4'>4. Composition API</div>

```js
仓库: https://github.com/vuejs/rfcs
中文: https://v3.cn.vuejs.org/api/composition-api.html
英文: https://vuejs.org/guide/extras/composition-api-faq.html

1. Composition API 设计动机
  解决 Options Api (vue2.x)处理大型复杂的组件
  1.1 包含一个描述组件的选项 （data、methods、props等）的对象。
  1.2 Options API 开发复杂组件，同一功能逻辑代码会被拆分到不同选项

2. Composition Api (基于函数的 API)
  import {
    createApp,
    reactive,
    onMounted，
    onUnmounted,
    toRefs,
    ref,
    computed,
    watchEffect
  } from './node_modules/vue/dist/vue.esm-browser.js'
3. 可以更灵活的组织组件的逻辑
  createApp({
    setup () {
      return {

      }
    }
  }).mount('#app')
```

#### <div id='5'>5 响应系统升级</div>

```js
vue2.x: 响应系统核心为 Object.defineProperty
1.只在初始化递归处理对象以及子对象的属性(转换为get, set)
2. 动态新增属性需要 使用Vue.set
3. 监听不到属性删除
4. 监听不到数组索引和length属性

vue3.x: 使用proxy对象重写响应系统
1. 代理对象可以拦截属性的访问，复制，删除等操作
2. 不需要初始化遍历所有的属性, 如果有多层属性嵌套的话, 只有访问某个属性时才会递归处理下一级属性 (嵌套支持，get 里面递归调用 Proxy 并返回)
3. 可以监听动态新增属性
4. 可以监听删除属性
5. 默认监听数组索引和length属性
```

#### <div id='6'>6. 编译优化</div>

```js
https://vue-next-template-explorer.netlify.app/
1. diff 算法优化
  Vue.js 2.x 通过标记静态节点，优化 diff 的过程
  Vue.js 3.x 通过标记和提升所有的静态根节点，diff 的时候只需要对比动态节点内容
2. Fragments ( 模版中不需要创建唯一根节点(需要升级'Vetur'插件,否则编译器会报错 )
3. 静态提升
4. Patch flag
5. 缓冲事件处理函数
```

#### <div id='6'>6. 优化打包体积</div>

```js
1. vue3.0中移除了一些不常用API
   例如：inline-template、filter等
2. Tree-shaking （依赖esmodule，通过编译阶段的静态分析，找到没有引入的模块，在打包的时候过滤掉）
   比如 transition、keep-alive 都是按需引入的

```

#### <div id='7'>7. vite</div>

ES module 现在浏览器都支持 ES module（除了 IE）

```js
了解浏览器加载模块过程
通过<script type="module" src="..."></script>
支持module的script默认延迟执行 （在dom创建完毕，出发DOMContentLoaded事件前执行）
```

```js
vite 是一个面向现代浏览器的一个更轻，更快的web应用开发工具
它基于ECMAScript标准原生模块系统实现（避免开发环境下打包，从而开发速度）

1. Vite vs Vue-cli:
  Vite 在开发模式下不需要打包可以直接运行
  Vue-cli 开发模式下必须对项目打包才可运行
  vite打包: rollup (基于es module)
  Vue-cli打包: webpack

2. 特性:
  1. 快速冷启动
  2. 模块热更新
  3. 按需编译
  4. 开箱即用

3. 创建项目:
  方式一:
    npm init vite-app 项目名
    npm install
    npm run dev
  方式二: （可以使用其他框架）
    npm init vite-app --template react
    npm init vite-app --template preact
```

#### <div id='8'>8. vue3.0 响应式系统的实现原理</div>

```js
1、reactive:
接收一个参数，判断这参数是否是对象。
  不是对象则直接返回这个参数，不做响应式处理
  如果是对象，则返回new Proxy(对象，handle)
handle = {
  `get`:
    收集依赖（track）
    返回当前 key 的值。
    如果当前 key 的值是对象，则递归调用 reactive()
    如果当前的 key 的值不是对象，则返回当前 key 的值
  `set`:
    设置的新值和老值不相等时，更新为新值，并触发更新 (trigger)
  `deleteProperty`:
    当前对象有这个 key 的时候，删除这个 key 并触发更新 (trigger)
  }
2、effect: 接收一个函数作为参数。作用是：访问响应式对象属性时去收集依赖
3、track:
接收两个参数：target 和 key
如果没有 activeEffect，则说明没有创建 effect 依赖
如果有 activeEffect，则去判断 WeakMap 集合中是否有 target 属性，WeakMap 集合中没有 target
属性，则 set(target，(depsMap = new Map()))
WeakMap 集合中有 target 属性，则判断 target 属性的 map 值的 depsMap 中是否有 key 属性depsMap 中没有 key 属性，则 set(key，(dep = new Set())) depsMap 中有 key属性，则添加这个 activeEffect
4、trigger:
判断 WeakMap 中是否有 target 属性
WeakMap 中没有 target 属性，则没有 target 相应的依赖
WeakMap 中有 target 属性，则判断 target 属性的 map 值中是否有 key 属性，有的话循环触发收集的 effect()

```
