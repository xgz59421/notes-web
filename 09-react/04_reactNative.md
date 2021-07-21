
## ReactNative
- [1. 样式写法](#1)
- [2. 内部样式](#2)
- [3. 非层叠性](#3)
- [4. 相对单位rpx](#4)
- [5. 弹性盒子布局flex](#5)
- [6. fetch](#6)

--------
><h2 id='1'>1. 样式写法</h2>
```jsx
render() {
  return (
    {/* 手机只有一种单位: dp 物理像素. 所以不需要写单位 */}
    <Text style={{fontSize: 30}}> Hello World! </Text>
  );
}

```
><h2 id='2'>2. 内部样式</h2>
```jsx
// rnc
// 样式 class 的书写
// 在 RN 开发中, 没有 .css 文件. 不存在class写法
// StyleSheet: 专门在外部存储 样式 的类
import {Text,StyleSheet} from 'react-native';
render() {
  return (
    <Text style={ss.danger}>DANGER</Text>
  );
}
// StyleSheet: 固定的 把样式写到JSX 外部的方式
const ss = StyleSheet.create({
  danger: {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
});
```
><h2 id='3'>3. 非层叠性</h2>
```jsx
// RN  是 非层叠 样式
// css: 层叠样式.  子组件的样式 是所有父组件的样式集合
// Text是一个特例: 可以把样式继承给子元素的 Text
render() {
  return (
    // 容器的 color 属性, 没有传递继承给 子元素
    <View style={{color: 'red'}}>
      {/* Text是一个特例: 可以把样式继承给子元素的 Text */}
      <Text style={{color: 'red', fontSize: 30}}>
        <Text style={{fontSize: 40}}>¥</Text> 999.99{' '}
      </Text>
    </View>
  );
}
```
><h2 id='4'>4. 相对单位rpx</h2>
```jsx
import {Dimensions, Text, View} from 'react-native';
// 相对单位rpx. 用于适配不同的屏幕大小.
// rn本身没有rpx单位, 需要自制.
// rpx: 非常普遍的一种 手机端的适配方案.  等比例书写界面
// 人为规定 美工提供的效果图 宽度为 750rpx
// 读取设备的实际宽度: w,  使用 w/750 就可以得到 1rpx 的实际宽度
// 获取实际的设备宽度: 固定写法;  Dimensions 是代表当前设备信息的类
const {width, height} = Dimensions.get('screen');
function rpx(x) {
  return (width / 750) * x; // 屏幕宽度分750份, 乘以份数: 就可以得到份数对应的实际像素值
}
// 箭头函数语法糖 可以简化:
const rpx = x => (width / 750) * x;
render() {
  return (
    <Text style={{width: rpx(280)}}>textInComponent</Text>
  );
}
```
><h2 id='5'>5. 弹性盒子布局</h2>

```jsx
// 弹性盒子布局 flex
// 移动端主流的布局方式
// rncs
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={ss.box}>
        <Text style={ss.one}> one </Text>
        <Text style={ss.two}> two </Text>
        <Text style={ss.three}> three </Text>
      </View>
    );
  }
}
const ss = StyleSheet.create({
  box: {
    // View相当于div, 默认就是 flex 弹性盒子布局
    backgroundColor: 'pink',
    height: 450,
    //弹性盒子布局的内容方向: 主轴
    flexDirection: 'column', //默认: 竖向
    flexDirection: 'column-reverse', // 竖向 逆向
    flexDirection: 'row', //横向
    flexDirection: 'row-reverse', //横向逆向

    // 交叉轴: 与主轴方向垂直的方向
    alignItems: 'flex-start', //默认值: 头部对齐
    alignItems: 'flex-end', //尾部对齐
    alignItems: 'center', //居中对齐

    // 主轴布局: 目前是 右 -> 左
    justifyContent: 'center', // 居中
    justifyContent: 'flex-end', // 结尾对齐
    justifyContent: 'flex-start', //默认值: 开头对齐

    justifyContent: 'space-around', //空白环绕
    justifyContent: 'space-between', //中间间隔
    justifyContent: 'space-evenly', //空白均分
  },
  one: {
    backgroundColor: 'red',
    height: 100,
    fontSize: 30,
    // 主轴方向的 宽度自适应
    // 子元素中 带有flex 属性的元素, 会根据份数瓜分剩余的空间
    flex: 1,
  },
  two: {
    flex: 2,
    backgroundColor: 'blue',
    height: 100,
    fontSize: 30,
    //子元素的 交叉轴布局: 只修改当前元素
    alignSelf: 'flex-start', //开头对齐
  },
  three: {backgroundColor: 'green', height: 100, fontSize: 30},
});
```
><h2 id='6'>6. fetch</h2>
```jsx
// 网络请求: RN本身集成了网络请求模块, 可以直接使用!
import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
export default class App extends Component {
  state = {result: []};
  componentDidMount() {
    // 挂载周期
    // axios.get(url).then(res=>{})
    const url = 'https://api.apiopen.top/getWangYiNews';
    // 与axios不同: axios的then 接收的是经过处理之后的结果, Response -> JSON
    // fetch 的结果是 Response 原始值.  需要用 json() 转化成 JSON 结构才能正常使用.
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);

        this.setState({result: res.result});
      });
    // Debug模式: 可以通过浏览器查看 打印内容;  格式更易读;
    // 强调: debug本身会造成很多bug, 平时不推荐开启. 关闭与开启的方式都如下:
    // 模拟器/真机 提供了专门的调试模式
    // 真机使劲摇...
    // 模拟器菜单中 选择 debug
  }
  show = () =>
    this.state.result.map((item, index) => (
      <Image
        key={index}
        source={{uri: item.image}}
        style={{width: 200, height: 140}}
      />
    ));
  render() {
    return <ScrollView>{this.show()}</ScrollView>;
  }
}
```










