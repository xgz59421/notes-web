// rncs

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30, color: 'red'}}> Hello World! </Text>
        <Text style={ss.ab}> Hello World! </Text>
        <Text style={ss.cd}> Hello 凯凯! </Text>
        {/* 多个样式: 使用数组来保存 */}
        <Text style={[ss.cd, ss.xyz]}> Hello 凯凯! </Text>
      </View>
    );
  }
}

// 书写 内部样式
const ss = StyleSheet.create({
  ab: {fontSize: 30, color: 'red'},
  cd: {fontSize: 40, color: 'green'},
  xyz: {borderRadius: 10, backgroundColor: 'blue'},
});
