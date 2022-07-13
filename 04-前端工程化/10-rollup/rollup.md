## rollup
```
模块化打包工具的选择:
应用程序开发: webpack (大而全)
库/框架开发: rollup (小而美)
```

#### rollup优缺点
```
rollup 优势:
输出结果更加扁平
自动移除未引用代码
打包结果依然完全可读

rollup 缺点:
加载非ESModule的第三方模块比较复杂
模块始终被打包到一个函数中, 无法实现HMR(热更新)
浏览器环境中, 代码拆分功能依赖AMD库
```

#### rollup安装运行
```bash
# 安装:
yarn add rollup -dev

# help:
yarn rollup

# 命令行运行:
yarn rollup ./src/index.js --format  iife --file dist/bundle.js
npx rollup ./src/index.js --format  iife --file dist/bundle.js

# 配置文件运行
# 运行默认配置文件rollup.config.js
yarn rollup --config ()

# 运行指定配置文件
yarn rollup --config rollupxxx.config.js
```

#### format:
```
amd: 输出成AMD模块规则，RequireJS可以用
cjs: CommonJS规则，适合Node，Browserify，Webpack 等
es: 默认值，不改变代码
iife: 输出自执行函数，最适合导入html中的script标签，且代码更小
umd: 通用模式，amd,cjs,iife都能用
```

#### 常用配置
```js
// rollup 自身只支持 es module 打包, 其他需要插件
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

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