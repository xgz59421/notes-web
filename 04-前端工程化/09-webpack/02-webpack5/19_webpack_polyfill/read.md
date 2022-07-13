```js
polyfill是什么：
webpack5之前默认添加 polyfill

@babel/preset-env 预设不能转换所有js

npm i @babel/polyfill 
@babel/polyfill 包很大, 不建议使用, 本例已经卸载掉

现在流行安装下面两个包 
core-js
regenerator-runtime

使用:
webpack.config.js
{
  test: /\.js$/,
  exclude: /node_modules/,  // 使用usage打包时, 不使用node_modules 中其他的polyfill
  use: ['babel-loader']
}
babel.config.js
{
  // false: 不对当前的JS处理做 polyfill 的填充
  // usage: 依据用户源代码当中所使用到的新语法进行填充
  // entry: 依据我们.browserslistrc筛选出来的浏览器进行填充
      // 使用entry需要手动引入
      // import "core-js/stable";
      // import "regenerator-runtime/runtime"
  useBuiltIns: 'entry',
  // 设置 corejs 版本, 
  // 否则 useBuiltIns:'usage' 会报错
  // 否则 useBuiltIns:'entry' 会警告
  corejs: 3   
}

```