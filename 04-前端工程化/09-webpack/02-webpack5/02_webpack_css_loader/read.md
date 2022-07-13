
```js
loader: 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件
css-loader: 会处理 import / require（） @import / url 引入的内容

使用 loader: 
1. 配置 webpack.config.js (推荐)
2. 内联 css-loader! // import 'css-loader!../css/login.css'
3. cli webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'

module: {
    rules: [
      // 1.标准写法
      // {
      // // 一般就是一个正则表达式，用于匹配我们需要处理的文件类型
      //   test: /\.css$/, 
      //   use: [
      //     {
      //       loader: 'css-loader'
      //     }
      //   ]
      // },

      // 2. 简写
      // {
      //   test: /\.css$/,
      //   loader: 'css-loader'
      // },

      // 3. 简写
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }

```