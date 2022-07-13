```js
打包图片：
 1. img: src
  1.1 使用 require 导入图片，此时如果不配置 esModule: false ，则需.default 导出
  1.2 也可以在配置当中设置 esModule: false
  1.3 采用 import xxx from 图片资源，此时可以直接使用 xxx

 2. css: background-image: url('../img/02.react.png')
    注意配置'css-loader'中 options.esModule = false
    否则会dist出现一个二进制的png, 内容为xxx.default
 {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    esModule: false
  }
},

```
