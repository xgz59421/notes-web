// rncs
// flex 布局

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      // RN的容器 view 默认是 flex 弹性盒子布局:
      <View style={ss.box}>
        <Text style={ss.one}> One </Text>
        <Text style={ss.two}> Two </Text>
        <Text style={ss.three}> Three </Text>
      </View>
    );
  }
}

const ss = StyleSheet.create({
  box: {
    backgroundColor: 'pink',
    height: 400,

    // flexDirection:内容的布局方向
    flexDirection: 'row-reverse', // 行-逆向
    flexDirection: 'column', // column: 列
    flexDirection: 'column-reverse', // 列-逆向
    flexDirection: 'row', //row: 行

    // 交叉轴:  与主轴垂直的方向flexDirection
    alignItems: 'stretch', //默认: 拉伸充满
    alignItems: 'flex-start', //起始对齐
    alignItems: 'flex-end', //结尾对齐
    alignItems: 'center', //居中

    // 主轴布局:
    justifyContent: 'center', //居中
    justifyContent: 'flex-end', //结尾
    justifyContent: 'flex-start', //默认: 头对齐
    justifyContent: 'space-between', //空白间隔中间
    justifyContent: 'space-around', //空白环绕元素周围
    justifyContent: 'space-evenly', //空白均分
  },
  one: {
    backgroundColor: 'red',
    fontSize: 40,
    // 子元素自身 在交叉轴的布局方式: 会覆盖父元素的规定
    alignSelf: 'stretch',

    // 子元素在主轴上的份数
    flex: 1,
  },
  two: {
    backgroundColor: 'rgb(0,0,255)',
    fontSize: 40,
    flex: 2,
  },
  three: {
    backgroundColor: '#0f0',
    fontSize: 40,
    flex: 1,
  },
});
