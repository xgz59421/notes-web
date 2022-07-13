```js
抛出的问题: 
use: [
  'style-loader',
  // 此位置 login.css中 引入了@import './test.css'
  // test.css中需要'postcss-loader',进行转换
  // 但是'postcss-loader',已经工作完毕了
  'css-loader',   
  'postcss-loader'
]

解决: 
use: [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  },
  'postcss-loader'
]
- importLoaders: 参数;  
  这个参数用于配置「css-loader 作用于 @import 的资源之前」有多少个 loader

比如: 
use: [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2,  //那此处就是2
    }
  },
  'postcss-loader',
  'xxx-loader',
]
```