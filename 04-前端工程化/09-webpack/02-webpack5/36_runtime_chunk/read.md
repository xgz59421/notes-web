```js
runtimeChunk 优化配置

optimization: {
  // 单独把index.js 处理js操作的代码提取出来, 并缓存到浏览器中
  // 比如一些信息清单, import, require 等
  runtimeChunk: true, // 默认false
}


------------------------------------------
测试: runtimeChunk: 设置 ture, 修改title.js中数据观察打包结果

index.e9819c0b.bundle.js (不变)
runtime~index.9e197cb8.bundle.js
title.ce5309d3.bundle.js

修改title.js (浏览器缓存了index.js, 只请求runtime.js 和 title.js)
index.e9819c0b.bundle.js (不变, 浏览器可以缓存)
runtime~index.047e39c0.bundle.js
title.6a91877c.bundle.js



```