tree shaking 主要针对es module代码

```js
// usedExports = true 告诉webpack 标记 没有使用的代码
// 配合 minimize：true 和 new terserplugin() 
optimization: {
  usedExports: true,
  minimize: true,
  minimizer: [
    new TerserPlugin({
      extractComments: false,
    }),
  ]
},
```