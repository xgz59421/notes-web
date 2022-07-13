```js
//  source map 映射--在调试的时候可以定位到源代码中的信息 
// 不同的值会明显影响到构建(build)和重新构建(rebuild)的速度
devtool: 'source-map',


// 测试: 打包运行, index.html, 点击错误位置
devtool: false (默认)
  eval
  source-map 比较全, vue在用这个
  cheap-module-source-map 个人开发, react一般用这个
```