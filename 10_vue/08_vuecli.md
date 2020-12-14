## vue 指令

- [1. 安装](#1)
- [2. 创建一个新项目](#2)
- [3. 引入导出模块](#3)
- [4. public与src](#4)

--------
><h2 id='1'>1. 安装或升级</h2>
- 安装一个可以反复生成脚手架项目的工具（老母鸡）
  ```
  npm install -g @vue/cli
  vue --version
  ```

><h2 id='2'>2. 创建一个新项目</h2>
- 命令行输入
  ```
  vue create hello-world
  ```
  ```bash
  # 用淘宝镜像网址更快安装
  Use https://registry.npm.taobao.org for faster installation? (Y/n) "Y"
  Please pick a preset: (Use arrow keys)
    > Default ([Vue 2] babel, eslint)
    > Default (Vue 3 Preview) ([Vue 3] babel, eslint)
    > Manually select features  "手工选择功能"
  # 勾选你需要的功能
  Check the features needed for your project:
    ( ) Choose Vue version
    # 脚手架中用了很多ES6甚至ES7的新语法，大多数浏览器不支持。所以不要Babel将新的语法翻译为ES5的语法，让大多数浏览器都能支持。
    (*) Babel 
    ( ) TypeScript
    ( ) Progressive Web App (PWA) Support
    # 单页面应用的核心组件
    (*) Router 
    # 状态管理
    (*) Vuex
    ( ) CSS Pre-processors
    ( ) Linter / Formatter
    ( ) Unit Testing
    ( ) E2E Testing
  # 是否使用history模式作为路由器的导航方式
  Use history mode for router? 
  # hash: #/相对路径
	# history: /相对路径 - 需要后端工程师协助配置首页重定
  (Requires proper server setup for index fallback in production) (Y/n)  "n"
  向机制
  #将各项配置信息放在一个package.json文件中，还是分别放在不同的配置文件中
  In dedicated config files
    In package.json "放在一个package.json文件中"
  #是否将当前选择作为将来项目的默认配置
  Save this as a preset for future projects? (y/N)  "N"
  ```
  ```
  npm run serve
  ```
><h2 id='3'>3. 引入导出模块</h2>
1. 引入模块
- import
  ```javascript
  import axios from "axios";
  import './assets/css/reset.css'
  ```
- require 按需引入
  ```javascript
  const echarts = require("echarts");
  ```
2. 导出模块
    ```
    如果一个模块希望被别人引用,必须用export default xxx方式抛出自己
    export default axios
    About.vue 没有export default 的一个js文件,也是一个模块,只不过没有js内容的模块而已
    ```
><h2 id='4'>public与src</h2>
- `public`: 存放引入编译好的第三方文件,比如jq.js, reset.css 
- `src`: 自己编写的程序