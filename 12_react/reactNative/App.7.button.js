// rnc

import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        {/* title: 规定按钮的标题 */}
        <Button title="我是按钮" />

        {/* color: iOS文本颜色 android背景色 */}
        <Button title="text color" color="green" />

        {/* onPress: 点击事件 */}
        <Button title="点击事件" onPress={() => alert('点击事件')} />

        {/* disabled: 不可用 */}
        <Button title="不可用按钮" disabled />

        {/* 按钮不接受自定义样式 */}
        <Button title="样式" style={{color: 'black'}} />
      </View>
    );
  }
}
