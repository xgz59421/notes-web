// rncs
import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

/**
 * rpx:
 *
 * 网页开发中: 存在百分数  width:50%;   网页不管怎么缩放 永远都是一半的宽度
 *  1%的宽度:  实时获取浏览器的实际宽度 / 100 = 1% 的宽度.  50%  = 50 * (屏幕宽 / 100)
 *
 * 小程序: 750rpx代表屏幕宽;    300rpx = 300 * (屏幕宽/750)
 *   定死: 把UI设计图的宽度设置为 750; 我们就可以按照想过图进行大小书写, 不用换算成百分数; 一样能适配
 *
 * RN: 本身不具备rpx单位:  只能自己算
 */

//获取屏幕的宽和高
const {width, height} = Dimensions.get('screen');

// 快速解包写法, 相当于
// const width = Dimensions.get('screen').width
// const height = Dimensions.get('screen').height

// Dimensions.get('screen') 的结果是对象类型 {width:xxx, height:xxx}

//screen: 屏幕宽和高
//window: 窗口的宽和高
//差别在于弹出键盘时: 屏幕高 = 窗口高 + 键盘高;   即弹出键盘时 窗口高度会变小

// rn的份数比较随意: 具体参考美工效果图: 此处参照小程序分750份
function rpx(p) {
  return (width / 750) * p;
}
//使用时: rpx(375)

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{backgroundColor: 'red', width: rpx(375)}}>
          textInComponent
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
