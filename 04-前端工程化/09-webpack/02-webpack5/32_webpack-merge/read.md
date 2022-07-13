```js
"scripts": {
  // 生产
  "build": "webpack --config ./config/webpack.common.js --env production",
  // 开发
  "serve": "webpack serve --config ./config/webpack.common.js --env development"
}

// 分别测试 生产环境, 开发环境
// 生产环境 没有devServer中的proxy, 所以会网络错误
// 防止路径问题, 路径单独提取出一个模块
```

```js
webpack.common: 共有配置
webpack.dev: 开发环境配置
webpack.prod: 生产环境配置
webpack.base: merge
```