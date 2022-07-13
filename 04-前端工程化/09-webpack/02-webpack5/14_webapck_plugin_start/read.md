## plugins
插件目的在于解决 loader 无法实现的其他事

```js
webpack 插件是一个具有 apply 属性的 JavaScript 对象。
apply 属性会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问

用法：
由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入 new 实例

plugins: [
  new CleanWebpackPlugin(),  // 删除打包dist
  new MyPlugin()
]

class MyPlugin{
 constructor(){}
 apply()
}
```