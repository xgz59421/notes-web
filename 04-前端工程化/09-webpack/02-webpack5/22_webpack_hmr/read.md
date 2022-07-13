```js
webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码
1. watch (webpack 自带) + live Server插件
  缺点: 
    1. 一个文件有变化, 就会编译整个项目
    2. 浏览器刷新
    3. 编译打包在内存中, 无需进行文件读写
    4. 不能实现局部刷新
2. webpack-dev-server
  解决watch缺点
3. webpack-dev-middleware


mode: 'development',
target: 'web',
devServer: {
  hot: true
}
因为我们在开发阶段配置'mode'为'development',
与我们配置的.browserslistrc文件的兼容性有冲突.
官方建议我们使用'taget':'web' 的方式来解决
```