// rnc

import React, {Component} from 'react';
import {Text, View} from 'react-native';

/**
 * RN本质上 就是在 React 基础上 添加 react-native 组件库
 * 使用此组件库中的组件 就可以书写 App 页面
 *
 * 微信小程序大量借鉴了 RN 的组件名
 *
 * View 理解为 div
 * Text 理解为 span
 */

export default class App extends Component {
  render() {
    return (
      // RN的样式是 非层叠样式: 子元素不会继承父元素的样式!
      <View style={{fontSize: 40}}>
        {/* 网页上有很多大小相关的单位: px rpx em rem vh vm... */}
        {/* RN中, 手机端上只有 物理像素一个单位 dp */}
        {/* RN官方要求: 大小相关不需要单位 */}
        <Text style={{color: 'red', fontSize: 40}}> Hello World! </Text>

        {/* 只有 Text元素例外: 可以把样式继承给内部的 text 元素 */}
        <Text style={{fontSize: 40}}>
          <Text>Hello KaiKai!</Text>
          <Text>Hello KaiKai!</Text>
          {/* 手机端软件没有 选择器概念: 导致没有 className */}
          <Text>Hello KaiKai!</Text>
        </Text>
      </View>
    );
  }
}
