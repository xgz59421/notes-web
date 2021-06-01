## rollup
```js
// 应用程序开发 webpack
// 库/框架开发使用rollup
```
```js
`安装依赖`:
// yarn add rollup -dev

`help`: 
// yarn rollup

`0配置运行`:
// yarn rollup ./src/index.js --format  iife --file dist/bundle.js

`配置文件`：
// rollup.config.js
`运行`:
// yarn rollup --config
`指定配置文件运行`:
// yarn rollup --config rollup.config.js

// 自身只支持 es module 打包, 其他需要插件
```
```js
`常用配置`:
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// format:
// amd - 输出成AMD模块规则，RequireJS可以用
// cjs - CommonJS规则，适合Node，Browserify，Webpack 等
// es - 默认值，不改变代码
// iife - 输出自执行函数，最适合导入html中的script标签，且代码更小
// umd - 通用模式，amd,cjs,iife都能用
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    // 导入json文件的插件
    // yarn add rollup-plugin-json --dev
    json(),
    // 使用npm模块名称 导入第三方模块,否则导入不进去
    // yarn add rollup-plugin-node-resolve --dev
    resolve(),
    // 加载commonjs 模块
    // yarn add rollup-plugin-commonjs --dev
    commonjs()
  ]
}
```

```js
`分包: `
export default {
  // input: ['src/index.js', 'src/album.js'],
  // 多入口打包
  input: {
    foo: 'src/index.js',
    bar: 'src/album.js'
  },
  output: {
    dir: 'dist',
    format: 'amd'
  }
}
```