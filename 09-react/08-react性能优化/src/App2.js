import { Component, PureComponent } from "react";
// 什么是纯组件:
// 1. 类组件继承 PureComponent
// 2. 函数组件使用 memo方法

// 浅层比较
// 比较引用地址和基础数据类型是否相同

// 纯组件进行浅层比较, 如果数据不变, 不重新渲染组件

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '张三'
    }
  }
  updateName(){
    setInterval(() => {
      this.setState({
        name: '张三'
      })
    }, 1000);
  }
  componentDidMount() {
    this.updateName()
  }
  render() {
    return <>
      <ReguarComponent name={this.state.name}/>
      <PureComponentDemo name={this.state.name}/>
    </>
  }
}

class ReguarComponent extends Component {
  render() {
    console.log('ReguarComponent');
    return <div>{this.props.name}</div>
  }
}

// PureComponent 纯组件
class PureComponentDemo extends PureComponent {
  render() {
    console.log('PureComponentDemo');
    return <div>{this.props.name}</div>
  }
}

export default App