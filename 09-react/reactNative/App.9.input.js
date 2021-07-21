//rnc

import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

export default class App extends Component {
  state = {uname: '', upwd: ''};

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={{borderWidth: 1, width: 200, color: 'black', fontSize: 30}}
        />

        <TextInput
          placeholder="请输入密码"
          style={{fontSize: 30}}
          secureTextEntry
        />
        <TextInput placeholder="自动焦点" autoFocus />

        {/* 双向数据绑定 */}
        <TextInput
          placeholder="请输入用户名"
          value={this.state.uname}
          onChangeText={this._onChangUname}
        />
        <Text>{this.state.uname}</Text>
        {/* 密码 */}
        <TextInput
          placeholder="请输入密码"
          secureTextEntry
          value={this.state.upwd}
          onChangeText={(upwd) => this.setState({upwd})}
        />
        <Text>{this.state.upwd}</Text>
      </View>
    );
  }

  _onChangUname = (uname) => {
    console.log(uname);

    // 语法糖写法:  { uname: uname }   属性名和值一样, 则简化 {uname}
    this.setState({uname});
  };
}
