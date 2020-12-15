## vue 指令

- [1. 安装](#1)
- [2. 创建一个新项目](#2)
- [3. 引入导出模块](#3)
- [4. public与src](#4)
- [5. vue.config.js](#5) 
- [6. http-proxy方式跨域](#6) 
- [7. .env](#7)

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
><h2 id='4'>4. public与src</h2>
- `public`: 存放引入编译好的第三方文件,比如jq.js, reset.css 
- `src`: 自己编写的程序

><h2 id='5'>5. vue.config.js</h2>
- `postcss-px2rem` px转化rem 
  ```javascript
  const px2rem = require('postcss-px2rem')
  // 基准大小 baseSize，需要和rem.js中相同
  const postcss = px2rem({
    remUnit: 75
  })
  ```
- 按需加载路由
  ```javascript
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  }
  ```
><h2 id='6'>6. http-proxy方式跨域</h2>
- 在服务器端没有配置CORS或JSONP跨域的情况下
  ```javascript
  vue.config.js中:
    module.exports={
      devServer: {
      // 是否自动打开页面
      open: true,
      // 域名
      host: '0.0.0.0',
      // 端口号
      port: '8090',
      // 是否使用https
      https: false,
      proxy: {
        '/api': { //为所有服务器端接口起一个别名前缀，为了和vue脚手架中其它页面的路由地址区分
          target: `http://localhost:5050`,
          changeOrigin: true, //跨域
          pathRewrite: {
            //因为真实的服务器端地址中是不包含/api的，所以
            '^/api': '' //应该将程序中的/api删除(替换为空字符串)，再和target中的基础路径拼接起来作为发送到服务器的最终请求地址。
          }
        }
      }
    }
  }
  ```

><h2 id='7'>7. .evn</h2>
- 开发环境 vs 生产环境
  ```javascript
  同package.json文件创建文件:
    .env.dev
    .env.test
  js中使用文件:
  console.log('env配置: ', process.env);
  console.log('env配置api:', process.env.VUE_APP_BASE_API);
  ```
  ```bash
  .env.dev:
    # 环境
    NODE_ENV = 'dev'
    # 接口地址
    VUE_APP_BASE_API = '/api/dev'
    # 打包文件名
    VUE_APP_DIR_NAME = 'dev'
  ```
  ```json
  package.json:
    "scripts": {
      "serve": "vue-cli-service serve",
      "lint": "vue-cli-service lint",
      "dev": "vue-cli-service serve --mode dev",
      "test": "vue-cli-service serve --mode test",
      "build": "vue-cli-service build --mode prod"
    },
  ```