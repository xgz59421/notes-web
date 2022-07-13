#### 代码分离
```js
能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件

有三种常用的代码分离方法: 

入口起点：使用 entry 配置手动地分离代码。
  entry: {
    // main1: './src/main1.js',
    // main2: './src/main2.js'
  }
  // 引入一个第三方插件, 并单独为他打包
  entry: {
    // main1: { import: './src/main1.js', dependOn: 'lodash' },
    // main2: { import: './src/main2.js', dependOn: 'lodash' },
    // lodash: 'lodash',
  }
  // 引入多个第三方插件, 打成一个包
  entry: {
    // main1: { import: './src/main1.js', dependOn: 'shared' },
    // main2: { import: './src/main2.js', dependOn: 'shared' },
    // shared: ['lodash', 'jquery']
  }
防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
  entry: {
    index: './src/index.js'
  }
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false, // 去掉注释代码 生成的文件
      }),
    ],
    splitChunks: {
      chunks: 'all' // async initial all, 默认 async 异步
    }
  },
动态导入：通过模块的内联函数调用来分离代码。
```