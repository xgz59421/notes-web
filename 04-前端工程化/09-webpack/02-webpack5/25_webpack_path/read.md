```js
output: {
  // index.html 打包后 如何加载资源
  // 服务器 一般设置为  ''(浏览器会默认加 '/') 或者 '/'
  // 本地测试 一般设置 './'
  publicPath: '/lg'   
},
devServer: {
  // 服务开启时的目录, 一般与 output.publicPath 设置为同一值
  publicPath: '/lg', 
  // 告诉服务器从哪里找到所依赖的静态资源
  contentBase: path.resolve(__dirname, 'public'),
  // 观察修改的静态资源文件, 默认false
  watchContentBase: true
},

```