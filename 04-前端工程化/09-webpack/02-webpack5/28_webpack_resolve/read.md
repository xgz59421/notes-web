```js
resolve: {
  // 自动解析确定的扩展。
  // 默认值为 extensions: [".js", ".json"]
  extensions: [".js", ".json", '.ts', '.jsx', '.vue'], 
  // 创建 import 或 require 的别名，来确保模块引入变得更简单
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@abc': path.resolve(__dirname, 'src')
  }
},
```