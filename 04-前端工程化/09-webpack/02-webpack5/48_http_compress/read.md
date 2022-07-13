#### 编码的压缩版的资源
```js
npm i -D compression-webpack-plugin
plugins: [
  new CompressionPlugin({
    test: /\.(css|js)$/,
    // 最小压缩比例(压缩后除以压缩前) 默认0.8
    // 1则全部压缩
    minRatio: 0.8,
    // 体积大于多少就压缩
    threshold: 0,
    // 压缩算法
    algorithm: 'gzip'
  })
]
```