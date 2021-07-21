import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function rpx(p) {
  return (width / 750) * p;
}

export default class LoginScreen extends Component {
  logo = 'http://101.96.128.94:9999/img/header/logo.png';

  state = {
    uname: '',
    upwd: '',
  };

  _doLogin() {
    console.log(this.state.uname, this.state.upwd);

    let url = 'http://101.96.128.94:9999/data/user/login.php';
    // 请求方式分 POST 和 GET
    // 1. GET:  路径?参数=值&参数=值...     路径和参数在一起
    // 2. POST: 路径 和 参数分开传递!
    let body = `uname=${this.state.uname}&upwd=${this.state.upwd}`;

    // 账号 doudou  密码 123456

    // post请求固定方式: fetch(地址, 参数及配置)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        let {code} = res;
        if (code == 200) {
          // alert('登录成功, 即将跳转到主菜单页面');
          Alert.alert('恭喜', '登录成功, 即将跳转到主菜单页面', [
            {
              text: '确定',
              onPress: () => this.props.navigation.navigate('Main'),
            },
          ]);
        } else {
          Alert.alert('提示', '登录失败!', [{text: '确定'}]);
        }
      });
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          height: height - 81,
        }}>
        <Image source={{uri: this.logo}} style={ss.logo} />
        <Text style={{fontSize: rpx(40), marginTop: rpx(20)}}>
          后台管理系统
        </Text>

        <View style={{width: rpx(500), marginTop: rpx(100)}}>
          <TextInput
            placeholder="请输入管理员用户名"
            style={ss.input}
            // (uname) => this.setState({uname: uname})
            onChangeText={(uname) => this.setState({uname})}
          />
          <TextInput
            placeholder="请输入用户登录密码"
            style={[ss.input, {marginBottom: rpx(20)}]}
            secureTextEntry
            onChangeText={(upwd) => this.setState({upwd})}
          />
          <Button title="登录" onPress={this._doLogin.bind(this)} />
        </View>

        <Text style={ss.right}>2017版本所有 © CODEBOY.COM</Text>
      </View>
    );
  }
}

const ss = StyleSheet.create({
  logo: {
    width: rpx(168) * 2,
    height: rpx(41) * 2,
    marginTop: rpx(100),
  },
  input: {
    fontSize: rpx(30),
    color: 'black',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
  },
  right: {
    position: 'absolute',
    bottom: rpx(100),
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    paddingVertical: rpx(15),
    color: 'white',
  },
});
