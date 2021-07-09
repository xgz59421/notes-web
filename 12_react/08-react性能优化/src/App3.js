import React from "react"
// 纯组件只能浅层比较, 深层比较 shouldComponentUpdate
// 返回true: 重新渲染
// 返回false: 阻止重新渲染

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {name: "张三", age: 20, job: "waiter"}
  }
  componentDidMount() {
    setTimeout(() => this.setState({ job: "chef" }), 1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 只有姓名和年龄更改重新渲染
    if (this.state.name !== nextState.name || this.state.age !== nextState.age) {
      return true
    }
    return false
  }

  render() {
    console.log("rendering")
    let { name, age, job } = this.state
    return <div>{name} {age} {job}</div>
  }
}