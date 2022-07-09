#### eslint 结合 webpack

```js
1. 下载 https://github.com/zce/zce-react-app.git
2. 安装 eslint 模块
3. 安装 eslint-loader 模块
4. 初始化 .eslintrc.js 配置文件

webpack.config:
module: {
  rules: [
    {
      test: /\.js$/, 
      exclude: /node_modules/, 
      use: 'babel-loader'
    },
    {
      // 添加es-loader
      test: /\.js$/, 
      exclude: /node_modules/, 
      use: 'eslint-loader',
      enforce: 'pre'  // 相对其他js 校验提前
    }
  ]
},

.eslintrc.js: 
module.exports = {
  方案二:  plugin:react/recommended
  extends: [
    'standard',
    // 代替 rules 和 plugins 引入react
    'plugin:react/recommended'
  ],
  方案一: 配置rules, plugins
  rules: {
    // 'react/jsx-uses-react': 2, // 2代表error
    // 'react/jsx-uses-vars': 2
  },
  plugins: [
    // // yarn add eslint-plugin-react --dev
    // // import React from 'react'
    // // import ReactDOM from 'react-dom'
    // // 解决引用了react 但是没有使用
    // 'react'
  ]
}

package.json: 
"scripts": {
  "dev": "webpack-dev-server",
  "build": "webpack",
  // 修复错误(src)
  "lint": "eslint --fix --ext .js,.vue src"
},
// 单独修复一个文件
npx eslint .\src\components\App.js --fix  // 解决错误
```