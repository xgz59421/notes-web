// rnc

import React, {Component} from 'react';
import {ActivityIndicator, Switch, Text, View} from 'react-native';

export default class App extends Component {
  state = {show: true};

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <ActivityIndicator color="green" size="large" />
        {/* android手机: size属性可以给数值 */}
        <ActivityIndicator
          color="green"
          size={100}
          animating={this.state.show}
        />

        {/* 开关组件: 是典型的受控组件-- 受到代码控制 */}
        <Switch
          value={this.state.show}
          onValueChange={(show) => this.setState({show})}
        />
      </View>
    );
  }
}
