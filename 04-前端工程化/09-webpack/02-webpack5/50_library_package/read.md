webpack 打包自己的库
```js
module.exports = {
  output: {
    filename: 'sy_utils.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',  // 所有模块化的集合
    library: 'syUtil',  // 导出模块使用的类名称
    globalObject: 'this'
  }
}

npm run build 
在dist中 手写test.html F12 测试 syUtil 导出的函数
syUtil.foo1()
```