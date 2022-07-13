```js
plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'html-webpack-plugin',
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    })
  ]

HtmlWebpackPlugin: 
  安装: npm install --save-dev html-webpack-plugin
  1. 若项目没有'index.html', 则自动生成默认'index.html'
  2. 可配置html 模板

DefinePlugin: (webpack自带)
  1. 创建一个在编译时可以配置的全局常量
  2. 值得注意, 设置的值需要字符串再次包一层,否则会报错 BASE_URL: '"./"' 
```