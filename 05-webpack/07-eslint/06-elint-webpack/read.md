#### eslint 结合 webpack

```js
1. 下载 https://github.com/zce/zce-react-app.git
2. 安装 eslint 模块
3. 安装 eslint-loader 模块
4. 初始化 .eslintrc.js 配置文件

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

npx webpack
```