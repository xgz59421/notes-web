# react性能优化
##### 1.组件卸载执行清理
##### 2. 使用纯组件
##### 3. shouldComponentUpdate
##### 4. memo
##### 5. memo 自定义方法(参数)
##### 6. 路由组件懒加载
##### 7. 根据条件使用组件懒加载
##### 8. 使用Fragment避免额外标记 或者 <></> (简写)
##### 9. 避免使用内联函数
```js
  onChange={
    e => this.setState({ 
      inputValue: e.target.value 
  })}
  // 正确的如下
  <input value={this.state.inputValue} 
    onChange={this.setInputValue} />
```
##### 10. 构造函数更正this效率比较高
```js
constructor() {
  super()
    // 方式一
    // 构造函数只执行一次, 所以函数 this 指向更正的代码也只执行一次.
  this.handleClick = this.handleClick.bind(this)
}
handleClick() {console.log(this)}
render() {
  // 方式二 
  // 问题: render 方法每次执行时都会调用 bind 方法生成新的函数实例.
  return <button onClick={this.handleClick.bind(this)}>按钮</button>
}
```
##### 11. 避免使用内联样式属性
```html
<div style={{ backgroundColor: "skyblue" }}>App works</div>
```
##### 12. 优化条件渲染
##### 13. 避免重复无限渲染
```
比如:
不要调用 setState 方法
不要使用其他手段查询更改原生 DOM 元素
```
##### 14. 为组件创建错误边界
##### 15. 避免数据结构突变
##### 16. 依赖优化,减少build包体积大小
```js
1. config-overrides.js
2. 修改 package.json 构建命令
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build"
},
```

