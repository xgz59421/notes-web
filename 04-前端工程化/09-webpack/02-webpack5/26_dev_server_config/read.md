```js
devServer: {
  // hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，
  // 前者会自动刷新页面，后者不会刷新页面
  hot: true,
  hotOnly: true,   
  port: 4000,
  open: false,
  compress: true,  // 启用gzip 压缩
  historyApiFallback: true
  // 当使用 HTML5 History API 时, (刷新非'./' 路径浏览器会认为是发送请求)
  // 任意的 404 响应都可能需要被替代为 index.html
}


```