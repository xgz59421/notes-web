```js

entry: {
  index: './src/index.js',
  main: './src/main.js'
},
optimization: {
  minimizer: [
    new TerserPlugin({
      extractComments: false,
    }),
  ],
  splitChunks: {
    chunks: 'all',  // async(异步) initial(同步) all(都有)
    // 通常minSize, maxSize 设为同一值
    minSize: 20000, // 要生成的块的最小大小（以字节为单位）
    maxSize: 20000,
    // 在拆分之前，模块必须在块之间共享的最少次数
    // 与minSize和maxSize 有优先级关系
    minChunks: 1, 
    cacheGroups: {
      syVendors: {
        // 拆分第三方js
        test: /[\\/]node_modules[\\/]/,
        filename: 'js/[id]_vendor.js',
        priority: -10,
      },
      default: {
        // 单独拆分 引入多次的 title.js
        // index.js, main.js 个引入一次
        minChunks: 2,
        filename: 'js/syy_[id].js', 
        priority: -20,
      }
    }
  }
},
```