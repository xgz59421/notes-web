// rncs

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const {width, height} = Dimensions.get('screen'); //屏幕 宽和高;  不受键盘影响

function rpx(p) {
  return (width / 750) * p;
}

export default class App extends Component {
  // 变: 代码运行期间 变化靠 state 状态值
  state = {hidePwd: true};

  bg =
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603212097369&di=5c5f4204435d33c2ebee394c72dc51a3&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201608%2F06%2F073941iqddd1ehw7w3fe1t.jpg';

  logo =
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603212699264&di=99bff46750558a02f30125e1661923d3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F16%2F20150916235818_HVAk2.jpeg';

  render() {
    return (
      // 整个视图的默认高度: 窗口高 = 屏幕高- 键盘高
      <View style={{height}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ImageBackground
          source={{uri: this.bg}}
          style={{width: '100%', height: '100%'}}
          blurRadius={5}>
          <View style={ss.header}>
            <TouchableOpacity style={{position: 'absolute', left: rpx(20)}}>
              <Image
                source={require('./assets/left.png')}
                style={{width: rpx(50), height: rpx(50)}}
              />
            </TouchableOpacity>

            <Text style={{color: 'white', fontSize: rpx(35)}}>注册</Text>
          </View>

          <Image source={{uri: this.logo}} style={ss.logo} />

          <View style={ss.body}>
            <View style={ss.phone}>
              <Text style={{fontSize: rpx(30), color: 'gray'}}>手机号</Text>
              <TextInput style={{fontSize: rpx(35), flex: 1, color: 'white'}} />
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={ss.code}>
                <Text style={{fontSize: rpx(30), color: 'gray'}}>验证码</Text>
                <TextInput
                  style={{flex: 1, fontSize: rpx(35), color: 'white'}}
                />
              </View>
              <TouchableOpacity>
                <Text style={{fontSize: rpx(35), color: 'rgb(80,80,80)'}}>
                  获取验证码
                </Text>
              </TouchableOpacity>
            </View>

            <View style={ss.pwd}>
              <Text style={{fontSize: rpx(30), color: 'gray'}}>
                密&nbsp;&nbsp;&nbsp;&nbsp;码
              </Text>
              <TextInput
                style={{flex: 1, fontSize: rpx(30), color: 'white'}}
                secureTextEntry={this.state.hidePwd}
              />
              <TouchableOpacity
                onPress={() => this.setState({hidePwd: !this.state.hidePwd})}>
                <Image
                  source={
                    this.state.hidePwd
                      ? require('./assets/hide.png')
                      : require('./assets/show.png')
                  }
                  style={{width: rpx(40), height: rpx(40)}}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.7} style={ss.loginBtn}>
              <Text style={ss.loginBtn_text}>注册</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: rpx(50),
              }}>
              <Text style={{color: 'rgb(230,230,230)'}}>已注册过, </Text>
              <TouchableOpacity>
                <Text style={{color: 'yellow'}}>登录</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 'auto'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{height: 1, backgroundColor: 'gray', flex: 1}} />
                <Text
                  style={{
                    color: 'gray',
                    marginHorizontal: rpx(20),
                    fontSize: rpx(25),
                  }}>
                  第三方登录
                </Text>
                <View style={{height: 1, backgroundColor: 'gray', flex: 1}} />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: rpx(60),
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    borderRadius: rpx(30),
                  }}>
                  <Image
                    source={require('./assets/qq.png')}
                    style={{width: rpx(60), height: rpx(60)}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    borderRadius: rpx(30),
                  }}>
                  <Image
                    source={require('./assets/wexin.png')}
                    style={{width: rpx(60), height: rpx(60)}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    borderRadius: rpx(30),
                  }}>
                  <Image
                    source={require('./assets/webo.png')}
                    style={{width: rpx(60), height: rpx(60)}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    borderRadius: rpx(30),
                  }}>
                  <Image
                    source={require('./assets/twitter.png')}
                    style={{width: rpx(60), height: rpx(60)}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    borderRadius: rpx(30),
                  }}>
                  <Image
                    source={require('./assets/bilibili.png')}
                    style={{width: rpx(60), height: rpx(60)}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    borderRadius: rpx(30),
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={require('./assets/facebook.png')}
                    style={{width: rpx(60), height: rpx(60)}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const ss = StyleSheet.create({
  logo: {
    width: rpx(150),
    height: rpx(150),
    borderRadius: rpx(75),
    alignSelf: 'center',
    marginTop: rpx(100),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rpx(70),
  },
  body: {
    // borderWidth: 1,
    width: rpx(500),
    alignSelf: 'center',
    marginTop: rpx(100),
    flex: 1,
  },
  phone: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  code: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  pwd: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  loginBtn: {
    backgroundColor: 'gold',
    paddingVertical: rpx(10),
    borderRadius: rpx(10),
    marginTop: rpx(40),
  },
  loginBtn_text: {
    color: 'white',
    fontSize: rpx(30),
    textAlign: 'center',
  },
});
