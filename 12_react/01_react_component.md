## React
- [1. JSX](#1)
- [2. 组件](#2)
- [3. 组件参数](#3)
--------

><h2 id='1'>1. JSX</h2>
```js
注意:
1. 脚本的引入顺序, 必须先 React 后 ReactDOM
2. 脚本必须带 : `type="text/babel"` 才能被 babel解析
```
```jsx
<div id="root"></div>
<script type="text/babel">
  //Facebook 研发了新的语法JSX
  //JSX: JavaScript XML  代表在JS中书写HTML
  const b = (
    <b id="b1" className="danger">
      Hello World!
    </b>
  );
  ReactDOM.render(b, root);
</script>

```
><h2 id='2'>2. 组件</h2>
```jsx
<div id="root"></div>
<script type="text/babel">
  React提供了两种组件的制作方式: 函数 和 类方式
    1.函数方式： 适合最基础的组件, 功能简单.
    2.函数做组件, 要求 函数名必须 大驼峰写法!
  function Hello() {
    //本质是: 
    // React.createElement('h1', {}, 'Hello World!')
    // babel工具会自动编译
    return <h1>Hello World!</h1>;
  }
  let h = Hello();
  // 语法糖:  Hello() 写法看着不像组件
  h = <Hello />; //本质是 Hello()

  // 复用性:  组件需要唯一的父
  // 在 JSX 中, 使用 {} 代表 JS代码
  <div>
    <Hello />
    <Hello />
    Hello()
    {Hello()}
    {Hello()}
  </div>
  ReactDOM.render(h, root);
</script>

```
><h2 id='3'>3. 组件参数</h2>
```jsx
<div id="root"></div>
1. function
<script type="text/babel">
  function HelloName(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  <div>
    <HelloName name="亮亮" />
    <HelloName name="铭铭" />
    <HelloName name="小新" />
    {HelloName({ name: "东东" })}
    {HelloName({ name: "东东" })}
  </div>
</script>

2. class
// 类组件的传参
class HelloName extends React.Component {
  // 父类的构造方法:
  // constructor(props) {
  //   this.props = props;
  // }
  render() {
    // this.props: 父类的构造方法中 声明的
    return <h1>Hello, {this.props.name}</h1>;
  }
}
let h = new HelloName({ name: "东东" }).render();
//语法糖 方法必须是 render(){}
h = <HelloName name="然然" />;
h = (
  <div>
    <HelloName name="然然" />
    <HelloName name="铭铭" />
    <HelloName name="文华" />
  </div>
);

```







